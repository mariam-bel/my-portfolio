export type Project = {
  titulo: string;
  tipo: string;
  estado?: string;
  texto: string;
  tecnologias: string[];
  enlace?: string;
  enlaceTexto?: string;
};

// Añade o edita proyectos aquí: se pintan solos en la página.
export const projects: Project[] = [
  {
    titulo: "Flight Tracker",
    tipo: "Proyecto personal",
    estado: "En desarrollo",
    texto: "Seguimiento de vuelos en tiempo real con datos abiertos de OpenSky.",
    tecnologias: ["OpenSky", "API REST"],
    enlace: "https://github.com/TU_USUARIO/flight-tracker",
    enlaceTexto: "Ver en GitHub",
  },
  {
    titulo: "CRM GOMentis",
    tipo: "Aplicación interna",
    estado: "En producción",
    texto: "CRM para el equipo comercial: ofertas, pedidos, visitas a clientes, informes y soporte.",
    tecnologias: ["Angular", "Django", "Python"],
  },
  {
    titulo: "Web corporativa de Herascientific",
    tipo: "Web corporativa",
    estado: "Publicado",
    texto: "Rediseño de la web de la empresa con una estructura más clara y mejor experiencia de usuario.",
    tecnologias: ["WordPress", "WooCommerce"],
  },
  {
    titulo: "Sincronizador Excel y WooCommerce",
    tipo: "Automatización",
    estado: "En desarrollo",
    texto: "Herramienta que mantiene el catálogo de la tienda online sincronizado desde un Excel maestro.",
    tecnologias: ["Python", "Flask", "WooCommerce"],
  },
];
