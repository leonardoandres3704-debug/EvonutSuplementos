"use client"

import { useMemo, useState } from "react"
import { whatsappLink } from "@/lib/data"
import type { CategoriaCatalogo } from "@/lib/catalogo-server"

export function CatalogoGrid({ categorias }: { categorias: CategoriaCatalogo[] }) {
  const [activa, setActiva] = useState<string>("todos")
  const [busqueda, setBusqueda] = useState("")

  const todosLosProductos = useMemo(
    () => categorias.flatMap((c) => c.productos),
    [categorias],
  )

  const productosFiltrados = useMemo(() => {
    const base = activa === "todos" ? todosLosProductos : categorias.find((c) => c.slug === activa)?.productos ?? []

    if (!busqueda.trim()) return base

    const q = busqueda.trim().toLowerCase()
    return base.filter((p) => p.nombre.toLowerCase().includes(q))
  }, [activa, busqueda, categorias, todosLosProductos])

  if (categorias.length === 0) {
    return (
      <div className="mt-10 rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
        Todavía no hay imágenes cargadas en el catálogo. Agregá fotos dentro de las carpetas en{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5">public/catalogo/&lt;categoria&gt;</code> y van a
        aparecer acá automáticamente.
      </div>
    )
  }

  return (
    <div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiva("todos")}
            className={`rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
              activa === "todos"
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
            }`}
          >
            Todos ({todosLosProductos.length})
          </button>
          {categorias.map((c) => (
            <button
              key={c.slug}
              onClick={() => setActiva(c.slug)}
              className={`rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                activa === c.slug
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {c.label} ({c.productos.length})
            </button>
          ))}
        </div>

        <input
          type="text"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          placeholder="Buscar producto..."
          className="w-full rounded-full border border-border bg-background px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground sm:w-64"
        />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {productosFiltrados.map((producto) => (
          <article
            key={`${producto.categoriaSlug}-${producto.archivo}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
          >
            <div className="relative aspect-square overflow-hidden bg-secondary">
              <img
                src={producto.imagen || "/placeholder.svg"}
                alt={producto.nombre}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-2 top-2 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wide text-foreground backdrop-blur-sm">
                {producto.categoriaLabel}
              </span>
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
