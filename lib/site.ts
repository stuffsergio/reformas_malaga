export const site = {
  name: "B-Edificación Arquitectos",
  shortName: "B-Edificación",
  legalName: "B-Edificación Arquitectos",
  tagline: "Arquitectos Málaga",
  phoneDisplay: "952 12 34 56",
  phoneTel: "952123456",
  whatsapp: "34612345678",
  email: "info@reformasejemplo.es",
  addressLine: "Calle Larios 12, 3º",
  postalCode: "29005",
  city: "Málaga",
  region: "Málaga y Costa del Sol",
  hours: "Lunes a viernes, de 08:30 a 19:30",
  response: "Respuesta en 24 h",
  colegiado: "Colegiados COAMA Málaga núm. 2841",
  insurance: "Seguro decenal ASEMAS y certificación BREEAM",
} as const;

export function whatsappHref(text = "Hola, quiero presupuesto para una reforma en Málaga") {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/tipos-reforma", label: "Tipos de reforma" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/precios", label: "Precios" },
  { href: "/opiniones", label: "Opiniones" },
  { href: "/contacto", label: "Contacto" },
] as const;

export const footerNav = {
  servicios: [
    { href: "/tipos-reforma#vivienda", label: "Reformas integrales" },
    { href: "/tipos-reforma#fachadas", label: "Rehabilitación de fachadas" },
    { href: "/tipos-reforma#cubiertas", label: "Rehabilitación de cubiertas" },
    { href: "/tipos-reforma#comunidades", label: "Comunidades de vecinos" },
    { href: "/tipos-reforma#naves", label: "Locales y naves" },
  ],
  estudio: [
    { href: "/por-que-elegirnos", label: "Por qué elegirnos" },
    { href: "/proyectos", label: "Proyectos destacados" },
    { href: "/como-trabajamos", label: "Metodología y plazos" },
    { href: "/precios", label: "Calculadora de presupuesto" },
    { href: "/opiniones", label: "Opiniones" },
    { href: "/faq", label: "Preguntas frecuentes" },
  ],
} as const;

export const stats = [
  { value: "+15", label: "Años de experiencia", detail: "Liderando reformas integrales en Málaga" },
  { value: "+320", label: "Reformas realizadas", detail: "Viviendas, áticos y locales entregados" },
  { value: "4,9/5", label: "Valoración en Google", detail: "Más de 140 reseñas" },
  { value: "98%", label: "Clientes nos recomiendan", detail: "Garantía por escrito y máxima fidelidad" },
] as const;

export const trusts = [
  "COAMA",
  "Cámara de Comercio de Málaga",
  "Promálaga Red",
  "AMUPEMA",
  "BNI Málaga Excelencia",
  "ASEMAS",
] as const;

export const services = [
  {
    step: "01",
    title: "Proyecto y diseño",
    text: "Planimetría técnica completa, redistribución espacial a medida y renders 3D fotorrealistas antes de iniciar la obra.",
    tags: ["Planos", "3D", "Distribución"],
  },
  {
    step: "02",
    title: "Licencias y trámites",
    text: "Gestión total ante la Gerencia Municipal de Urbanismo de Málaga: declaración responsable, licencia de obra mayor y tasas.",
    tags: ["Urbanismo", "Tasas ICIO", "Permisos"],
  },
  {
    step: "03",
    title: "Demolición y albañilería",
    text: "Desescombro selectivo con gestor homologado, apeos estructurales visados y trasdosados con aislamiento termoacústico.",
    tags: ["Seguridad", "Estructura", "Aislamiento"],
  },
  {
    step: "04",
    title: "Instalaciones",
    text: "Nuevas redes de fontanería, cuadro eléctrico certificado con boletín oficial y climatización eficiente por aerotermia.",
    tags: ["Aerotermia", "Boletín", "Saneamiento"],
  },
  {
    step: "05",
    title: "Acabados y carpintería",
    text: "Microcemento continuo, porcelánicos rectificados, carpintería con rotura de puente térmico y mobiliario a medida.",
    tags: ["Porcelánico", "RPT", "Cocinas a medida"],
  },
  {
    step: "06",
    title: "Dirección de obra",
    text: "Inspección técnica continua a pie de obra por tu arquitecto. Informes fotográficos semanales y control riguroso de plazos.",
    tags: ["Reporte semanal", "Un interlocutor", "Plazos"],
  },
] as const;

export const reformTypes = [
  {
    id: "vivienda",
    title: "Reforma integral de vivienda",
    text: "Pisos céntricos, áticos luminosos y villas unifamiliares. Redistribución arquitectónica completa para maximizar espacio, luz natural y eficiencia energética.",
    image: "/images/tipo-vivienda.jpg",
    points: ["Distribución de espacios y luz natural", "Instalaciones nuevas con boletín", "Licencia o declaración responsable en Málaga"],
  },
  {
    id: "fachadas",
    title: "Rehabilitación de fachadas",
    text: "Sistema de aislamiento térmico exterior (SATE), restauración de elementos históricos catalogados e impermeabilización frente a la salinidad costera.",
    image: "/images/tipo-fachada.jpg",
    points: ["SATE y ahorro energético", "Elementos catalogados y PEPRI", "Protección frente a la salinidad"],
  },
  {
    id: "cubiertas",
    title: "Rehabilitación de cubiertas",
    text: "Impermeabilización garantizada con membranas continuas, aislamiento invertido y adecuación de azoteas transitables.",
    image: "/images/tipo-cubierta.jpg",
    points: ["Membranas continuas", "Aislamiento invertido", "Azoteas transitables"],
  },
  {
    id: "comunidades",
    title: "Edificios y comunidades",
    text: "Supresión de barreras arquitectónicas, bajada de ascensor a cota cero, modernización de zaguanes y bajantes.",
    image: "/images/tipo-comunidad.jpg",
    points: ["Ascensor a cota cero", "Zaguanes y bajantes", "ITE e informes de evaluación"],
  },
  {
    id: "naves",
    title: "Naves y locales",
    text: "Adecuación ignífuga según CTE, pavimentos continuos de alta resistencia y licencias de actividad comercial o logística.",
    image: "/images/tipo-nave.jpg",
    points: ["Normativa CTE e incendios", "Pavimentos de alta resistencia", "Licencia de actividad"],
  },
] as const;

export const projects = [
  {
    id: "la-malagueta",
    title: "Reforma integral diáfana con terraza",
    place: "Ático La Malagueta",
    meta: "145 m² · 3 meses",
    summary: "Apertura total hacia la luz, aislamiento acústico y climatización oculta. Eficiencia clase A, llave en mano.",
    quote: "El presupuesto fue exacto al céntimo, sin ningún sobrecoste. Nos mudamos el día exacto estipulado en el contrato.",
    author: "Marta y Carlos R.",
    before: "/images/malagueta-antes.jpg",
    after: "/images/malagueta-despues.jpg",
    beforeAlt: "Ático de La Malagueta antes de la reforma",
    afterAlt: "Ático de La Malagueta después de la reforma integral",
  },
  {
    id: "centro-historico",
    title: "Restauración señorial y diseño moderno",
    place: "Centro Histórico",
    meta: "PEPRI · suelo original",
    summary: "Integración del suelo original con una distribución contemporánea. Trámites del PEPRI resueltos por el estudio.",
    quote: "Los trámites municipales del PEPRI quedaron resueltos sin dolores de cabeza. La integración del suelo original es sublime.",
    author: "Javier G., inversor",
    before: "/images/centro-antes.jpg",
    after: "/images/centro-despues.jpg",
    beforeAlt: "Piso centenario del centro de Málaga antes de la obra",
    afterAlt: "Restauración del piso del centro histórico después de la obra",
  },
  {
    id: "el-limonar",
    title: "Ampliación, eficiencia Passivhaus y piscina",
    place: "El Limonar",
    meta: "230 m² · 4,5 meses",
    summary: "Ampliación de villa, mejora de envolvente y zona de agua. Dirección de arquitecto durante toda la obra.",
    quote: "Tener a un arquitecto dirigiendo la obra da una tranquilidad impagable. Cero disgustos y acabados de revista.",
    author: "Familia Ramos",
    before: "/images/limonar-antes.jpg",
    after: "/images/limonar-despues.jpg",
    beforeAlt: "Chalet de El Limonar antes de la ampliación",
    afterAlt: "Villa de El Limonar después de la reforma y la piscina",
  },
] as const;

export const steps = [
  {
    n: "01",
    time: "24–48 horas",
    title: "Visita y asesoramiento gratuito",
    text: "Nos desplazamos a tu vivienda o local en Málaga para tomar datos, analizar el estado técnico y entender tus prioridades.",
    note: "Plazo: inmediato",
  },
  {
    n: "02",
    time: "5–7 días",
    title: "Proyecto y presupuesto cerrado",
    text: "Propuesta con planos, infografías y presupuesto desglosado partida a partida, vinculante por contrato.",
    note: "Plazo: 1 semana",
  },
  {
    n: "03",
    time: "Gestión total",
    title: "Licencias y permisos",
    text: "Redactamos el proyecto de ejecución y tramitamos la licencia ante Urbanismo de Málaga para empezar con la obra en regla.",
    note: "Plazo: 2 a 4 semanas",
  },
  {
    n: "04",
    time: "8–12 semanas",
    title: "Obra con seguimiento semanal",
    text: "Cuadrillas bajo la dirección del arquitecto. Cada viernes recibes un informe fotográfico y de avance.",
    note: "Plazo de obra: 8 a 12 semanas",
  },
  {
    n: "05",
    time: "Garantía total",
    title: "Entrega y garantía",
    text: "Limpieza de fin de obra, revisión de remates contigo y entrega de llaves con certificados y póliza decenal.",
    note: "Garantía legal hasta 10 años",
  },
] as const;

export const tiers = [
  {
    id: "basica" as const,
    name: "Básica / Esencial",
    range: "450–600 €/m²",
    point: 500,
    low: 450,
    high: 600,
    text: "Adecuación para alquiler o actualización cosmética, sin redistribución estructural mayor.",
    points: [
      "Reforma de cocina y baños funcionales",
      "Suelo laminado AC5 y rodapié blanco",
      "Actualización básica de mecanismos eléctricos",
      "Pintura plástica lisa en paredes y techos",
    ],
  },
  {
    id: "media" as const,
    name: "Media / Integral confort",
    range: "650–850 €/m²",
    point: 750,
    low: 650,
    high: 850,
    text: "Reforma integral de vivienda habitual, con instalaciones nuevas y nueva distribución.",
    featured: true,
    points: [
      "Redistribución completa con tabiques nuevos",
      "Fontanería y electricidad nuevas, con boletín",
      "Climatización por conductos o split inverter",
      "Ventanas de PVC o aluminio con rotura de puente térmico",
      "Dirección técnica semanal de arquitecto",
    ],
  },
  {
    id: "completa" as const,
    name: "Completa / Premium",
    range: "900–1.300 €/m²",
    point: 1100,
    low: 900,
    high: 1300,
    text: "Vivienda de autor, materiales nobles, carpintería a medida, domótica y máxima eficiencia.",
    points: [
      "Aerotermia con suelo radiante y refrescante",
      "Microcemento continuo, tarima maciza o mármol",
      "Cocina de diseño exclusivo integrada",
      "Domótica para luces, clima y persianas",
    ],
  },
];

export type TierId = (typeof tiers)[number]["id"];

export const reviews = [
  {
    quote:
      "Buscábamos un estudio en Málaga que se encargara de todo porque vivimos fuera la mayor parte del año. Coordinaron los permisos de Urbanismo, nos enviaron reportes fotográficos cada viernes y no hubo ni un solo sobrecoste. La vivienda en Teatinos quedó impecable.",
    name: "Alejandro Lorca",
    initials: "AL",
    place: "Reforma de piso en Teatinos · Málaga",
  },
  {
    quote:
      "Tuvimos muy malas experiencias con cuadrillas sueltas. En B-Edificación la diferencia es total: un arquitecto que conoce la normativa y los materiales supervisa la obra. Cumplieron las 10 semanas pactadas.",
    name: "Carmen Rodríguez",
    initials: "CR",
    place: "Ático en el Paseo Marítimo Antonio Banderas",
  },
  {
    quote:
      "La propuesta de distribución recuperó metros que dábamos por perdidos. La aerotermia y el aislamiento redujeron la factura eléctrica a la mitad. Profesionalismo, estética y tranquilidad.",
    name: "Fernando Escudero",
    initials: "FE",
    place: "Chalet en Pedregalejo · Málaga",
  },
] as const;

export const reasons = [
  {
    title: "Arquitectos colegiados",
    text: "Profesionales colegiados en el COAMA supervisan cada fase, con seguro de responsabilidad civil y decenal.",
  },
  {
    title: "Presupuesto cerrado",
    text: "El precio firmado en contrato es el precio final. Sin partidas ocultas ni sorpresas al terminar.",
  },
  {
    title: "Plazos por escrito",
    text: "Fecha de entrega con cronograma y penalización contractual si el retraso es atribuible al estudio.",
  },
  {
    title: "Garantía y postventa",
    text: "Respaldo técnico después de la entrega. Respuesta directa para ajustes, garantía o mantenimiento.",
  },
] as const;

export const comparison = [
  ["Responsable de la obra", "Un arquitecto colegiado", "Responsabilidades repartidas entre autónomos"],
  ["Precio final", "Cerrado por contrato, sin extras", "Desvíos habituales del 20 % al 45 %"],
  ["Licencias en Málaga", "Las tramita el estudio", "Las gestiona el cliente, o asume el riesgo"],
  ["Plazos", "Plan de obra con fecha garantizada", "Parones por el solape de gremios"],
  ["Garantía", "Seguro decenal colegial ASEMAS", "Sin cobertura técnica global"],
] as const;

export const faqs = [
  {
    q: "¿Cuánto tarda una reforma integral?",
    a: "Para una vivienda media de 80 a 110 m², la obra física dura entre 8 y 12 semanas. Antes de demoler, el proyecto técnico, la selección de materiales y la licencia suelen ocupar de 3 a 4 semanas. La fecha de entrega queda escrita en el contrato.",
  },
  {
    q: "¿Necesito licencia de obra en Málaga?",
    a: "Sí. La mayoría de reformas interiores sin afección estructural se tramitan con declaración responsable ante la Gerencia Municipal de Urbanismo, y la obra puede empezar con agilidad. Si se toca una fachada protegida del PEPRI del Centro Histórico o elementos estructurales, hace falta licencia urbanística con proyecto visado.",
  },
  {
    q: "¿Podéis gestionar todo el proceso?",
    a: "Sí. El servicio es llave en mano: planos, diseño interior, solicitud de permisos, tasas, albañilería, fontanería, carpintería, climatización, limpieza final y entrega con garantías.",
  },
  {
    q: "¿Qué diferencia hay entre reforma y rehabilitación?",
    a: "La reforma acondiciona el interior privativo: tabiquería, instalaciones y acabados de una vivienda o local. La rehabilitación actúa sobre elementos comunes o estructurales del edificio: envolvente SATE, fachadas, cubiertas o accesibilidad del portal. El estudio hace las dos.",
  },
  {
    q: "¿Cómo se paga la obra?",
    a: "Por certificaciones. Un anticipo para acopio de materiales y licencias, y el resto ligado a hitos que puedes comprobar: demolición terminada, instalaciones pasadas, alicatados completados. La última parte se liquida cuando das la conformidad en la entrega.",
  },
  {
    q: "¿Qué garantía ofrecéis?",
    a: "La de la Ley de Ordenación de la Edificación: 1 año en acabados, 3 años en instalaciones y habitabilidad, y hasta 10 años en elementos estructurales, con seguro de responsabilidad civil colegial ASEMAS.",
  },
  {
    q: "¿Puedo vivir en casa durante la obra?",
    a: "En una reforma integral, con fontanería, saneamiento y electricidad nuevos, no es recomendable: hay cortes de suministro, ruido y polvo. Si la obra es parcial, planificamos las zonas para que la casa siga siendo habitable.",
  },
  {
    q: "¿Trabajáis fuera de Málaga capital?",
    a: "Sí. Hacemos obra en la Costa del Sol —Torremolinos, Benalmádena, Fuengirola, Mijas, Marbella y Estepona— y en la Axarquía: Rincón de la Victoria, Vélez-Málaga y Torre del Mar.",
  },
] as const;

export const related = [
  {
    title: "Cambio de uso de local a vivienda",
    text: "Viabilidad según el PGOU de Málaga, proyecto visado, cédula de habitabilidad y adecuación de los espacios.",
    href: "/contacto?tema=cambio-de-uso",
  },
  {
    title: "Proyectos de demolición",
    text: "Proyecto visado de derribo parcial o total, plan de residuos de construcción y dirección facultativa.",
    href: "/contacto?tema=demolicion",
  },
  {
    title: "Cédula y certificado energético",
    text: "Certificado de eficiencia registrado en la Junta de Andalucía, ITE e informe de evaluación del edificio.",
    href: "/contacto?tema=certificado-energetico",
  },
] as const;

export const videoStory = {
  title: "No tuvimos que preocuparnos de ningún papeleo durante los 4 meses de obra",
  people: "Elena y Gonzalo",
  place: "Calle Molina Lario · 120 m² · eficiencia clase A",
  image: "/images/testimonio.jpg",
  body: "Elena y Gonzalo vivían fuera de Málaga y necesitaban un único responsable. El estudio redactó el proyecto, tramitó la licencia, dirigió la obra y envió un reporte fotográfico cada viernes. La vivienda se entregó en el plazo firmado, sin desviación de presupuesto, lista para entrar a vivir.",
};
