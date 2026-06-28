import { marcas } from "@/lib/data"
import { getCatalogo } from "@/lib/catalogo-server"

function normalizar(nombre: string) {
  return nombre
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[-_\s]+/g, "")
    .trim()
}

export function Marcas() {
  const catalogo = getCatalogo()

  // Cantidad real de fotos por marca, tomada del catálogo. Si una marca no tiene
  // fotos cargadas todavía, no se muestra ningún número (no se inventa).
  const cantidadPorMarca = new Map<string, number>()
  for (const m of catalogo.marcas) {
    cantidadPorMarca.set(normalizar(m.label), m.cantidad)
  }

  return (
    <section id="marcas" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Distribución oficial
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
          Marcas con las que trabajamos
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Marcas importadas reconocidas a nivel mundial, sumadas a nuestro catálogo local. Si
          buscás una marca puntual, escribinos.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
        {marcas.map((marca) => {
          const cantidad = cantidadPorMarca.get(normalizar(marca))
          return (
            <div
              key={marca}
              className="flex flex-col items-center justify-center gap-1 bg-card px-4 py-8 text-center transition-colors hover:bg-secondary"
            >
              <span className="font-heading text-base font-semibold uppercase tracking-wide text-muted-foreground sm:text-lg">
                {marca}
              </span>
              {cantidad ? (
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {cantidad} {cantidad === 1 ? "producto" : "productos"}
                </span>
              ) : null}
            </div>
          )
        })}
      </div>
    </section>
  )
}
