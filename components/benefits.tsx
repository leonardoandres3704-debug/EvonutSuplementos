import { Truck, ShieldCheck, MessageCircle, Award } from "lucide-react"

const items = [
  {
    icon: Award,
    titulo: "+20 marcas",
    texto: "Trabajamos con un distribuidor con amplio catálogo de marcas oficiales.",
  },
  {
    icon: ShieldCheck,
    titulo: "Productos originales",
    texto: "Suplementos garantizados, con fecha de vencimiento y registro vigente.",
  },
  {
    icon: MessageCircle,
    titulo: "Asesoramiento real",
    texto: "Te ayudamos a elegir según tu deporte y tu objetivo.",
  },
  {
    icon: Truck,
    titulo: "Entrega rápida",
    texto: "Coordinamos envío o retiro de forma simple por WhatsApp.",
  },
]

export function Benefits() {
  return (
    <section className="border-y border-border bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-px overflow-hidden px-4 py-2 sm:grid-cols-2 md:px-6 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.titulo} className="flex items-start gap-4 px-2 py-6 lg:px-6">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
              <item.icon className="size-5" />
            </span>
            <div>
              <h3 className="font-heading text-base font-semibold uppercase tracking-wide text-foreground">
                {item.titulo}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.texto}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
