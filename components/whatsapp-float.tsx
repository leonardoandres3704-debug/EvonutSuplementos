import { whatsappLink } from "@/lib/data"

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("Hola Evonut, quiero hacer una consulta sobre suplementos.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center overflow-hidden rounded-full shadow-lg transition-transform hover:scale-105"
    >
      <img src="/icon-whatsapp.jpg" alt="WhatsApp" className="size-full object-cover" />
    </a>
  )
}
