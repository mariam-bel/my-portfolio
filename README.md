# Portfolio de Meriem El Boutrouki

Web personal de una sola página donde reúno mi experiencia y mis proyectos como desarrolladora de aplicaciones multiplataforma. Está hecha con Next.js, TypeScript y CSS, sin librerías de interfaz.

**Demo:** https://TU_URL.vercel.app

<!-- Añade aquí una captura: ![Captura del portfolio](public/captura.png) -->

## Qué incluye

- Presentación con una ruta de vuelo animada desde Madrid, que respeta la preferencia de reducir movimiento del sistema.
- Proyectos en tarjetas interactivas: se despliegan al hacer clic y se pueden filtrar por tecnología.
- Secciones de sobre mí, experiencia y contacto.
- Tema claro y oscuro automático según el sistema.
- Navegación por teclado, foco visible y diseño adaptado a móvil.

## Tecnologías

- Next.js 15 (App Router) y React 19
- TypeScript
- CSS plano
- Desplegado en Vercel

## Estructura

```
app/
  layout.tsx          Layout raíz, metadatos y fuentes
  page.tsx            Renderiza <Portfolio />
  Portfolio.tsx       Contenido de la página
  RouteMap.tsx        Ruta de vuelo animada (componente de cliente)
  ProjectCards.tsx    Tarjetas con filtros (componente de cliente)
  portfolio.css       Estilos generales
  ProjectCards.css    Estilos de las tarjetas
data/
  projects.ts         Lista de proyectos
public/
  cv/                 CV en PDF
```

## Empezar en local

Requiere Node.js 18.18 o superior.

```bash
git clone https://github.com/TU_USUARIO/TU_REPO.git
cd TU_REPO
npm install
npm run dev
```

La web queda disponible en http://localhost:3000.

## Añadir o editar un proyecto

Los proyectos viven en `data/projects.ts`. Cada objeto nuevo se pinta solo como una tarjeta, y los filtros se generan a partir de sus tecnologías.

```ts
{
  titulo: "Nombre del proyecto",
  tipo: "Proyecto personal",
  estado: "En desarrollo",
  texto: "Qué hace y qué problema resuelve.",
  tecnologias: ["Next.js", "TypeScript"],
  enlace: "https://github.com/TU_USUARIO/TU_REPO",
  enlaceTexto: "Ver en GitHub",
}
```

`estado`, `enlace` y `enlaceTexto` son opcionales.

## Personalizar

- **Textos de presentación, experiencia y contacto:** `app/Portfolio.tsx`.
- **Colores y tipografías:** variables al inicio de `app/portfolio.css`.
- **CV:** guarda el PDF en `public/cv/Meriem-El-Boutrouki-CV.pdf`.

## Despliegue

El repositorio está conectado a Vercel: cada `git push` a la rama principal despliega una nueva versión.

Para un despliegue manual:

```bash
npm run build
npm run start
```

## Contacto

- LinkedIn: https://www.linkedin.com/in/meriem-belhadj-
- GitHub: https://github.com/mariam-bel
