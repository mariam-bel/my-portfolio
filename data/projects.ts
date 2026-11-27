export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  company?: string;
  demoUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: "open-flight-tracker",
    title: "Seguimiento de vuelos con datos abiertos",
    description:
        "Aplicación para consultar y visualizar rutas, estados y trayectorias aéreas a partir de fuentes de datos abiertos.",
    image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    tags: ["Python", "Datos abiertos", "Aviación"],
    repoUrl: "https://github.com/mariam-bel",
  },
  {
    id: "herascientific-crm",
    title: "CRM interno y automatización",
    description:
        "Módulos del CRM interno y automatización de tareas operativas desarrollados con Angular, Django y Python.",
    image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    tags: ["Angular", "Django", "Python"],
    company: "Herascientific",
  },
  {
    id: "technical-service-app",
    title: "Aplicación de servicio técnico",
    description:
        "Gestión de mantenimientos preventivos, incidencias y partes de asistencia técnica en planta y laboratorio.",
    image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    tags: ["Angular", "Django", "Incidencias"],
    company: "Herascientific",
  },
];