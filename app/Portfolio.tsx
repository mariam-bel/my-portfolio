import { Suspense } from "react";
import { connection } from "next/server";
import RouteMap from "./RouteMap";
import ProjectCards from "./ProjectCards";
import { projects } from "../data/projects";

async function Year() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Portfolio() {
  return (
    <div className="wrap">
      <header className="top">
        <a className="brand" href="#inicio">Meriem El Boutrouki</a>
        <nav aria-label="Principal">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <main id="main">
        <div className="hero" id="inicio">
          <div>
            <h1>Aplicaciones que conectan datos con personas.</h1>
            <p className="lead">
              Soy desarrolladora de aplicaciones multiplataforma en Madrid. Trabajo con Angular,
              Django y Python, y construyo en mi tiempo libre un seguimiento de vuelos con datos abiertos.
            </p>
            <div className="btns">
              <a className="btn primary" href="#proyectos">Ver proyectos</a>
              <a className="btn" href="/cv/Meriem-El-Boutrouki-CV.pdf">Descargar CV</a>
            </div>
          </div>
          <RouteMap />
        </div>

        <section id="sobre-mi">
          <h2>Sobre mí</h2>
          <div className="about">
            <div>
              <p>
                Estudio el ciclo superior de Desarrollo de Aplicaciones Multiplataforma en EPSUM y
                trabajo en Herascientific, donde empecé con las prácticas y me quedé: rediseñé la web
                corporativa, automaticé tareas y desarrollé módulos del CRM interno.
              </p>
              <p>Me interesa el sector aeronáutico, así que mi proyecto personal usa datos abiertos de vuelos.</p>
            </div>
            <dl>
              <dt>Ubicación</dt><dd>Madrid, España</dd>
              <dt>Formación</dt><dd>DAM, EPSUM (2024–2026)</dd>
              <dt>Idiomas</dt><dd>Español y árabe nativos, inglés avanzado, francés básico</dd>
              <dt>Stack</dt><dd>Angular, Django, Python, Flask, WooCommerce</dd>
            </dl>
          </div>
        </section>

        <section id="proyectos">
          <h2>Proyectos</h2>
          <ProjectCards projects={projects} />
        </section>

        <section id="experiencia">
          <h2>Experiencia</h2>
          <div className="job">
            <h3>Herascientific</h3>
            <p className="when">Desarrolladora, prácticas y después en plantilla</p>
            <ul>
              <li>Rediseño de la web corporativa</li>
              <li>Desarrollo del CRM interno (Angular y Django)</li>
              <li>Aplicación de servicio técnico para mantenimientos e incidencias</li>
              <li>Automatización de tareas internas</li>
            </ul>
          </div>
        </section>

        <section id="contacto" className="contact">
          <h2>Contacto</h2>
          <p>Estoy abierta a prácticas y ofertas como desarrolladora. Escríbeme o conecta conmigo en LinkedIn.</p>
          <div className="btns">
            <a className="btn primary" href="mailto:merimarabel@gmail.com">Escribirme</a>
            <a className="btn" href="https://www.linkedin.com/in/meriem-belhadj-">LinkedIn</a>
            <a className="btn" href="https://github.com/mariam-bel">GitHub</a>
          </div>
        </section>
      </main>

      <footer>
        © <Suspense fallback={null}><Year /></Suspense> Meriem B. El Boutrouki
      </footer>
    </div>
  );
}
