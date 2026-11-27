"use client";

import { useLayoutEffect, useState } from "react";
import { Plane } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card-effect";

const POOL = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

function Flap({ text, delay = 0, color }: { text: string; delay?: number; color?: string }) {
    const [out, setOut] = useState(text);

    useLayoutEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        const chars = [...text];
        let n = 0;
        const step = () => {
            const el = n++ * 60 - delay;
            setOut(
                chars
                    .map((c, i) => (c === " " ? " " : el < 0 ? " " : el >= 500 + i * 80 ? c : POOL[Math.floor(Math.random() * POOL.length)]))
                    .join("")
            );
            if (el >= 500 + chars.length * 80) {
                clearInterval(id);
                setOut(text);
            }
        };
        const id = setInterval(step, 60);
        step();
        return () => clearInterval(id);
    }, [text, delay]);

    return (
        <span className="flap" style={color ? ({ "--flap": color } as React.CSSProperties) : undefined} role="text" aria-label={text}>
            {[...out].map((c, i) =>
                c === " " ? <span key={i} className="w-[.5em]" aria-hidden /> : <span key={i} className="flap-tile" aria-hidden>{c}</span>
            )}
        </span>
    );
}

const rows = [
    { code: "HS-01", dest: "HERASCIENTIFIC", info: "Web corporativa, CRM y automatización · Angular, Django", status: "EN PLANTILLA" },
    { code: "ED-02", dest: "EPSUM", info: "Desarrollo de Aplicaciones Multiplataforma · 2024–2026", status: "ESTUDIOS" },
    { code: "FT-03", dest: "VUELOS", info: "Seguimiento con datos abiertos · Python", status: "PROYECTO" },
    { code: "MD-04", dest: "MADRID", info: "Prácticas y ofertas como desarrolladora", status: "ABIERTA", color: "#6ee7b7" },
];

export default function DeparturesBoard() {
    return (
        <CardContainer containerClassName="w-full py-0" className="w-full">
            <CardBody className="group/card relative w-full rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-5 shadow-2xl shadow-black/50 backdrop-blur-xl sm:p-8">
                <div className="glare pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity group-hover/card:opacity-100" />
                <CardItem translateZ={40} className="mb-2 flex w-full items-center gap-2 text-sm text-slate-300">
                    <Plane className="h-4 w-4 text-amber-300" /> Salidas desde Madrid
                </CardItem>
                {rows.map((r, i) => (
                    <CardItem key={r.code} translateZ={30 + i * 10} className="w-full">
                        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-white/10 py-4 text-base sm:text-xl">
                            <Flap text={r.code} delay={i * 250} />
                            <Flap text={r.dest} delay={i * 250 + 150} />
                            <p className="order-last basis-full font-sans text-sm text-slate-300 sm:text-base lg:order-none lg:basis-0 lg:flex-1">{r.info}</p>
                            <span className="lg:ml-auto"><Flap text={r.status} delay={i * 250 + 300} color={r.color} /></span>
                        </div>
                    </CardItem>
                ))}
            </CardBody>
        </CardContainer>
    );
}
