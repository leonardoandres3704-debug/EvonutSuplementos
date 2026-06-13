import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/data"

export function ContactoCta() {
  return (
    <section id="nosotros" className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 md:px-6 md:py-28 lg:grid-cols-2 lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sobre Evonut
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
            Suplementación pensada para tu objetivo
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Evonut nace para acercarte suplementos deportivos de calidad sin vueltas. Más que
            vender productos, queremos que sepas qué tomar, cuándo y para qué. Por eso armamos
            combos por disciplina y te asesoramos de forma personalizada.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Ya sea que corras tu primer maratón, sumes kilómetros en la bici o busques ganar fuerza
            en el gym, te ayudamos a elegir lo que realmente necesitás.
          </p>
        </div>

        <div className="rounded-2xl border border-primary/30 bg-gradient-to-br from-primary/15 to-card p-8 md:p-10">
          <MessageCircle className="size-10 text-primary" />
          <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
            Hacé tu pedido por WhatsApp
          </h3>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Escribinos y te respondemos con precios, disponibilidad y recomendaciones según tu
            entrenamiento. Sin compromiso.
          </p>
          <Button
            size="lg"
            className="mt-6 w-full sm:w-auto"
            render={
              <a
                href={whatsappLink("Hola Evonut, quiero hacer una consulta sobre suplementos.")}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Escribir por WhatsApp
          </Button>
        </div>
      </div>
    </section>
  )
}
