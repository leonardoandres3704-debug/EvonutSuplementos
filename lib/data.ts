export const WHATSAPP_NUMBER = "5493415312051"

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const CONTACTO = {
  telefono1: { display: "341 531-2051", tel: "+5493415312051" },
  telefono2: { display: "341 363-7006", tel: "+5493413637006" },
  email: "Evonut2026@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=61573634896476",
  instagram: "https://www.instagram.com/evonut_?igsh=MWdoaWY2aGRrbGpncA==",
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
    id: "gym",
    titulo: "Combo Fuerza",
    deporte: "Fuerza / Hipertrofia",
    imagen: "/combo-gym.jpg",
    descripcion:
      "Para quienes buscan ganar fuerza y masa muscular. Una combinación clásica y efectiva para potenciar cada sesión y maximizar la recuperación.",
    objetivo: "Recuperación y masa muscular",
    productos: [
      "Proteína post-entrenamiento",
      "Creatina en cualquier momento",
      "Glutamina post-entrenamiento o 1 hs antes de dormir",
    ],
  },
  {
    id: "ciclismo",
    titulo: "Combo Ciclismo",
    deporte: "Ruta / MTB",
    imagen: "/combo-ciclismo.jpg",
    descripcion:
      "La mejor vista viene después de la subida. No dejes que la fatiga te detenga antes de llegar. Geles y barras pensados para el ciclista.",
    objetivo: "Energía y resistencia en salidas largas",
    productos: [
      "Geles y barras proteicas para el camino",
      "Repositor energético con carbohidratos",
      "Electrolitos para evitar calambres",
      "Proteína para recuperar después de cada salida",
    ],
  },
  {
    id: "maraton",
    titulo: "Combo Maratón",
    deporte: "Running / Resistencia",
    imagen: "/combo-maraton.jpg",
    descripcion:
      "Que el cansancio no te detenga. Geles energizantes formulados para corredores de fondo que necesitan energía rápida y sostenida en ruta.",
    objetivo: "Energía sostenida durante la competencia",
    productos: [
      "Geles energéticos GU, ENA y Nutremax",
      "Repositor energético Race con electrolitos",
      "Proteína para la recuperación post-carrera",
    ],
  },
]

export const combosPeso: Combo[] = [
  {
    id: "perdida-peso-pro",
    titulo: "Combo Pérdida de Peso PRO",
    deporte: "Con cafeína",
    imagen: "/combo-peso-pro.jpg",
    descripcion:
      "¡Llevá tu definición al siguiente nivel! La combinación definitiva para quemar grasa y mantener músculo magro. Ideal para potenciar tus entrenamientos.",
    objetivo: "Quemar grasa y mantener músculo magro",
    productos: [
      "BSN Syntha 6 Isolate — proteína de definición",
      "Carnitina — metabolizador de grasa",
      "Nutrex Lipo 6 Black Ultra — termogénico concentrado",
    ],
  },
  {
    id: "perdida-peso-sin-cafeina",
    titulo: "Combo Pérdida de Peso Sin Cafeína",
    deporte: "Sin cafeína",
    imagen: "/combo-peso-sin-cafeina.jpg",
    descripcion:
      "¿Entrenas de noche o sos sensible a la cafeína? Lograí tu mejor versión sin alterar tu descanso. Para personas que entrenan tarde, hipertensos o quienes buscan un proceso de pérdida de peso más natural.",
    objetivo: "Pérdida de peso sin afectar el descanso",
    productos: [
      "ENA Whey Protein — proteína sin estimulantes",
      "Hoch Loss Weight Thermo Genix — termogénico sin cafeína",
      "Star Nutrition L-Carnitina 1000 — quemador natural",
    ],
  },
]
