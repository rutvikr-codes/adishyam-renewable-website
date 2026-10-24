"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Info,
  ChevronRight,
  X,
  Layers,
  Filter,
  Search,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { projectsData, ProjectItem } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactCTASection } from "@/components/layout/ContactCTASection";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const categories = [
    "All",
    "Erection",
    "Installation",
    "Site Support",
    "Repowering",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCat =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.scopeOfWork.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesQuery;
  });

  return (
    <div className="pt-24 lg:pt-28">
      {/* Header Banner */}
      <section className="bg-[#123D2A] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/crane-erection.jpg"
            alt="Wind turbine crane erection portfolio"
            fill
            priority
            className="object-cover opacity-20 filter contrast-125"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D2B1D] via-[#123D2A]/90 to-[#123D2A]/80" />
          <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#27864A]/40 border border-[#A7D96C]/40 text-xs font-semibold text-[#A7D96C] uppercase tracking-wider mb-4">
              <Layers className="w-4 h-4 text-[#A7D96C]" />
              <span>Project Showcase</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white">
              Wind Energy Project Portfolio.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed">
              Explore representative project profiles illustrating heavy-lift
              rigging, tower section assembly, rotor hoisting, and internal
              electrical fit-out across varied geographical terrains.
            </p>
          </div>
        </div>
      </section>

      {/* Development Sample Notice */}
      <section className="bg-amber-50 border-b border-amber-200 py-3.5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-xs sm:text-sm text-amber-900 text-center">
          <Info className="w-4 h-4 text-amber-600 flex-shrink-0" />
          <span>
            <strong>Verification Notice:</strong> The projects displayed below
            are illustrative demo profiles. Client-specific completed project
            records and verified capacity statistics will be uploaded upon
            official client authorization.
          </span>
        </div>
      </section>

      {/* Main Portfolio Grid with Interactive Filters & Search */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Category Pills + Search */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 pb-6 border-b border-slate-200">
            {/* Category Filter */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="text-xs font-bold uppercase text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Filter:
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-[#27864A] text-white shadow-sm"
                      : "bg-[#F7F8F3] text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Keyword Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or scopes..."
                className="w-full pl-9 pr-4 py-2 rounded-xl text-xs sm:text-sm border border-slate-300 focus:outline-none focus:border-[#27864A] focus:ring-1 focus:ring-[#27864A] bg-[#F7F8F3]/60 focus:bg-white transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Project Articles Grid */}
          {filteredProjects.length === 0 ? (
            <div className="text-center py-16 bg-[#F7F8F3] rounded-2xl border border-dashed border-slate-300">
              <p className="text-base text-slate-600 font-medium">
                No sample projects match your filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-3 text-sm font-bold text-[#27864A] hover:underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project: ProjectItem) => (
                <article
                  key={project.id}
                  className="group bg-[#F7F8F3] rounded-2xl overflow-hidden border border-slate-200 hover:border-[#27864A] hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Media */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                      {/* Demo indicator tag */}
                      <div className="absolute top-3 left-3 bg-[#123D2A]/90 text-[#A7D96C] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full border border-[#A7D96C]/30 flex items-center gap-1">
                        <Info className="w-3 h-3" />
                        <span>{project.sampleBadgeText}</span>
                      </div>

                      <div className="absolute top-3 right-3 bg-white/90 text-slate-800 text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                        {project.category}
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 text-xs text-white">
                        <MapPin className="w-3.5 h-3.5 text-[#A7D96C] flex-shrink-0" />
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      <h2 className="text-lg font-bold text-[#123D2A] group-hover:text-[#27864A] transition-colors mb-2 leading-snug">
                        {project.title}
                      </h2>

                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="space-y-1 text-xs text-slate-700 bg-white p-3 rounded-lg border border-slate-200/60 mb-2">
                        <span className="font-semibold text-slate-900 block">
                          Scope Summary:
                        </span>
                        <p className="line-clamp-2 text-slate-600">
                          {project.scopeOfWork}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="px-6 pb-6 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#27864A] hover:text-[#123D2A] transition-colors"
                    >
                      <span>View Specifications</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] font-mono text-slate-400">
                      {project.status}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Accessible Detail Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs animate-in fade-in duration-200"
        >
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 p-6 sm:p-8 relative">
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors focus:ring-2 focus:ring-[#27864A]"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#27864A]/10 text-[#27864A]">
                {activeProject.category}
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                Sample Showcase Profile
              </span>
            </div>

            <h3
              id="modal-project-title"
              className="text-2xl font-bold text-[#123D2A] mb-2"
            >
              {activeProject.title}
            </h3>

            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
              <MapPin className="w-4 h-4 text-[#27864A]" />
              <span>{activeProject.location}</span>
            </div>

            <div className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 bg-slate-100">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="space-y-4 text-sm text-slate-700">
              <div>
                <h4 className="font-bold text-[#123D2A] mb-1">
                  Project Description
                </h4>
                <p className="leading-relaxed">{activeProject.description}</p>
              </div>

              <div>
                <h4 className="font-bold text-[#123D2A] mb-1">
                  Detailed Scope of Execution
                </h4>
                <p className="leading-relaxed bg-[#F7F8F3] p-3 rounded-lg border border-slate-200">
                  {activeProject.scopeOfWork}
                </p>
              </div>

              <div>
                <h4 className="font-bold text-[#123D2A] mb-2">
                  Technical Parameters
                </h4>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Turbine Class</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeProject.specifications.turbineType || "Configurable"}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Hub Height</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeProject.specifications.hubHeight || "Configurable"}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Rotor Diameter</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeProject.specifications.rotorDiameter ||
                        "Configurable"}
                    </strong>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-slate-500 block">Terrain Context</span>
                    <strong className="text-slate-900 font-semibold">
                      {activeProject.specifications.terrain || "Configurable"}
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 flex justify-between items-center">
              <Link
                href="/contact"
                className="text-xs font-bold text-[#27864A] hover:underline"
              >
                Discuss a similar project &rarr;
              </Link>
              <button
                onClick={() => setActiveProject(null)}
                className="px-5 py-2.5 rounded-lg bg-[#123D2A] text-white text-sm font-semibold hover:bg-[#27864A] transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Call to action */}
      <ContactCTASection
        title="Have an Upcoming Wind Project in Development?"
        subtitle="Submit your site coordinates and project timeline to explore tailored erection and engineering support packages."
      />
    </div>
  );
}
