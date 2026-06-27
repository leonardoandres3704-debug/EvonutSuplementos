import fs from "node:fs"
import path from "node:path"

// Carpeta donde Leonardo va dejando las imágenes. Soporta cualquier organización:
//   /catalogo/Marca/foto.jpg                      -> marca = Marca
//   /catalogo/categoria/foto.jpg                  -> categoria = categoria
//   /catalogo/Cualquier cosa/Marca/foto.jpg        -> marca = Marca (la carpeta intermedia se ignora)
//   /catalogo/Cualquier cosa/categoria/foto.jpg    -> categoria = categoria
const CATALOGO_DIR = path.join(process.cwd(), "public", "catalogo")

const EXTENSIONES_VALIDAS = [".jpg", ".jpeg", ".png", ".webp", ".gif"]

// Carpetas "contenedoras" sin significado propio (ej: "Nueva carpeta") que se ignoran
// a la hora de decidir marca/categoría, pero sus imágenes igual se muestran.
const CARPETAS_IGNORADAS = ["nueva carpeta", "sin nombre", "fotos", "catalogo", "imagenes"]

// Nombres de carpeta que representan CATEGORÍAS (no marcas). Se reconocen por slug normalizado
// (sin tildes, sin guiones, en minúscula). Si una carpeta no está en esta lista, se asume que es marca.
const CATEGORIAS_CONOCIDAS: Record<string, string> = {
  proteinas: "Proteínas",
  creatinas: "Creatinas",
  preentrenos: "Pre-entrenos",
  aminoacidos: "Aminoácidos",
  aminoasidos: "Aminoácidos",
  energeticos: "Energéticos",
  hidratacion: "Hidratación",
  vitaminas: "Vitaminas",
  combos: "Combos",
  barrasproteicas: "Barras proteicas",
  pastademani: "Pasta de maní",
  suplementos: "Suplementos varios",
  otros: "Otros",
}

function normalizarSlug(nombre: string) {
  return nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // sin tildes
    .toLowerCase()
    .replace(/[-_\s]+/g, "")
    .trim()
}

function esCarpetaIgnorada(nombre: string) {
  return CARPETAS_IGNORADAS.includes(nombre.toLowerCase().trim())
}

function tituloDesdeNombreCarpeta(nombre: string) {
  return nombre
    .replace(/[-_]+/g, " ")
    .trim()
    .split(" ")
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
    .join(" ")
}

// Patrones de archivo que NO sirven como nombre de producto (cámara / WhatsApp).
const PATRONES_GENERICOS = [
  /^img[-_]?\d+/i,
  /^wa\d+/i,
  /^image/i,
  /^foto/i,
  /^\d+$/,
  /^whatsapp[\s_-]?image/i,
]

function esNombreGenerico(nombreSinExtension: string) {
  return PATRONES_GENERICOS.some((re) => re.test(nombreSinExtension.trim()))
}

export type ProductoCatalogo = {
  archivo: string
  nombre: string
  marca: string | null
  categoriaSlug: string | null
  categoriaLabel: string | null
  imagen: string
}

export type CatalogoData = {
  productos: ProductoCatalogo[]
  marcas: { slug: string; label: string; cantidad: number }[]
  categorias: { slug: string; label: string; cantidad: number }[]
}

function listarImagenesRecursivo(dir: string, base: string): { rutaRelativa: string; segmentos: string[] }[] {
  const resultado: { rutaRelativa: string; segmentos: string[] }[] = []

  const entradas = fs.readdirSync(dir, { withFileTypes: true })
  for (const entrada of entradas) {
    const rutaCompleta = path.join(dir, entrada.name)
    if (entrada.isDirectory()) {
      resultado.push(...listarImagenesRecursivo(rutaCompleta, base))
    } else if (EXTENSIONES_VALIDAS.includes(path.extname(entrada.name).toLowerCase())) {
      const rutaRelativa = path.relative(base, rutaCompleta)
      const segmentos = rutaRelativa.split(path.sep)
      resultado.push({ rutaRelativa, segmentos })
    }
  }

  return resultado
}

export function getCatalogo(): CatalogoData {
  if (!fs.existsSync(CATALOGO_DIR)) {
    return { productos: [], marcas: [], categorias: [] }
  }

  const archivos = listarImagenesRecursivo(CATALOGO_DIR, CATALOGO_DIR)

  // Contador por marca/categoría para nombres genéricos (Marca 1, Marca 2, ...)
  const contadorPorGrupo: Record<string, number> = {}

  const productos: ProductoCatalogo[] = archivos.map(({ segmentos }) => {
    const archivo = segmentos[segmentos.length - 1]
    const carpetas = segmentos.slice(0, -1).filter((c) => !esCarpetaIgnorada(c))

    let categoriaSlug: string | null = null
    let categoriaLabel: string | null = null
    let marca: string | null = null

    for (const carpeta of carpetas) {
      const slugNormalizado = normalizarSlug(carpeta)
      if (CATEGORIAS_CONOCIDAS[slugNormalizado]) {
        categoriaLabel = CATEGORIAS_CONOCIDAS[slugNormalizado]
        categoriaSlug = normalizarSlug(categoriaLabel)
      } else {
        // La carpeta más cercana al archivo que no es categoría = marca
        marca = tituloDesdeNombreCarpeta(carpeta)
      }
    }

    const grupoKey = marca ?? categoriaLabel ?? "Producto"
    contadorPorGrupo[grupoKey] = (contadorPorGrupo[grupoKey] ?? 0) + 1

    const sinExtension = archivo.replace(/\.[^.]+$/, "")
    const normalizado = sinExtension.replace(/[-_]+/g, " ").trim()
    const nombre =
      !normalizado || esNombreGenerico(normalizado)
        ? `${grupoKey} ${contadorPorGrupo[grupoKey]}`
        : tituloDesdeNombreCarpeta(normalizado)

    return {
      archivo,
      nombre,
      marca,
      categoriaSlug,
      categoriaLabel,
      imagen: `/catalogo/${segmentos.map(encodeURIComponent).join("/")}`,
    }
  })

  // Armar listas únicas de marcas y categorías presentes, con cantidad de productos
  const marcasMap = new Map<string, number>()
  const categoriasMap = new Map<string, { label: string; cantidad: number }>()

  for (const p of productos) {
    if (p.marca) {
      marcasMap.set(p.marca, (marcasMap.get(p.marca) ?? 0) + 1)
    }
    if (p.categoriaSlug && p.categoriaLabel) {
      const actual = categoriasMap.get(p.categoriaSlug)
      categoriasMap.set(p.categoriaSlug, {
        label: p.categoriaLabel,
        cantidad: (actual?.cantidad ?? 0) + 1,
      })
    }
  }

  const marcas = Array.from(marcasMap.entries())
    .map(([label, cantidad]) => ({ slug: normalizarSlug(label), label, cantidad }))
    .sort((a, b) => a.label.localeCompare(b.label))

  const categorias = Array.from(categoriasMap.entries())
    .map(([slug, { label, cantidad }]) => ({ slug, label, cantidad }))
    .sort((a, b) => a.label.localeCompare(b.label))

  return { productos, marcas, categorias }
}

export function getTotalProductos(data: CatalogoData) {
  return data.productos.length
}
