import { MessageCircle } from "lucide-react"
import { whatsappLink } from "@/lib/data"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("Hola Evonut, quiero hacer una consulta sobre suplementos.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
      <span className="hidden text-sm uppercase tracking-wide sm:inline">WhatsApp</span>
    </a>
  )
}
