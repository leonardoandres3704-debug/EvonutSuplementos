import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getCatalogo, getMuestraCatalogo, getTotalProductos } from "@/lib/catalogo-server"

export function CatalogoPreview() {
  const catalogo = getCatalogo()
  const total = getTotalProductos(catalogo)
  const muestra = getMuestraCatalogo(catalogo, 8)

  if (total === 0) return null

  return (
    <section id="catalogo-preview" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Catálogo completo</span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
              +{total} productos disponibles
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Más marcas, más variedad. Mirá el catálogo completo filtrado por marca y categoría.
            </p>
          </div>

          <Link
            href="/catalogo"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
          >
            Ver catálogo completo
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {muestra.map((producto) => (
            <Link
              key={producto.imagen}
              href="/catalogo"
              className="group relative aspect-square overflow-hidden rounded-xl border border-border bg-secondary"
            >
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
