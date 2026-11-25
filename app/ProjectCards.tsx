"use client";
import { useMemo, useState } from "react";
import type { Project } from "../data/projects";
import "./ProjectCards.css";

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const techs = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tecnologias))),
    [projects]
  );
  const [filter, setFilter] = useState<string | null>(null);
  const [open, setOpen] = useState<string | null>(null);
  const shown = filter ? projects.filter((p) => p.tecnologias.includes(filter)) : projects;

  return (
    <>
      <div className="chips" role="group" aria-label="Filtrar por tecnología">
        <button className="chip" aria-pressed={filter === null} onClick={() => { setFilter(null); setOpen(null); }}>
          Todos
        </button>
        {techs.map((t) => (
          <button
            key={t}
            className="chip"
            aria-pressed={filter === t}
            onClick={() => { setFilter(filter === t ? null : t); setOpen(null); }}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="cards">
        {shown.map((p) => {
          const isOpen = open === p.titulo;
          const id = "card-" + p.titulo.replace(/\W+/g, "-");
          return (
            <article className={"card" + (isOpen ? " open" : "")} key={p.titulo}>
              <button
                className="card-head"
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : p.titulo)}
              >
                <span className="card-meta">{p.tipo}</span>
                {p.estado && <span className="card-status">{p.estado}</span>}
                <span className="card-title">{p.titulo}</span>
                <span className="chev" aria-hidden="true" />
              </button>
              <ul className="tags">
                {p.tecnologias.map((t) => <li key={t}>{t}</li>)}
              </ul>
              <div className="card-body" id={id}>
                <div className="card-inner">
                  <p>{p.texto}</p>
                  {p.enlace && (
                    <a className="link" href={p.enlace}>{p.enlaceTexto ?? "Ver proyecto"}</a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
