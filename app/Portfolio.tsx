import { Suspense } from "react";
import { connection } from "next/server";
import { Mail, FileDown } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/ui/SocialIcons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card-effect";
import DeparturesBoard from "./DeparturesBoard";
import ProjectCards from "./ProjectCards";
import { projects } from "../data/projects";
import { CompanyLogo } from "@/components/CompanyLogo";

async function Year() {
  await connection();
  return <>{new Date().getFullYear()}</>;
}

const glass = "rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] backdrop-blur-xl";
const h2 = "font-display text-4xl font-bold tracking-tight text-white sm:text-5xl";
const section = "scroll-mt-24 py-20";

export default function Portfolio() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#050a12] text-slate-200">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
        <div className="bg-grid absolute inset-0" />
        <div className="absolute -right-40 -top-40 h-[40rem] w-[40rem] rounded-full bg-sky-500/20 blur-[120px]" />
        <div className="absolute -left-40 top-1/2 h-[34rem] w-[34rem] rounded-full bg-indigo-600/20 blur-[120px]" />
      </div>

      <header className="fixed left-1/2 top-4 z-30 w-[calc(100%-2rem)] max-w-3xl -translate-x-1/2">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-slate-950/60 px-5 py-2.5 backdrop-blur-xl">
          <a href="#inicio" className="font-display font-bold text-white">Meriem</a>
          <nav aria-label="Principal" className="flex items-center gap-5 text-sm text-slate-300">
            {[["Proyectos", "#proyectos"], ["Sobre mí", "#sobre-mi"], ["Experiencia", "#experiencia"], ["Contacto", "#contacto"]].map(([t, h]) => (
              <a key={h} href={h} className="transition hover:text-sky-300">{t}</a>
            ))}
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6">
        <main id="main">
          <section id="inicio" className="relative pb-20 pt-36 lg:pt-44">
            <div className="relative">
              <h1 className="font-display text-6xl font-bold leading-[0.95] tracking-tight text-white sm:text-8xl lg:text-9xl">
                Meriem B.<br /> El Boutrouki
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                Desarrolladora multiplataforma. Hago aplicaciones que conectan datos con personas, con Angular, Django y Python.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#proyectos" className="rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/20 transition hover:-translate-y-0.5 hover:bg-sky-300">
                  Ver proyectos
                </a>
                <a href="/cv/CV_Meriem_El_Boutrouki.pdf" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10">
                  <FileDown className="h-4 w-4" /> Descargar CV
                </a>
              </div>
            </div>
            <div className="relative mt-14">
              <DeparturesBoard />
            </div>
          </section>

          <section id="proyectos" className={section}>
            <div className="mb-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
              <h2 className={h2}>Proyectos</h2>
              <p className="max-w-sm text-sm text-slate-400">Mueve el cursor sobre cada tarjeta para explorar los detalles.</p>
            </div>
            <ProjectCards projects={projects} />
          </section>

          <section id="sobre-mi" className={section}>
            <h2 className={`${h2} mb-10`}>Sobre mí</h2>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
              <div className="space-y-5 text-lg leading-relaxed text-slate-300">
                <p>
                  Estudio el ciclo superior de Desarrollo de Aplicaciones Multiplataforma en EPSUM y trabajo en Herascientific, donde empecé con las prácticas y me quedé: rediseñé la web corporativa, automaticé tareas y desarrollé módulos del CRM interno.
                </p>
                <p>Me interesa el sector aeronáutico, así que mi proyecto personal usa datos abiertos de vuelos.</p>
              </div>
              <CardContainer containerClassName="w-full py-0" className="w-full">
                <CardBody className={`w-full p-8 ${glass}`}>
                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    {[
                      ["Ubicación", "Madrid, España"],
                      ["Formación", "DAM, EPSUM (2024–2026)"],
                      ["Idiomas", "Español y árabe nativos, inglés avanzado, francés básico"],
                      ["Stack", "Angular, Django, Python, Flask, WooCommerce"],
                    ].map(([k, v]) => (
                      <CardItem key={k} translateZ={40} className="w-full">
                        <dt className="text-sm text-slate-400">{k}</dt>
                        <dd className="mt-1 font-medium text-white">{v}</dd>
                      </CardItem>
                    ))}
                  </dl>
                </CardBody>
              </CardContainer>
            </div>
          </section>

          <section id="experiencia" className={section}>
            <h2 className={`${h2} mb-10`}>Experiencia</h2>
            <CardContainer containerClassName="w-full py-0" className="w-full">
              <CardBody className={`w-full p-8 sm:p-10 ${glass}`}>
                <CardItem translateZ={50} className="flex w-full flex-wrap items-center justify-between gap-3">
                  <CompanyLogo name="Herascientific" className="h-9 w-9" />
                  <p className="text-sm text-sky-300">Desarrolladora · prácticas y después en plantilla</p>
                </CardItem>
                <CardItem as="ul" translateZ={30} className="mt-6 grid w-full gap-3 text-base text-slate-300 sm:grid-cols-2">
                  <li>Rediseño de la web corporativa</li>
                  <li>Desarrollo del CRM interno (Angular y Django)</li>
                  <li>Aplicación de servicio técnico para mantenimientos e incidencias</li>
                  <li>Automatización de tareas internas</li>
                </CardItem>
              </CardBody>
            </CardContainer>
          </section>

          <section id="contacto" className={section}>
            <div className={`${glass} relative overflow-hidden p-8 sm:p-14`}>
              <div aria-hidden="true" className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-sky-400/20 blur-[90px]" />
              <h2 className={h2}>Hablemos</h2>
              <p className="mt-4 max-w-xl text-lg text-slate-300">
                Estoy abierta a prácticas y ofertas como desarrolladora. Escríbeme o conecta conmigo en LinkedIn.
              </p>
              <div className="relative mt-8 flex flex-wrap gap-3">
                <a href="mailto:merimarabel@gmail.com" className="inline-flex items-center gap-2 rounded-xl bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-sky-300">
                  <Mail className="h-4 w-4" /> Escribirme
                </a>
                <a href="https://www.linkedin.com/in/meriem-belhadj-" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <LinkedInIcon className="h-4 w-4" /> LinkedIn
                </a>
                <a href="https://github.com/mariam-bel" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  <GitHubIcon className="h-4 w-4" /> GitHub
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 py-8 text-sm text-slate-400">
          © <Suspense fallback={null}><Year /></Suspense> Meriem B. El Boutrouki
        </footer>
      </div>
    </div>
  );
}
