"use client";

import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/3d-card-effect";

export interface ProjectItem {
    id: string;
    title: string;
    roleOrYear?: string;
    summary: string;
    image?: string;
    tags: string[];
    href?: string;
    repoUrl?: string;
}

export default function ProjectCards({ projects }: { projects: ProjectItem[] }) {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project) => (
                <CardContainer key={project.id} containerClassName="py-2 w-full">
                    <CardBody className="group/card flex h-full w-full flex-col justify-between rounded-2xl border border-slate-300/80 bg-white/90 p-6 shadow-sm backdrop-blur transition-shadow duration-300 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-600/10 dark:border-slate-800 dark:bg-slate-900/85 dark:hover:border-blue-400/50 dark:hover:shadow-blue-400/10">
                        <div>
                            {project.roleOrYear && (
                                <CardItem
                                    translateZ={25}
                                    className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-400/10 dark:text-blue-300"
                                >
                                    <Sparkles className="h-3.5 w-3.5" />
                                    {project.roleOrYear}
                                </CardItem>
                            )}

                            <CardItem
                                as="h3"
                                translateZ={45}
                                className="text-xl font-bold tracking-tight text-slate-900 dark:text-white"
                            >
                                {project.title}
                            </CardItem>

                            <CardItem
                                as="p"
                                translateZ={35}
                                className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300"
                            >
                                {project.summary}
                            </CardItem>

                            {project.image && (
                                <CardItem translateZ={70} className="mt-4 w-full">
                                    <img
                                        src={project.image}
                                        alt={`Vista previa de ${project.title}`}
                                        className="h-44 w-full rounded-xl object-cover shadow-sm transition-shadow group-hover/card:shadow-lg"
                                    />
                                </CardItem>
                            )}
                        </div>

                        <div className="mt-6 space-y-4">
                            <CardItem translateZ={30} className="flex w-full flex-wrap gap-1.5">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-slate-200 bg-slate-100/80 px-2.5 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                                    >
                    {tag}
                  </span>
                                ))}
                            </CardItem>

                            {(project.href || project.repoUrl) && (
                                <div className="flex items-center justify-between border-t border-slate-200/80 pt-3 dark:border-slate-800">
                                    {project.href ? (
                                        <CardItem
                                            as="a"
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            translateZ={40}
                                            className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400"
                                        >
                                            Ver proyecto <ArrowUpRight className="h-4 w-4" />
                                        </CardItem>
                                    ) : (
                                        <span className="text-xs text-slate-400">Proyecto interno / privado</span>
                                    )}

                                    {project.repoUrl && (
                                        <CardItem
                                            as="a"
                                            href={project.repoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            translateZ={35}
                                            className="text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
                                        >
                                            Repositorio →
                                        </CardItem>
                                    )}
                                </div>
                            )}
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}