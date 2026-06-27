"use client"

import { useMemo, useState } from "react"
import { whatsappLink } from "@/lib/data"
import type { CatalogoData } from "@/lib/catalogo-server"

export function CatalogoGrid({ data }: { data: CatalogoData }) {
  const [marcaActiva, setMarcaActiva] = useState<string>("todas")
  const [categoriaActiva, setCategoriaActiva] = useState<string>("todas")
  const [busqueda, setBusqueda] = useState("")

  const productosFiltrados = useMemo(() => {
    let base = data.productos

    if (marcaActiva !== "todas") {
      base = base.filter((p) => p.marca && p.marca.toLowerCase() === marcaActiva)
    }

    if (categoriaActiva !== "todas") {
      base = base.filter((p) => p.categoriaSlug === categoriaActiva)
    }

    if (busqueda.trim()) {
      const q = busqueda.trim().toLowerCase()
      base = base.filter(
        (p) => p.nombre.toLowerCase().includes(q) || (p.marca ?? "").toLowerCase().includes(q),
      )
    }

    return base
  }, [data.productos, marcaActiva, categoriaActiva, busqueda])

  if (data.productos.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
        Todavía no hay imágenes cargadas en el catálogo. Agregá fotos dentro de{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5">public/catalogo/</code> y van a aparecer acá
        automáticamente.
      </div>
    )
  }

  return (
    <div>
      {/* Filtro principal: marca */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setMarcaActiva("todas")}
          className={`rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
            marcaActiva === "todas"
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
          }`}
        >
          Todas las marcas ({data.productos.length})
        </button>
        {data.marcas.map((m) => (
          <button
            key={m.slug}
            onClick={() => setMarcaActiva(m.slug)}
            className={`rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
              marcaActiva === m.slug
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {m.label} ({m.cantidad})
          </button>
        ))}
      </div>

      {/* Filtros secundarios, discretos: categoría (solo si hay alguna) + buscador */}
      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {data.categorias.length > 0 ? (
          <select
            value={categoriaActiva}
            onChange={(e) => setCategoriaActiva(e.target.value)}
            className="w-full rounded-full border border-border bg-background px-4 py-2 text-xs uppercase tracking-wide text-muted-foreground sm:w-auto"
          >
            <option value="todas">Categoría: todas</option>
            {data.categorias.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.label} ({c.cantidad})
              </option>
            ))}
          </select>
        ) : (
          <span />
        )}

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar por nombre o marca..."
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground sm:w-64"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {productosFiltrados.map((producto) => (
          <article
            key={producto.imagen}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {producto.marca && (
                <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground backdrop-blur-sm">
                  {producto.marca}
                </span>
              )}
              {producto.categoriaLabel && (
                <span className="absolute right-2 top-2 rounded-full bg-primary/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-primary-foreground backdrop-blur-sm">
                  {producto.categoriaLabel}
                </span>
              )}
            </div>
            <div className="flex flex-1 flex-col gap-2 p-3">
              <h3 className="line-clamp-2 font-heading text-sm font-semibold uppercase tracking-tight text-foreground">
                {producto.nombre}
              </h3>
              <a
                href={whatsappLink(`Hola Evonut, quiero consultar precio y disponibilidad de ${producto.nombre}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto rounded-md border border-border px-3 py-1.5 text-center text-xs font-medium uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Consultar
              </a>
            </div>
          </article>
        ))}
      </div>

      {productosFiltrados.length === 0 && (
        <p className="mt-10 text-center text-muted-foreground">No encontramos productos con esa búsqueda.</p>
      )}
    </div>
  )
}
