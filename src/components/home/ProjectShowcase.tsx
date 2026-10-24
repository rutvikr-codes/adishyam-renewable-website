"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  ArrowRight,
  Info,
  Layers,
  ChevronRight,
  X,
  Compass,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ProjectShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ["All", "Erection", "Installation", "Site Support", "Repowering"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData.slice(0, 4)
      : projectsData.filter((p) => p.category === selectedCategory).slice(0, 4);

  return (
    <section
      id="projects"
      className="py-20 lg:py-28 bg-white relative"
      aria-label="Project Showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Project Showcase"
          title="Wind Energy Infrastructure Projects"
          subtitle="Representative project profiles illustrating our heavy lifting capabilities, site logistics coordination, and mechanical installation standards."
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat
                  ? "bg-[#27864A] text-white shadow-md shadow-emerald-950/10"
                  : "bg-[#F7F8F3] text-slate-700 hover:bg-slate-200/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project: ProjectItem) => (
            <article
              key={project.id}
              className="group bg-[#F7F8F3] rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#27864A]/50 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badges */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Project Status Pill */}
                  <div className="absolute top-3 left-3 bg-[#123D2A]/90 backdrop-blur-md text-[#A7D96C] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#A7D96C]/30 flex items-center gap-1">
                    <span>{project.status}</span>
                  </div>

                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    {project.category}
                  </div>

                  {/* Location strip */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white">
                    <MapPin className="w-3.5 h-3.5 text-[#A7D96C] flex-shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#123D2A] group-hover:text-[#27864A] transition-colors mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="space-y-1.5 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/60">
                    <div className="flex items-start gap-1.5">
                      <strong className="text-slate-900 flex-shrink-0">Scope:</strong>
                      <span className="line-clamp-2 text-slate-600">
                        {project.scopeOfWork}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer with Modal Trigger */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#27864A] hover:text-[#123D2A] transition-colors cursor-pointer"
                >
                  <span>Inspect Technical Details</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <span className="text-[11px] text-slate-400 font-mono">
                  {project.specifications.hubHeight || "Standard Height"}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#27864A] hover:bg-[#1F6B3B] text-white font-bold text-sm shadow-md transition-all hover:scale-[1.02]"
          >
            <span>Browse Full Representative Project Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors focus:ring-2 focus:ring-[#27864A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#27864A]/10 text-[#27864A]">
                {activeModalProject.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                Sample Showcase
              </span>
            </div>

            <h3
              id="modal-title"
              className="text-2xl font-bold text-[#123D2A] mb-2"
            >
              {activeModalProject.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
              <MapPin className="w-4 h-4 text-[#27864A]" />
              <span>{activeModalProject.location}</span>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={activeModalProject.image}
                alt={activeModalProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-[#123D2A] mb-1">
                  Project Description
                </h4>
                <p className="leading-relaxed">{activeModalProject.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#123D2A] mb-1">
                  Scope of Work Executed
                </h4>
                <p className="leading-relaxed bg-[#F7F8F3] p-3 rounded-lg border border-slate-200">
                  {activeModalProject.scopeOfWork}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#123D2A] mb-2">
                  Technical Specifications (Representative)
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Turbine Class</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeModalProject.specifications.turbineType || "N/A"}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Hub Height</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeModalProject.specifications.hubHeight || "N/A"}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Rotor Diameter</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeModalProject.specifications.rotorDiameter || "N/A"}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Terrain Context</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeModalProject.specifications.terrain || "N/A"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-end">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 rounded-lg bg-[#123D2A] text-white text-sm font-semibold hover:bg-[#27864A] transition-colors"
              >
                Close Project Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
