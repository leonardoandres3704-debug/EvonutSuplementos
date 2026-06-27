import fs from "node:fs"
import path from "node:path"

// Carpeta donde Leonardo va a ir dejando las imágenes, organizadas por categoría.
// Cada subcarpeta de /public/catalogo es una categoría.
// Cada archivo dentro es un producto: el NOMBRE DEL ARCHIVO se usa como nombre del producto.
const CATALOGO_DIR = path.join(process.cwd(), "public", "catalogo")

const EXTENSIONES_VALIDAS = [".jpg", ".jpeg", ".png", ".webp", ".gif"]

// Etiquetas lindas para mostrar según el nombre de la carpeta (slug).
// Si aparece una carpeta nueva que no está en este mapa, se usa el nombre de la carpeta tal cual.
const ETIQUETAS_CATEGORIA: Record<string, string> = {
  proteinas: "Proteínas",
  creatinas: "Creatinas",
  "pre-entrenos": "Pre-entrenos",
  aminoacidos: "Aminoácidos",
  energeticos: "Energéticos",
  hidratacion: "Hidratación",
  vitaminas: "Vitaminas",
  otros: "Otros",
}

export type ProductoCatalogo = {
  archivo: string
  nombre: string
  categoriaSlug: string
  categoriaLabel: string
  imagen: string
}

export type CategoriaCatalogo = {
  slug: string
  label: string
  productos: ProductoCatalogo[]
}

// Patrones típicos de WhatsApp / cámara que NO sirven como nombre de producto.
// Si el archivo se llama así, se muestra un nombre genérico en vez del nombre de archivo crudo.
const PATRONES_GENERICOS = [/^img[-_]?\d+/i, /^wa\d+/i, /^image/i, /^foto/i, /^\d+$/]

function esNombreGenerico(nombreSinExtension: string) {
  return PATRONES_GENERICOS.some((re) => re.test(nombreSinExtension.trim()))
}

function limpiarNombre(archivo: string, indiceEnCategoria: number, categoriaLabel: string) {
  const sinExtension = archivo.replace(/\.[^.]+$/, "")
  const normalizado = sinExtension.replace(/[-_]+/g, " ").trim()

  if (!normalizado || esNombreGenerico(normalizado)) {
    return `${categoriaLabel} ${indiceEnCategoria + 1}`
  }

  // Capitaliza cada palabra (Whey protein isolate -> Whey Protein Isolate)
  return normalizado
    .split(" ")
    .map((palabra) => (palabra.length ? palabra[0].toUpperCase() + palabra.slice(1) : palabra))
    .join(" ")
}

function labelDeSlug(slug: string) {
  if (ETIQUETAS_CATEGORIA[slug]) return ETIQUETAS_CATEGORIA[slug]
  return slug
    .split("-")
    .map((p) => (p ? p[0].toUpperCase() + p.slice(1) : p))
    .join(" ")
}

export function getCatalogo(): CategoriaCatalogo[] {
  if (!fs.existsSync(CATALOGO_DIR)) return []

  const carpetas = fs
    .readdirSync(CATALOGO_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
    .sort()

  const categorias: CategoriaCatalogo[] = carpetas.map((slug) => {
    const label = labelDeSlug(slug)
    const dirCategoria = path.join(CATALOGO_DIR, slug)

    const archivos = fs
      .readdirSync(dirCategoria)
      .filter((f) => EXTENSIONES_VALIDAS.includes(path.extname(f).toLowerCase()))
      .sort()

    const productos: ProductoCatalogo[] = archivos.map((archivo, i) => ({
      archivo,
      nombre: limpiarNombre(archivo, i, label),
      categoriaSlug: slug,
      categoriaLabel: label,
      imagen: `/catalogo/${slug}/${encodeURIComponent(archivo)}`,
    }))

    return { slug, label, productos }
  })

  // Solo mostramos categorías que tengan al menos una imagen
  return categorias.filter((c) => c.productos.length > 0)
}

export function getTotalProductos(categorias: CategoriaCatalogo[]) {
  return categorias.reduce((acc, c) => acc + c.productos.length, 0)
}
