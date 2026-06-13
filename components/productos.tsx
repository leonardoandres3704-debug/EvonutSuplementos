"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { categorias, productos, whatsappLink } from "@/lib/data"

export function Productos() {
  const [activa, setActiva] = useState("Todos")

  const filtrados =
    activa === "Todos" ? productos : productos.filter((p) => p.categoria === activa)

  return (
    <section id="productos" className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Catálogo
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Nuestros productos
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Una selección de lo que podés conseguir. Consultanos por marcas, sabores y
            disponibilidad: nuestro catálogo es mucho más amplio.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiva(cat)}
              className={`rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                activa === cat
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-primary/50 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtrados.map((producto) => (
            <article
              key={producto.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={producto.imagen || "/placeholder.svg"}
                  alt={producto.nombre}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wide text-foreground backdrop-blur-sm">
                  {producto.categoria}
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {producto.marca}
                </span>
                <h3 className="font-heading text-lg font-semibold uppercase tracking-tight text-foreground">
                  {producto.nombre}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {producto.descripcion}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-auto w-full"
                  render={
                    <a
                      href={whatsappLink(
                        `Hola Evonut, quiero consultar precio y disponibilidad de ${producto.nombre} (${producto.marca}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Consultar disponibilidad
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
