"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import {
    CardBody,
    CardContainer,
    CardItem,
} from "@/components/ui/3d-card-effect";
import { CompanyLogo } from "@/components/CompanyLogo";
import type { Project } from "@/data/projects";

export default function ProjectCards({ projects }: { projects: Project[] }) {
    return (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project) => (
                <CardContainer
                    key={project.id}
                    containerClassName="py-4 w-full"
                    className="w-full"
                >
                    <CardBody className="group/card relative h-auto w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 transition-shadow hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
                        <div className="flex items-start justify-between gap-4">
                            <CardItem
                                as="h3"
                                translateZ="50"
                                className="text-xl font-bold text-neutral-700 dark:text-white"
                            >
                                {project.title}
                            </CardItem>

                            {project.company && (
                                <CardItem translateZ="45" className="shrink-0">
                                    <CompanyLogo name={project.company} className="h-6 w-6" />
                                </CardItem>
                            )}
                        </div>

                        <CardItem
                            as="p"
                            translateZ="60"
                            className="mt-2 max-w-md text-sm text-neutral-500 dark:text-neutral-300"
                        >
                            {project.description}
                        </CardItem>

                        <CardItem translateZ="100" className="mt-4 w-full">
                            <img
                                src={project.image}
                                height={1000}
                                width={1000}
                                alt={project.title}
                                className="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
                            />
                        </CardItem>

                        <CardItem
                            translateZ="40"
                            className="mt-5 flex w-full flex-wrap gap-2"
                        >
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-md border border-black/10 bg-white/80 px-2.5 py-0.5 text-xs font-medium text-neutral-700 dark:border-white/15 dark:bg-neutral-900 dark:text-neutral-200"
                                >
                  {tag}
                </span>
                            ))}
                        </CardItem>

                        <div className="mt-8 flex items-center justify-between gap-4">
                            {project.repoUrl ? (
                                <CardItem
                                    as="a"
                                    href={project.repoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    translateZ={20}
                                    className="inline-flex items-center gap-1 rounded-xl px-4 py-2 text-xs font-normal text-neutral-700 hover:underline dark:text-white"
                                >
                                    Repositorio <ArrowUpRight className="h-3.5 w-3.5" />
                                </CardItem>
                            ) : (
                                <CardItem
                                    translateZ={20}
                                    className="text-xs text-neutral-400 dark:text-neutral-500"
                                >
                                    {project.company ?? "Proyecto"}
                                </CardItem>
                            )}

                            {project.demoUrl && (
                                <CardItem
                                    as="a"
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    translateZ={20}
                                    className="inline-flex items-center gap-1 rounded-xl bg-black px-4 py-2 text-xs font-bold text-white dark:bg-white dark:text-black"
                                >
                                    Ver proyecto <ArrowUpRight className="h-3.5 w-3.5" />
                                </CardItem>
                            )}
                        </div>
                    </CardBody>
                </CardContainer>
            ))}
        </div>
    );
}