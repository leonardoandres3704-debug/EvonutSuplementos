import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { combos, combosPeso, whatsappLink } from "@/lib/data"

function ComboCard({ combo, index }: { combo: (typeof combos)[0]; index: number }) {
  const isOdd = index % 2 === 1
  return (
    <article
      id={combo.id}
      className="grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2"
    >
      {/* Imagen: aspect-ratio fijo 4/3 en móvil, altura completa en desktop */}
      <div className={`relative aspect-[4/3] lg:aspect-auto lg:min-h-full ${isOdd ? "lg:order-2" : ""}`}>
        <img
          src={combo.imagen}
          alt={`${combo.titulo} - ${combo.deporte}`}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* gradiente sutil solo para mejorar legibilidad del badge */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow">
          {combo.deporte}
        </span>
      </div>

      <div className="flex flex-col gap-5 p-6 md:p-8 lg:p-10">
        <div>
          <h3 className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground md:text-3xl">
            {combo.titulo}
          </h3>
          <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary">
            {combo.objetivo}
          </p>
        </div>
        <p className="leading-relaxed text-muted-foreground">{combo.descripcion}</p>
        <ul className="flex flex-col gap-3">
          {combo.productos.map((p) => (
            <li key={p} className="flex items-start gap-3 text-sm text-foreground">
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Check className="size-3.5" />
              </span>
              {p}
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-2">
          <Button
            render={
              <a
                href={whatsappLink(`Hola Evonut, me interesa el ${combo.titulo}. ¿Me pasás más info?`)}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Consultar este combo
          </Button>
        </div>
      </div>
    </article>
  )
}

export function Combos() {
  return (
    <>
      {/* Combos por deporte */}
      <section id="combos" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Guía por deporte
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Combos recomendados según tu disciplina
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            No todos los deportes necesitan lo mismo. Armamos combinaciones pensadas para cada tipo de entrenamiento.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8">
          {combos.map((combo, i) => (
            <ComboCard key={combo.id} combo={combo} index={i} />
          ))}
        </div>
      </section>

      {/* Combos pérdida de peso */}
      <section id="perdida-de-peso" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Definición y quema de grasa
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
              Combos Pérdida de Peso
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Dos opciones según tu estilo de entrenamiento: con o sin cafeína.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {combosPeso.map((combo) => (
              <article
                key={combo.id}
                id={combo.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                {/* aspect-[4/3] garantiza proporción consistente en cualquier ancho */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={combo.imagen}
                    alt={combo.titulo}
                    className="absolute inset-0 h-full w-full object-cover object-[center_30%]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground shadow">
                    {combo.deporte}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
                  <div>
                    <h3 className="font-heading text-xl font-bold uppercase tracking-tight text-foreground md:text-2xl">
                      {combo.titulo}
                    </h3>
                    <p className="mt-1 text-sm font-medium uppercase tracking-wide text-primary">
                      {combo.objetivo}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{combo.descripcion}</p>
                  <ul className="flex flex-col gap-2">
                    {combo.productos.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm text-foreground">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <Check className="size-3.5" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-2">
                    <Button
                      render={
                        <a
                          href={whatsappLink(`Hola Evonut, me interesa el ${combo.titulo}. ¿Me pasás más info?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      Consultar este combo
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
