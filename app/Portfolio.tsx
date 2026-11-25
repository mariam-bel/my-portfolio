import { Suspense } from "react";
import { connection } from "next/server";
import { Plane, Mail, FileDown } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/SocialIcons";
import RouteMap from "./RouteMap";
import ProjectCards from "./ProjectCards";
import { projects } from "../data/projects";

async function Year() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

export default function Portfolio() {
  return (
      <div className="min-h-screen bg-[#eef2f4] text-[#10202e] selection:bg-blue-600 selection:text-white dark:bg-[#0b151e] dark:text-[#e8eef2]">
        {/* Fondo sutil decorativo */}
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(26,79,214,0.14),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(14,165,233,0.10),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(126,163,255,0.16),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_40%)]"
        />

        <div className="mx-auto max-w-6xl px-6">
          <header className="sticky top-0 z-30 flex items-center justify-between border-b border-slate-900/10 bg-[#eef2f4]/80 py-4 backdrop-blur-md dark:border-white/10 dark:bg-[#0b151e]/80">
            <a
                className="font-bold tracking-tight text-slate-900 dark:text-white"
                href="#inicio"
            >
              Meriem El Boutrouki
            </a>
            <nav aria-label="Principal" className="flex items-center gap-5 text-sm text-slate-600 dark:text-slate-300">
              <a className="transition hover:text-blue-600 dark:hover:text-blue-400" href="#proyectos">
                Proyectos
              </a>
              <a className="transition hover:text-blue-600 dark:hover:text-blue-400" href="#sobre-mi">
                Sobre mí
              </a>
              <a className="transition hover:text-blue-600 dark:hover:text-blue-400" href="#experiencia">
                Experiencia
              </a>
              <a className="transition hover:text-blue-600 dark:hover:text-blue-400" href="#contacto">
                Contacto
              </a>
            </nav>
          </header>

          <main id="main">
            {/* Hero */}
            <section
                id="inicio"
                className="grid grid-cols-1 items-center gap-10 py-14 lg:grid-cols-12 lg:py-20"
            >
              <div className="lg:col-span-7">
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-600/20 bg-blue-600/10 px-3.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-400/25 dark:bg-blue-400/10 dark:text-blue-300">
                <Plane className="h-3.5 w-3.5" />
                DAM · Angular · Django · Python · Datos abiertos de vuelos
              </span>

                <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl dark:text-white">
                  Aplicaciones que{" "}
                  <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-500 bg-clip-text text-transparent dark:from-blue-400 dark:via-indigo-300 dark:to-sky-300">
                  conectan datos
                </span>{" "}
                  con personas.
                </h1>

                <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                  Soy desarrolladora de aplicaciones multiplataforma en Madrid. Trabajo con Angular,
                  Django y Python, y construyo en mi tiempo libre un seguimiento de vuelos con datos abiertos.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
                      href="#proyectos"
                  >
                    Ver proyectos
                  </a>
                  <a
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900/80 dark:text-white"
                      href="/cv/Meriem-El-Boutrouki-CV.pdf"
                  >
                    <FileDown className="h-4 w-4" />
                    Descargar CV
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-300/80 bg-white/75 p-4 shadow-sm backdrop-blur lg:col-span-5 dark:border-slate-800 dark:bg-slate-900/75">
                <RouteMap />
              </div>
            </section>

            {/* Proyectos (foco principal con tarjetas 3D) */}
            <section id="proyectos" className="border-t border-slate-900/10 py-16 dark:border-white/10">
              <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
                    Selección destacada
                  </p>
                  <h2 className="mt-1 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Proyectos
                  </h2>
                </div>
                <p className="max-w-md text-sm text-slate-600 dark:text-slate-400">
                  Pasa el cursor sobre cada tarjeta para explorar la profundidad y los detalles técnicos.
                </p>
              </div>

              <ProjectCards projects={projects} />
            </section>

            {/* Sobre mí */}
            <section id="sobre-mi" className="border-t border-slate-900/10 py-16 dark:border-white/10">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Sobre mí
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="space-y-4 text-slate-700 dark:text-slate-300">
                  <p className="leading-relaxed">
                    Estudio el ciclo superior de Desarrollo de Aplicaciones Multiplataforma en EPSUM y
                    trabajo en Herascientific, donde empecé con las prácticas y me quedé: rediseñé la web
                    corporativa, automaticé tareas y desarrollé módulos del CRM interno.
                  </p>
                  <p className="leading-relaxed">
                    Me interesa el sector aeronáutico, así que mi proyecto personal usa datos abiertos de vuelos.
                  </p>
                </div>

                <dl className="grid grid-cols-1 gap-4 rounded-2xl border border-slate-300/80 bg-white/75 p-6 sm:grid-cols-2 dark:border-slate-800 dark:bg-slate-900/75">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Ubicación
                    </dt>
                    <dd className="mt-1 text-sm font-medium">Madrid, España</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Formación
                    </dt>
                    <dd className="mt-1 text-sm font-medium">DAM, EPSUM (2024–2026)</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Idiomas
                    </dt>
                    <dd className="mt-1 text-sm font-medium">
                      Español y árabe nativos, inglés avanzado, francés básico
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Stack
                    </dt>
                    <dd className="mt-1 text-sm font-medium">
                      Angular, Django, Python, Flask, WooCommerce
                    </dd>
                  </div>
                </dl>
              </div>
            </section>

            {/* Experiencia */}
            <section id="experiencia" className="border-t border-slate-900/10 py-16 dark:border-white/10">
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                Experiencia
              </h2>
              <div className="rounded-2xl border border-slate-300/80 bg-white/75 p-6 dark:border-slate-800 dark:bg-slate-900/75">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-bold text-slate-950 dark:text-white">Herascientific</h3>
                  <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    Desarrolladora · prácticas y después en plantilla
                  </p>
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-300">
                  <li>Rediseño de la web corporativa</li>
                  <li>Desarrollo del CRM interno (Angular y Django)</li>
                  <li>Aplicación de servicio técnico para mantenimientos e incidencias</li>
                  <li>Automatización de tareas internas</li>
                </ul>
              </div>
            </section>

            {/* Contacto */}
            <section id="contacto" className="border-t border-slate-900/10 py-16 dark:border-white/10">
              <div className="rounded-2xl border border-blue-600/20 bg-gradient-to-br from-blue-600/10 via-white/80 to-sky-500/10 p-8 dark:border-blue-400/20 dark:from-blue-500/10 dark:via-slate-900/85 dark:to-sky-400/10">
                <h2 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white">
                  Contacto
                </h2>
                <p className="mt-2 max-w-xl text-slate-600 dark:text-slate-300">
                  Estoy abierta a prácticas y ofertas como desarrolladora. Escríbeme o conecta conmigo en LinkedIn.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                      className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                      href="mailto:merimarabel@gmail.com"
                  >
                    <Mail className="h-4 w-4" />
                    Escribirme
                  </a>
                  <a
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                      href="https://www.linkedin.com/in/meriem-belhadj-"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <LinkedInIcon className="h-4 w-4"/>
                    LinkedIn
                  </a>
                  <a
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
                      href="https://github.com/mariam-bel"
                      target="_blank"
                      rel="noreferrer"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </section>
          </main>

          <footer className="border-t border-slate-900/10 py-8 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
            © <Suspense fallback={null}><Year /></Suspense> Meriem B. El Boutrouki
          </footer>
        </div>
      </div>
  );
}