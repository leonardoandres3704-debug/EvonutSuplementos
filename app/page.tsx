import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Benefits } from "@/components/benefits"
import { InfoNutricional } from "@/components/info-nutricional"
import { Combos } from "@/components/combos"
import { CatalogoPreview } from "@/components/catalogo-preview"
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
      <InfoNutricional />
      <Combos />
      <CatalogoPreview />
      <Marcas />
      <ContactoCta />
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
