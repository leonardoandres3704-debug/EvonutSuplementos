import { Camera, MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/data"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <span className="font-heading text-2xl font-bold uppercase tracking-tight text-foreground">
            Evo<span className="text-primary">nut</span>
          </span>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Suplementos deportivos de más de 20 marcas. Combos a medida para maratón, ciclismo y
            gym.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href="#productos" className="text-muted-foreground transition-colors hover:text-foreground">
              Productos
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
          <div className="flex gap-3">
            <a
              href={whatsappLink("Hola Evonut, quiero hacer una consulta.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <MessageCircle className="size-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex size-10 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <Camera className="size-5" />
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
