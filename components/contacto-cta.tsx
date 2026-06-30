import { Phone, Mail } from "lucide-react"
import { CONTACTO, whatsappLink } from "@/lib/data"

const canales = [
  {
    label: "WhatsApp",
    icon: "/icon-whatsapp.jpg",
    items: [
      { texto: "341 531-2051", href: whatsappLink("Hola Evonut, quiero hacer una consulta.") },
      { texto: "341 363-7006", href: `https://wa.me/5493413637006?text=${encodeURIComponent("Hola Evonut, quiero hacer una consulta.")}` },
    ],
    externo: true,
  },
  {
    label: "Teléfono",
    iconComp: Phone,
    items: [
      { texto: "341 531-2051", href: `tel:${CONTACTO.telefono1.tel}` },
      { texto: "341 363-7006", href: `tel:${CONTACTO.telefono2.tel}` },
    ],
    externo: false,
  },
  {
    label: "Instagram",
    icon: "/icon-instagram.jpg",
    items: [{ texto: "@evonut_", href: CONTACTO.instagram }],
    externo: true,
  },
  {
    label: "Facebook",
    icon: "/icon-facebook.png",
    items: [{ texto: "Evonut Suplementos", href: CONTACTO.facebook }],
    externo: true,
  },
  {
    label: "Correo electrónico",
    icon: "/icon-gmail.png",
    items: [{ texto: CONTACTO.email, href: `mailto:${CONTACTO.email}` }],
    externo: false,
  },
]

export function ContactoCta() {
  return (
    <section id="nosotros" className="border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
        {/* Texto */}
        <div className="max-w-2xl">
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

        {/* Canales de contacto */}
        <div className="mt-14">
          <h3 className="font-heading text-lg font-bold uppercase tracking-wide text-foreground">
            Cómo contactarnos
          </h3>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {canales.map((canal) => (
              <div
                key={canal.label}
                className="flex flex-col gap-3 rounded-xl border border-border bg-card p-5"
              >
                <div className="flex items-center gap-3">
                  {canal.icon ? (
                    <img src={canal.icon} alt={canal.label} className="size-7 rounded-md object-cover" />
                  ) : canal.iconComp ? (
                    <canal.iconComp className="size-6 text-primary" />
                  ) : null}
                  <span className="text-sm font-semibold uppercase tracking-wide text-foreground">
                    {canal.label}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  {canal.items.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      target={canal.externo ? "_blank" : undefined}
                      rel={canal.externo ? "noopener noreferrer" : undefined}
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {item.texto}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
