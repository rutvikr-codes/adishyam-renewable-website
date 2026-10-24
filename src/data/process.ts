export interface ProcessStep {
  stepNumber: string;
  title: string;
  tagline: string;
  summary: string;
  activities: string[];
  deliverables: string[];
  safetyFocus: string;
  iconName: "MessageSquare" | "MapPin" | "ClipboardList" | "Wrench" | "CheckCircle2";
}

export const executionProcessSteps: ProcessStep[] = [
  {
    stepNumber: "01",
    title: "Initial Discussion & Requirements",
    tagline: "Aligning Project Objectives & Technical Scope",
    summary:
      "Every wind turbine project begins with an in-depth technical dialogue. We review the developer's turbine models, project schedule, site terrain characteristics, and scope boundaries to outline clear operational objectives.",
    activities: [
      "OEM turbine model review (tower height, blade dimensions, nacelle weight)",
      "Clarification of contract scope boundaries (erection-only vs. turnkey site support)",
      "Target timeline and seasonal weather window identification",
      "Identification of necessary heavy-lifting equipment and crane capacities",
    ],
    deliverables: [
      "Initial Scope Matrix & Responsibility RACI",
      "Preliminary Execution Timeline & Milestone Estimate",
    ],
    safetyFocus: "Early hazard identification and contractual safety standards alignment.",
    iconName: "MessageSquare",
  },
  {
    stepNumber: "02",
    title: "Site & Project Assessment",
    tagline: "Rigorous Ground Truth & Infrastructure Validation",
    summary:
      "Our engineering team conducts a thorough on-site reconnaissance to inspect crane pad stability, access road turning clearances, foundation anchor bolt readiness, and local meteorological patterns.",
    activities: [
      "Crane pad ground-bearing capacity review and compaction verification",
      "Transport corridor assessment for oversized blade and tower section convoys",
      "Foundation anchor bolt template elevation, leveling, and bolt cage survey",
      "Staging yard layout planning and weather tracking station setup",
    ],
    deliverables: [
      "Site Access & Crane Pad Readiness Inspection Report",
      "Transport Clearance Route Survey & Turning Radius Log",
    ],
    safetyFocus: "Ground bearing stability audit to prevent crane outrigger subsidence.",
    iconName: "MapPin",
  },
  {
    stepNumber: "03",
    title: "Planning & Coordination",
    tagline: "Method Statements, 3D Lift Studies & Logistics Sync",
    summary:
      "We engineer detailed Installation Method Statements (IMS), complete comprehensive Risk Assessments (RAMS), develop 3D crane lift studies, and synchronize component delivery sequences.",
    activities: [
      "Formulation of step-by-step Installation Method Statements (IMS)",
      "Rigging configuration design, spreader bar selection, and safety factor calculations",
      "Mobilization planning for main lattice/crawler cranes and assist cranes",
      "Cross-stakeholder coordination with developers, OEMs, and transport teams",
    ],
    deliverables: [
      "Engineered Heavy Lift Plan & Wind Window Protocols",
      "Integrated Project Execution Schedule & Daily Resource Matrix",
    ],
    safetyFocus: "Formal Permit-To-Work (PTW) rules and certified rigging inspection sign-offs.",
    iconName: "ClipboardList",
  },
  {
    stepNumber: "04",
    title: "Installation & Erection",
    tagline: "Precision Heavy Lifts & Calibrated Mechanical Fit-Out",
    summary:
      "Our certified site rigging crew and mechanical engineers execute the sequential erection of tower segments, nacelle placement, and blade rotor assembly under real-time wind speed monitoring.",
    activities: [
      "Sequential tower section upending, landing, and calibrated hydraulic bolt torquing",
      "Nacelle and drive-train hoisting with dual-crane tag line control",
      "Single-blade or pre-assembled star rotor hoisting within verified wind speed windows",
      "Internal mechanical alignment, cable tray fitting, busbar coupling, and LPS bonding",
    ],
    deliverables: [
      "Daily Erection Progress Logs & Weather Downtime Records",
      "Flange Bolt Calibrated Torque & Tensioning Audit Sheets",
    ],
    safetyFocus: "Rigid enforcement of exclusion zones and continuous anemometer wind tracking (<8-9 m/s).",
    iconName: "Wrench",
  },
  {
    stepNumber: "05",
    title: "Inspection & Handover",
    tagline: "Comprehensive Quality Verification & Pre-Commissioning Transfer",
    summary:
      "The erected turbine undergoes systematic mechanical, structural, and electrical continuity audits. A comprehensive punch-list verification is conducted alongside OEM engineers before final client handover.",
    activities: [
      "Mechanical alignment sign-off, internal ladder and service lift certification",
      "Electrical insulation (Megger), loop resistance, and lightning protection continuity checks",
      "Joint walk-through with OEM and developer representatives for punch-list resolution",
      "Compilation of comprehensive as-built records, torque logs, and handover documentation",
    ],
    deliverables: [
      "Comprehensive Mechanical & Structural Handover Certificate",
      "Complete Quality Dossier (Torque Logs, LPS Tests, Daily Inspection Records)",
    ],
    safetyFocus: "Verification of all fall-arrest systems, emergency descent equipment, and lock-out/tag-out safety locks.",
    iconName: "CheckCircle2",
  },
];
