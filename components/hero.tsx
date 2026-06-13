import { Button } from "@/components/ui/button"
import { whatsappLink } from "@/lib/data"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/hero-athlete.png"
          alt="Atleta entrenando con suplementos deportivos"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-4 py-24 md:px-6 md:py-36 lg:py-44">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            +20 marcas oficiales
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold uppercase leading-[1.05] tracking-tight text-balance text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Combustible para tu <span className="text-primary">máximo rendimiento</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            En Evonut acercamos los mejores suplementos deportivos de más de 20 marcas, con combos
            pensados para maratonistas, ciclistas y quienes entrenan en el gym.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<a href="#combos" />}>
              Ver combos recomendados
            </Button>
            <Button
              size="lg"
              variant="outline"
              render={
                <a
                  href={whatsappLink("Hola Evonut, quiero asesoramiento para elegir mis suplementos.")}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
            >
              Pedir asesoramiento
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
