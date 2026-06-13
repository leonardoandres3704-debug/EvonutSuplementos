import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { Combos } from "@/components/combos"
import { Productos } from "@/components/productos"
import { Marcas } from "@/components/marcas"
import { ContactoCta } from "@/components/contacto-cta"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <Hero />
      <Benefits />
      <Combos />
      <Productos />
      <Marcas />
      <ContactoCta />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
