"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/ui/SocialIcons";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card-effect";
import { CompanyLogo } from "@/components/CompanyLogo";
import type { Project } from "../data/projects";

export default function ProjectCards({ projects }: { projects: Project[] }) {
    const allTags = useMemo(() => Array.from(new Set(projects.flatMap((p) => p.tags))), [projects]);
    const [filter, setFilter] = useState<string | null>(null);
    const shown = filter ? projects.filter((p) => p.tags.includes(filter)) : projects;

    const chip = (active: boolean) =>
        `rounded-full border px-4 py-1.5 text-sm transition ${
            active
                ? "border-sky-400 bg-sky-400 text-slate-950"
                : "border-white/15 text-slate-300 hover:border-sky-400/60 hover:text-white"
        }`;

    return (
        <>
            <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filtrar por tecnología">
                <button type="button" className={chip(filter === null)} aria-pressed={filter === null} onClick={() => setFilter(null)}>
                    Todos
                </button>
                {allTags.map((t) => (
                    <button key={t} type="button" className={chip(filter === t)} aria-pressed={filter === t} onClick={() => setFilter(filter === t ? null : t)}>
                        {t}
                    </button>
                ))}
            </div>

            <div className="flex flex-col gap-14">
                {shown.map((p) => (
                    <CardContainer key={p.id} containerClassName="w-full py-0" className="w-full">
                        <CardBody className="group/card relative grid w-full gap-8 rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition-shadow hover:shadow-sky-500/10 sm:p-10 lg:min-h-[32rem] lg:grid-cols-12 lg:gap-12">
                            <div className="glare pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

                            <div className="flex flex-col justify-between gap-8 lg:col-span-5">
                                <div className="space-y-5">
                                    <CardItem translateZ={30}>
                                        {p.company ? (
                                            <CompanyLogo name={p.company} className="h-7 w-7" />
                                        ) : (
                                            <span className="rounded-full border border-white/15 px-3 py-1 text-sm text-slate-300">Proyecto personal</span>
                                        )}
                                    </CardItem>
                                    <CardItem as="h3" translateZ={70} className="font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                                        {p.title}
                                    </CardItem>
                                    <CardItem as="p" translateZ={40} className="text-base leading-relaxed text-slate-300 sm:text-lg">
                                        {p.description}
                                    </CardItem>
                                </div>

                                <div className="space-y-6">
                                    <CardItem translateZ={35} className="w-full">
                                        <ul className="flex flex-wrap gap-2">
                                            {p.tags.map((t) => (
                                                <li key={t} className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-sm text-slate-200">
                                                    {t}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardItem>
                                    {(p.demoUrl || p.repoUrl) && (
                                        <div className="flex flex-wrap gap-3">
                                            {p.demoUrl && (
                                                <CardItem as="a" href={p.demoUrl} target="_blank" rel="noreferrer" translateZ={60} className="inline-flex items-center gap-1.5 rounded-xl bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-sky-300">
                                                    Ver proyecto <ArrowUpRight className="h-4 w-4" />
                                                </CardItem>
                                            )}
                                            {p.repoUrl && (
                                                <CardItem as="a" href={p.repoUrl} target="_blank" rel="noreferrer" translateZ={60} className="inline-flex items-center gap-1.5 rounded-xl border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10">
                                                    <GitHubIcon className="h-4 w-4" /> Repositorio
                                                </CardItem>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="relative lg:col-span-7">
                                <CardItem translateZ={90} className="h-full w-full">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src={p.image}
                                        alt={p.title}
                                        loading="lazy"
                                        className="h-64 w-full rounded-2xl object-cover shadow-2xl shadow-black/60 ring-1 ring-white/15 sm:h-80 lg:h-full lg:min-h-[24rem]"
                                    />
                                </CardItem>
                                <CardItem translateZ={140} className="absolute -bottom-5 left-6 rounded-xl border border-white/15 bg-slate-950/80 px-4 py-2 text-sm text-white shadow-xl backdrop-blur">
                                    {p.company ?? p.tags[0]}
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>
                ))}
            </div>
        </>
    );
}
