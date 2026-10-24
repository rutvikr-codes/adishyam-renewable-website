export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: "Erection" | "Installation" | "Repowering" | "Site Support";
  location: string;
  scopeOfWork: string;
  description: string;
  specifications: {
    turbineType?: string;
    hubHeight?: string;
    rotorDiameter?: string;
    terrain?: string;
  };
  image: string;
  isSampleData: boolean;
  sampleBadgeText: string;
  status: "Sample Showcase" | "Representative Layout" | "Configurable Template";
}

export const sampleNoticeText =
  "Sample Showcase Project (Illustrative Demo Layout for Adishyam Renewable. Replace with verified project records).";

export const projectsData: ProjectItem[] = [
  {
    id: "sample-wind-farm-erection-alpha",
    slug: "sample-wind-farm-erection-alpha",
    title: "High-Capacity Wind Turbine Erection & Assembly",
    category: "Erection",
    location: "Representative Coastal Corridor, Western Region (Demo)",
    scopeOfWork:
      "Heavy crane pad validation, multi-stage tubular steel tower erection, nacelle alignment, and 3-blade rotor hoisting under strict wind window tolerances.",
    description:
      "Illustrative project profile demonstrating Adishyam's proposed execution methodology for modern multi-megawatt turbines. Encompasses crane coordination, heavy lift sequencing, calibrated hydraulic tensioning, and sequential mechanical handover.",
    specifications: {
      turbineType: "Multi-Megawatt Utility Class (Representative)",
      hubHeight: "120 - 140 m",
      rotorDiameter: "130 - 150 m",
      terrain: "Open coastal plains with variable crosswinds",
    },
    image: "/images/crane-erection.jpg",
    isSampleData: true,
    sampleBadgeText: "Configurable Demo Project",
    status: "Sample Showcase",
  },
  {
    id: "sample-multi-turbine-installation-beta",
    slug: "sample-multi-turbine-installation-beta",
    title: "Wind Park Mechanical & Electrical Fit-Out",
    category: "Installation",
    location: "Plateau Renewable Corridor, Southern Region (Demo)",
    scopeOfWork:
      "Internal tower cabling, busbar torque verification, yaw drive commissioning assistance, and SCADA communication network drop.",
    description:
      "Representative installation profile illustrating the full internal mechanical and electrical workflow from ground foundation terminals to the nacelle control console.",
    specifications: {
      turbineType: "Utility Grade Wind Energy System (Representative)",
      hubHeight: "100 - 120 m",
      rotorDiameter: "120 m",
      terrain: "Elevated semi-arid plateau",
    },
    image: "/images/hero-wind-farm.jpg",
    isSampleData: true,
    sampleBadgeText: "Configurable Demo Project",
    status: "Representative Layout",
  },
  {
    id: "sample-engineering-site-management-gamma",
    slug: "sample-engineering-site-management-gamma",
    title: "On-Site Engineering Coordination & EHS Oversight",
    category: "Site Support",
    location: "Undulating Hill Complex, Central Region (Demo)",
    scopeOfWork:
      "Comprehensive field supervision, access way gradient assessment, daily Permit-To-Work administration, and heavy lift risk management.",
    description:
      "Model case study illustrating Adishyam's field management approach. Features rigorous safety compliance, crane hardstand settlement monitoring, and OEM interface tracking.",
    specifications: {
      turbineType: "Complex Terrain Wind Array (Representative)",
      hubHeight: "110 m",
      rotorDiameter: "126 m",
      terrain: "Undulating ridges with complex aerodynamics",
    },
    image: "/images/site-engineers.jpg",
    iconName: "HardHat",
    isSampleData: true,
    sampleBadgeText: "Configurable Demo Project",
    status: "Sample Showcase",
  } as ProjectItem,
  {
    id: "sample-turbine-repowering-delta",
    slug: "sample-turbine-repowering-delta",
    title: "Wind Turbine Repowering & Component Retrofit Study",
    category: "Repowering",
    location: "High-Wind Ridge Corridor (Demo)",
    scopeOfWork:
      "Controlled dismantling coordination for aging sub-megawatt turbines, foundation anchor inspection, and updated nacelle retrofit planning.",
    description:
      "Structured repowering showcase illustrating how legacy sites can be safely deconstructed and reconfigured for modern high-efficiency turbines.",
    specifications: {
      turbineType: "Repowering Platform Transition (Representative)",
      hubHeight: "Up to 130 m upgrade",
      rotorDiameter: "High-yield aerodynamic profile",
      terrain: "High wind-shear ridge zone",
    },
    image: "/images/wind-sunset.jpg",
    isSampleData: true,
    sampleBadgeText: "Configurable Demo Project",
    status: "Configurable Template",
  },
  {
    id: "sample-heavy-logistics-blade-delivery",
    slug: "sample-heavy-logistics-blade-delivery",
    title: "Heavy Component Staging & Access Route Logistics",
    category: "Site Support",
    location: "Regional Transit Corridor to Wind Farm Site (Demo)",
    scopeOfWork:
      "Route feasibility surveys, turning radius verification, staging yard offloading, and crane laydown coordination.",
    description:
      "Demonstration of logistical planning and site readiness protocols required to navigate 70m+ turbine blades through challenging road infrastructure to the pad location.",
    specifications: {
      turbineType: "Extended Blade Class (Representative)",
      hubHeight: "N/A - Logistics Phase",
      rotorDiameter: "75m Blade Lengths",
      terrain: "Rural and hill road corridors",
    },
    image: "/images/blade-transport.jpg",
    isSampleData: true,
    sampleBadgeText: "Configurable Demo Project",
    status: "Representative Layout",
  },
  {
    id: "sample-grid-interface-readiness",
    slug: "sample-grid-interface-readiness",
    title: "Collector Network & BOP Infrastructure Coordination",
    category: "Installation",
    location: "Green Energy Grid Interconnect Zone (Demo)",
    scopeOfWork:
      "Foundation bolt ring laser leveling, medium-voltage cable trench interface, and substation readiness verification.",
    description:
      "Exemplifies the essential balance-of-plant coordination required between turbine erection teams and civil/electrical utility grid contractors.",
    specifications: {
      turbineType: "Substation Interface (Representative)",
      hubHeight: "Infrastructure Level",
      rotorDiameter: "Multi-Feeder Array",
      terrain: "Flat open agricultural basin",
    },
    image: "/images/grid-substation.jpg",
    isSampleData: true,
    sampleBadgeText: "Configurable Demo Project",
    status: "Sample Showcase",
  },
];
