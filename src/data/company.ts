export interface ValueProposition {
  title: string;
  description: string;
  iconName: "ShieldCheck" | "Cpu" | "GitMerge" | "MessageSquare" | "Award" | "Leaf";
  highlight: string;
}

export const whyChooseUsValues: ValueProposition[] = [
  {
    title: "Engineering-Focused Execution",
    description:
      "Every turbine lift is governed by engineered method statements, calculated center-of-gravity studies, and OEM-compliant rigging practices.",
    iconName: "Cpu",
    highlight: "Engineering Rigor",
  },
  {
    title: "Commitment to Zero-Harm Safety",
    description:
      "Heavy lift operations demand an unyielding safety culture. We enforce strict exclusion zones, daily toolbox talks, and certified gear audits.",
    iconName: "ShieldCheck",
    highlight: "Safety First",
  },
  {
    title: "Structured Project Coordination",
    description:
      "We bridge the gap between civil contractors, logistics convoys, crane operators, and OEM technical advisors to keep projects on schedule.",
    iconName: "GitMerge",
    highlight: "Coordinated Delivery",
  },
  {
    title: "Transparent, Reliable Communication",
    description:
      "Clear, daily milestone dashboards, real-time weather monitoring updates, and immediate escalation paths for complete stakeholder transparency.",
    iconName: "MessageSquare",
    highlight: "Daily Reporting",
  },
  {
    title: "Meticulous Installation Quality",
    description:
      "Calibrated torque verification, precision laser alignment, and systematic mechanical checklists ensure assets run reliably for decades.",
    iconName: "Award",
    highlight: "Precision Assembly",
  },
  {
    title: "Sustainable Renewable Infrastructure",
    description:
      "Dedicated to advancing clean energy capacity across diverse geographic terrains with minimal ecological disturbance on site.",
    iconName: "Leaf",
    highlight: "Clean Energy Impact",
  },
];

export const companyProfile = {
  name: "Adishyam Renewable Private Limited",
  establishedNotice: "Corporate profile and founding milestones are configurable for official company publication.",
  mission:
    "To provide premier wind turbine erection, installation, and engineering support services across diverse geographical terrains, executing high-capacity renewable infrastructure with unwavering commitments to engineering precision, personnel safety, and operational reliability.",
  vision:
    "To be recognized across the renewable energy industry as the trusted execution partner for utility-scale wind power projects, enabling a cleaner, more sustainable energy future through engineering excellence.",
  philosophy: [
    {
      title: "Engineered Certainty Over Assumption",
      text: "Heavy-lift wind projects leave zero room for guesswork. We treat every lift as a precision structural operation supported by verified calculations, certified crane configurations, and real-time wind speed telemetry.",
    },
    {
      title: "People-Centric Safety Culture",
      text: "Safety isn't just a binder on a shelf; it is our operational baseline. Every technician, rigger, and engineer is empowered and required to issue a stop-work order if environmental or mechanical conditions exceed safety thresholds.",
    },
    {
      title: "Collaborative Project Partnership",
      text: "We work as an extension of the developer and OEM team, providing proactive coordination between foundation contractors, logistics carriers, and grid connection teams.",
    },
  ],
  safetyAndQualityApproach: {
    standards: [
      "Rigid adherence to OEM assembly protocols and statutory occupational safety norms.",
      "100% calibration tracking for hydraulic torque wrenches, tensioners, and measuring gauges.",
      "Strict lifting wind-speed limit enforcement (continuous ultrasonic anemometer logs).",
      "Comprehensive daily Permit-To-Work (PTW) and Job Safety Analysis (JSA) governance.",
      "Mandatory dual-crane tag line control for large rotor and blade manipulation.",
    ],
    qualityAuditStages: [
      "Stage 1: Pre-mobilization crane pad & anchor cage laser inspection.",
      "Stage 2: Receipt verification & tower flange defect scanning.",
      "Stage 3: Calibrated torque and tension verification at each flange ring.",
      "Stage 4: LPS lightning protection system resistance and electrical continuity tests.",
      "Stage 5: Final mechanical walk-through and joint punch-list certification.",
    ],
  },
  teamPlaceholder: {
    title: "Leadership & Technical Team",
    notice:
      "Official executive profiles, certified engineers, and leadership team records are currently being compiled and will be published following final company authorization.",
    roles: [
      {
        role: "Managing Director / Executive Leadership",
        dept: "Corporate Strategy & Governance",
        description: "Steers strategic direction, industry partnerships, and long-term infrastructure investment.",
      },
      {
        role: "Head of Project Execution & Heavy Lifting",
        dept: "Operations & Site Engineering",
        description: "Directs crane mobilization, heavy rigging method statements, and site safety standards.",
      },
      {
        role: "Lead Electrical & Commissioning Engineer",
        dept: "Technical & Grid Interface",
        description: "Supervises internal cabling, SCADA interface, lightning protection, and pre-commissioning checks.",
      },
      {
        role: "Quality, Health, Safety & Environment (QHSE) Lead",
        dept: "Safety & Compliance",
        description: "Enforces zero-harm safety governance, risk assessments, and environmental compliance on all sites.",
      },
    ],
  },
};
