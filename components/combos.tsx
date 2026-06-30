import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { combos, combosPeso, whatsappLink } from "@/lib/data"

function ComboCard({ combo, index }: { combo: (typeof combos)[0]; index: number }) {
  return (
    <article
      id={combo.id}
      className="grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-card lg:grid-cols-2"
    >
      <div className={`relative min-h-72 ${index % 2 === 1 ? "lg:order-2" : ""}`}>
        <img
          src={combo.imagen}
          alt={`${combo.titulo} - ${combo.deporte}`}
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:bg-gradient-to-r" />
        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
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
            No todos los deportes necesitan lo mismo. Armamos combinaciones de suplementos pensadas
            para cada tipo de entrenamiento.
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
              Dos opciones según tu estilo de entrenamiento: con o sin cafeína. Consultanos cuál se
              adapta mejor a vos.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {combosPeso.map((combo) => (
              <article
                key={combo.id}
                id={combo.id}
                className="flex flex-col overflow-hidden rounded-xl border border-border bg-card"
              >
                <div className="relative h-72 w-full overflow-hidden">
                  <img
                    src={combo.imagen}
                    alt={combo.titulo}
                    className="h-full w-full object-cover object-top"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-foreground">
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
