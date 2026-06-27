import { marcas } from "@/lib/data"

export function Marcas() {
  return (
    <section id="marcas" className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-widest text-primary">
          Distribución oficial
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight text-balance text-foreground sm:text-4xl md:text-5xl">
          Nuestras marcas importadas
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
          Además de nuestro catálogo local, trabajamos con marcas importadas reconocidas a nivel
          mundial. Si buscás una marca puntual, escribinos.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4">
        {marcas.map((marca) => (
          <div
            key={marca}
            className="flex items-center justify-center bg-card px-4 py-8 text-center transition-colors hover:bg-secondary"
          >
            <span className="font-heading text-base font-semibold uppercase tracking-wide text-muted-foreground sm:text-lg">
              {marca}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
