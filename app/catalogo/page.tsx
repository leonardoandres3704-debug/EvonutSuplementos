import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { WhatsappFloat } from "@/components/whatsapp-float"
import { CatalogoGrid } from "@/components/catalogo-grid"
import { getCatalogo, getTotalProductos } from "@/lib/catalogo-server"

export const metadata = {
  title: "Catálogo completo | Evonut Suplementos",
  description: "Todos los productos disponibles en Evonut Suplementos, organizados por categoría.",
}

export default function CatalogoPage() {
  const categorias = getCatalogo()
  const total = getTotalProductos(categorias)

  return (
    <main className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Catálogo completo</span>
            <h1 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
              Todos nuestros productos
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              {total > 0
                ? `${total} productos disponibles. Filtrá por categoría o buscá por nombre.`
                : "Acá vas a ver todo el catálogo apenas cargues las imágenes."}
            </p>
          </div>

          <CatalogoGrid categorias={categorias} />
        </div>
      </section>
      <SiteFooter />
      <WhatsappFloat />
    </main>
  )
}
