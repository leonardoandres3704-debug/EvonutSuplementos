export const WHATSAPP_NUMBER = "5491100000000" // Reemplazar por el número real de Evonut

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export type Producto = {
  id: string
  nombre: string
  marca: string
  categoria: string
  descripcion: string
  imagen: string
}

export const productos: Producto[] = [
  {
    id: "proteina-whey",
    nombre: "Whey Protein Isolate",
    marca: "ProLine",
    categoria: "Proteínas",
    descripcion: "25 g de proteína por porción, ideal para recuperación muscular.",
    imagen: "/producto-proteina.png",
  },
  {
    id: "creatina",
    nombre: "Creatina Monohidrato",
    marca: "PureFuel",
    categoria: "Creatinas",
    descripcion: "Creatina micronizada para fuerza y potencia explosiva.",
    imagen: "/producto-creatina.png",
  },
  {
    id: "pre-entreno",
    nombre: "Pre-Workout Explosive",
    marca: "IgniteLab",
    categoria: "Pre-entrenos",
    descripcion: "Energía y foco intenso con cafeína y beta-alanina.",
    imagen: "/producto-pre.png",
  },
  {
    id: "bcaa",
    nombre: "BCAA 2:1:1",
    marca: "AminoCore",
    categoria: "Aminoácidos",
    descripcion: "Aminoácidos ramificados para evitar el catabolismo.",
    imagen: "/producto-bcaa.png",
  },
  {
    id: "gel-energetico",
    nombre: "Energy Gel Endurance",
    marca: "RunFast",
    categoria: "Energéticos",
    descripcion: "Carbohidratos de rápida absorción para carrera y ruta.",
    imagen: "/producto-gel.png",
  },
  {
    id: "electrolitos",
    nombre: "Electrolitos Hidratación",
    marca: "HydroPlus",
    categoria: "Hidratación",
    descripcion: "Reposición de sodio, potasio y magnesio en esfuerzos largos.",
    imagen: "/producto-electrolitos.png",
  },
]

export const categorias = [
  "Todos",
  "Proteínas",
  "Creatinas",
  "Pre-entrenos",
  "Aminoácidos",
  "Energéticos",
  "Hidratación",
]

export const marcas = [
  "Muscletech",
  "Universal",
  "Optimum Nutrition",
  "Nutrex",
  "Cellucor",
  "Myprotein",
  "BSN",
]

export type Combo = {
  id: string
  titulo: string
  deporte: string
  imagen: string
  descripcion: string
  objetivo: string
  productos: string[]
}

export const combos: Combo[] = [
  {
    id: "maraton",
    titulo: "Combo Maratón",
    deporte: "Running / Resistencia",
    imagen: "/combo-maraton.png",
    descripcion:
      "Pensado para corredores de fondo que necesitan energía sostenida, buena hidratación y una recuperación efectiva entre entrenamientos.",
    objetivo: "Energía sostenida e hidratación en distancias largas",
    productos: [
      "Geles energéticos para tomar en ruta",
      "Electrolitos para reponer sales en esfuerzos prolongados",
      "Proteína para la recuperación post-carrera",
      "Aminoácidos para reducir el desgaste muscular",
    ],
  },
  {
    id: "ciclismo",
    titulo: "Combo Ciclismo",
    deporte: "Ruta / MTB",
    imagen: "/combo-ciclismo.png",
    descripcion:
      "Ideal para ciclistas que pasan horas sobre la bici. Combina carbohidratos de rápida asimilación con hidratación y soporte articular.",
    objetivo: "Potencia y resistencia en salidas largas",
    productos: [
      "Geles y carbohidratos para mantener el ritmo",
      "Electrolitos para evitar calambres",
      "BCAA para preservar la masa muscular",
      "Proteína para recuperar después de cada salida",
    ],
  },
  {
    id: "gym",
    titulo: "Combo Gym",
    deporte: "Fuerza / Hipertrofia",
    imagen: "/combo-gym.png",
    descripcion:
      "Para quienes buscan ganar fuerza y masa muscular. Una combinación clásica y efectiva para potenciar cada sesión y maximizar la recuperación.",
    objetivo: "Fuerza, volumen y recuperación muscular",
    productos: [
      "Proteína whey para construir músculo",
      "Creatina para fuerza y potencia",
      "Pre-entreno para sesiones intensas",
      "BCAA para acelerar la recuperación",
    ],
  },
]
