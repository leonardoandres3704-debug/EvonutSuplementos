import { CONTACTO, whatsappLink } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-12 md:flex-row md:items-start md:justify-between md:px-6">
        <div>
          <img src="/logo-evonut.png" alt="Evonut Suplementos Deportivos" className="h-12 w-auto" />
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Suplementos deportivos de más de 20 marcas. Combos a medida para maratón, ciclismo y
            gym.
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a href="/catalogo" className="text-muted-foreground transition-colors hover:text-foreground">
            Catálogo
          </a>
          <a href="#combos" className="text-muted-foreground transition-colors hover:text-foreground">
            Combos
          </a>
          <a href="#marcas" className="text-muted-foreground transition-colors hover:text-foreground">
            Marcas
          </a>
          <a href="#nosotros" className="text-muted-foreground transition-colors hover:text-foreground">
            Nosotros
          </a>
        </nav>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5 text-sm text-muted-foreground">
            <a href={`tel:${CONTACTO.telefono1.tel}`} className="transition-colors hover:text-foreground">
              {CONTACTO.telefono1.display}
            </a>
            <a href={`tel:${CONTACTO.telefono2.tel}`} className="transition-colors hover:text-foreground">
              {CONTACTO.telefono2.display}
            </a>
            <a href={`mailto:${CONTACTO.email}`} className="transition-colors hover:text-foreground">
              {CONTACTO.email}
            </a>
          </div>

          <div className="flex gap-3">
            <a
              href={whatsappLink("Hola Evonut, quiero hacer una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center overflow-hidden rounded-md border border-border transition-colors hover:border-primary/50"
            >
              <img src="/icon-whatsapp.jpg" alt="WhatsApp" className="size-full object-cover" />
            </a>
            <a
              href={CONTACTO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex size-10 items-center justify-center overflow-hidden rounded-md border border-border transition-colors hover:border-primary/50"
            >
              <img src="/icon-facebook.png" alt="Facebook" className="size-full object-cover" />
            </a>
            <a
              href={CONTACTO.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center overflow-hidden rounded-md border border-border transition-colors hover:border-primary/50"
            >
              <img src="/icon-instagram.jpg" alt="Instagram" className="size-full object-cover" />
            </a>
            <a
              href={`mailto:${CONTACTO.email}`}
              aria-label="Correo electrónico"
              className="flex size-10 items-center justify-center overflow-hidden rounded-md border border-border transition-colors hover:border-primary/50"
            >
              <img src="/icon-gmail.png" alt="Correo electrónico" className="size-full object-cover" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground md:px-6">
          © {new Date().getFullYear()} Evonut. Todos los derechos reservados. Los suplementos no
          reemplazan una alimentación equilibrada.
        </div>
      </div>
    </footer>
  )
}
