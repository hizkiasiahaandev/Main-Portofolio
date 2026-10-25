
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import {  ArrowUpRight, Link, ExternalLink, Tag } from "lucide-react";




export default function Projectpage() {
  return (
    <section id="projects" className="bg-gray-50  px-4 py-24">
      <div className="h-full">
        <div className="mx-auto w-full max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-blue-600">
            <span className="h-px w-8 bg-blue-600" />
            Selected Works
          </p>

          <h2 className="text-3xl font-bold  tracking-tight text-slate-900 md:text-5xl">
            Things I've {" "}
            <span className="text-slate-500">built.</span>
          </h2>

          <p className="mt-5 leading-relaxed text-slate-600">
            A collection of projects showcasing my skills,
            creativity, and journey as a software developer.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project) => (
            <article
              key={project.number}
              className="grid grid-cols-1 items-center gap-10 border-t border-slate-200 py-12 md:grid-cols-2 md:gap-14 md:py-16"
            >
              <div className="flex flex-col justify-center">
                <div className="mb-7 flex items-center gap-4">
                  <span className="text-5xl font-light tracking-tighter text-blue-600 md:text-7xl">
                    {project.number}
                  </span>

                  <span className="h-px w-10 bg-slate-300" />

                  <span className="text-[10px] font-semibold tracking-[0.18em] text-slate-400 sm:text-xs">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                  {project.description}
                </p>

                <div className="mt-7">
                  <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-slate-400">
                    Technologies
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-lg border items-center inline-flex gap-1 border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-600 transition hover:border-slate-300 hover:text-slate-700"
                      >
                        <Tag
                         size={14}
                         fill="currentColor"
                         stroke="white"
                         />
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
                    >
                      <Link size={16} />
                      Source Code
                      <ArrowUpRight size={15} />
                    </a>
                  )}

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-white"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>

                <p className="mt-10 text-xs tracking-widest text-slate-400">
                  PROJECT {project.number} / 03
                </p>
              </div>

              <div className="relative">
                <div className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-900/5">
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className="h-full w-full object-cover object-[center_15%] transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-slate-950/30 via-transparent to-transparent opacity-60" />

                  <Badge className="absolute bottom-5 left-5 rounded-full border border-white/30 bg-slate-950/50 px-4 py-4 text-xs font-medium tracking-wide text-white backdrop-blur-md">
                    {project.number} — {project.title}
                  </Badge>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 py-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-500">
            More projects coming soon.
          </p>

          <a
            href="https://github.com/hizkiasiahaandev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-800 transition hover:text-blue-600"
          >
            <Link size={16} />
            Explore GitHub
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}

