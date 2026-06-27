import { Check } from "lucide-react"

const beneficiosProteina = [
  "Recuperación y crecimiento muscular",
  "Fortalecimiento del sistema inmune",
  "Control del peso y el apetito",
  "Aceleración del metabolismo",
]

const mitosCreatina = [
  {
    pregunta: "¿La creatina retiene líquido?",
    respuesta:
      "La creatina retiene agua de forma intracelular (dentro del músculo), no debajo de la piel. El músculo se ve más lleno y duro: ese aumento de peso en la balanza es agua en el músculo, no grasa.",
  },
  {
    pregunta: "¿Es un suplemento exclusivo para culturistas?",
    respuesta:
      "Es un mito: se asume que solo sirve para quienes buscan un tamaño muscular extremo. En realidad beneficia a cualquier deportista de fuerza, velocidad o resistencia, y la ciencia muestra beneficios para la salud cognitiva, la memoria y la protección ósea en adultos mayores.",
  },
]

export function InfoNutricional() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Función de las proteínas */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Nutrición deportiva
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-3xl">
            Función de las proteínas
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground text-pretty">
            Son moléculas esenciales que ejecutan casi todas las tareas del organismo: crean
            fibras que dan soporte a los músculos, tendones, piel y cabello.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {beneficiosProteina.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Check className="size-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Mitos sobre la creatina */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            ¿Todo es cierto?
          </span>
          <h2 className="mt-3 font-heading text-2xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-3xl">
            Mitos sobre la creatina
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {mitosCreatina.map((mito) => (
              <div key={mito.pregunta} className="rounded-xl border border-border bg-card p-5">
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {mito.pregunta}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{mito.respuesta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
