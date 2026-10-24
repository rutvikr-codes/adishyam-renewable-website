export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  scopeOfWork: string[];
  executionApproach: string[];
  keyConsiderations: string[];
  image: string;
  iconName: "Crane" | "Settings" | "HardHat" | "Calendar" | "Zap" | "Compass";
  tag: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: "wind-turbine-erection",
    slug: "wind-turbine-erection",
    title: "Wind Turbine Erection",
    shortDescription:
      "Precision heavy-lift rigging and structural erection of turbine towers, nacelles, drive trains, and aerodynamic rotor assemblies.",
    fullDescription:
      "Our wind turbine erection service delivers specialized heavy-lifting and mechanical assembly expertise. From multi-stage tubular steel tower sections to delicate nacelle placement and single-blade or pre-assembled star rotor lifts, our site crews work in close coordination with specialized heavy mobile and crawler cranes to execute erection according to original equipment manufacturer (OEM) specifications.",
    scopeOfWork: [
      "Heavy crane pad verification, ground bearing checks, and rigging coordination",
      "Multi-section tubular or lattice steel tower offloading, upending, and sequential bolting",
      "Nacelle and generator hoisting, orientation alignment, and torque verification",
      "Rotor hub assembly, blade mounting, and precision hoisting under strict wind window tolerances",
      "Initial mechanical alignment, internal ladder installation, and structural integrity audits",
    ],
    executionApproach: [
      "Rigorous lift-plan development with certified crane supervisors",
      "Continuous on-site anemometer wind-speed monitoring prior to and during critical lifts",
      "Calibrated hydraulic torquing and tensioning equipment for high-tensile foundation and flange bolts",
      "Daily toolbox talks and multi-stage rigging inspection protocols",
    ],
    keyConsiderations: [
      "Wind threshold management (typical blade lift limits < 8-9 m/s)",
      "Soil stability and crane outrigger loading verification",
      "OEM assembly tolerances and electrical conduit preservation",
    ],
    image: "/images/crane-erection.jpg",
    iconName: "Crane",
    tag: "Heavy Mechanical & Rigging",
  },
  {
    id: "wind-turbine-installation-setup",
    slug: "wind-turbine-installation-setup",
    title: "Wind Turbine Installation and Setup",
    shortDescription:
      "End-to-end mechanical and electrical installation, cabling, internal systems setup, and pre-commissioning alignment.",
    fullDescription:
      "Mechanical and electrical setup transforms erected components into an integrated generation asset. Our technical crews handle the complete internal fit-out, including busbar coupling, low-voltage and medium-voltage power cabling, fiber optic communication line routing, hydraulic pitch system setup, and yaw mechanism calibration.",
    scopeOfWork: [
      "Tower internal cable drop, power cable termination, and busbar link installations",
      "Hydraulic pitch and yaw system mechanical checks, fluid level verification, and pressure testing",
      "Control cabinet, SCADA interface, and aviation warning light system wiring",
      "Grounding, lightning protection system (LPS) continuity, and bonding verification",
      "Pre-commissioning checklist execution alongside OEM and client commissioning engineers",
    ],
    executionApproach: [
      "Standardized cable-tray routing and cold-shrink termination best practices",
      "Comprehensive multi-meter, insulation resistance (Megger), and loop impedance testing",
      "Step-by-step mechanical checklist sign-off for torque, lubricants, and safety covers",
    ],
    keyConsiderations: [
      "Moisture and dust protection during internal cabinet fit-outs",
      "Strict segregation of control wiring from high-current power cables",
      "Adherence to OEM torque mark sealing protocols",
    ],
    image: "/images/foundation-site.jpg",
    iconName: "Settings",
    tag: "Systems & Pre-Commissioning",
  },
  {
    id: "on-site-project-execution",
    slug: "on-site-project-execution",
    title: "On-Site Project Execution",
    shortDescription:
      "Comprehensive site management, field engineering supervision, safety enforcement, and contractor interface management.",
    fullDescription:
      "Wind farm sites are complex, dynamic environments requiring continuous operational oversight. We provide dedicated on-site project execution managers who supervise civil-mechanical interfaces, oversee specialized subcontractors, enforce stringent health and safety standards, and ensure schedules remain on track across multi-turbine layouts.",
    scopeOfWork: [
      "Daily site coordination, progress tracking, and contractor interface management",
      "Site safety governance, risk assessments, and environmental compliance monitoring",
      "Access route traffic coordination for oversized turbine component convoys",
      "Material receipt inspection, staging yard inventory, and component preservation",
      "Quality assurance audits, non-conformance reporting, and corrective action closure",
    ],
    executionApproach: [
      "Dedicated Site Project Lead stationed on location for real-time decision making",
      "Daily work permit (PTW) issuance and job safety analysis (JSA) reviews",
      "Integrated project dashboards reporting daily erection milestones to client stakeholders",
    ],
    keyConsiderations: [
      "Weather-induced downtime management and schedule buffer allocation",
      "Local community liaison and heavy transport passage harmony",
      "Strict compliance with local occupational health and safety regulations",
    ],
    image: "/images/site-engineers.jpg",
    iconName: "HardHat",
    tag: "Field Management & EHS",
  },
  {
    id: "installation-planning-coordination",
    slug: "installation-planning-coordination",
    title: "Installation Planning and Coordination",
    shortDescription:
      "Method statement drafting, heavy lift engineering studies, logistics scheduling, and resource allocation models.",
    fullDescription:
      "Flawless field execution begins with rigorous advance planning. Our engineering team prepares detailed installation method statements (IMS), heavy transport route feasibility assessments, crane selection simulations, and synchronized delivery schedules to minimize demurrage and component dwell times.",
    scopeOfWork: [
      "Development of comprehensive Installation Method Statements and Risk Assessments (RAMS)",
      "Crane capacity calculations, boom configuration studies, and ground-bearing pressure modeling",
      "Logistics synchronization matching blade/tower delivery sequences with crane mobility",
      "Resource allocation matrix covering certified riggers, technicians, and specialized tooling",
      "Contingency planning for adverse weather windows and transport bottlenecks",
    ],
    executionApproach: [
      "Digital 3D CAD lift simulation and site layout clearance modeling",
      "Collaborative scheduling sessions with developers, OEMs, and transport carriers",
      "Milestone-based progress baselining using modern project controls",
    ],
    keyConsiderations: [
      "Seasonal weather patterns and monsoon/cyclone window avoidance",
      "Crane mobilization and demobilization lead times",
      "Local road turning radii and bridge load capacity clearances",
    ],
    image: "/images/blade-transport.jpg",
    iconName: "Calendar",
    tag: "Engineering & Logistics",
  },
  {
    id: "wind-energy-infrastructure-support",
    slug: "wind-energy-infrastructure-support",
    title: "Wind Energy Infrastructure Support",
    shortDescription:
      "Site civil interface, foundation bolt cage inspection, hardstand readiness checks, and internal electrical balance of plant support.",
    fullDescription:
      "A successful wind installation rests on dependable infrastructure. We offer specialized interface support spanning foundation anchor cage bolt verification, crane hardstand compaction testing, internal road accessibility checks, and coordination with electrical balance-of-plant (BOP) contractors.",
    scopeOfWork: [
      "Foundation anchor bolt template positioning, leveling, and projection verification",
      "Crane hardstand load-bearing capacity assessment and plate load test witnessing",
      "Site internal roadway turning radiuses, gradient checks, and drainage reviews",
      "Underground collector cable trench interface and transition joint coordination",
      "Temporary site power and staging yard infrastructure setup support",
    ],
    executionApproach: [
      "Standardized pre-pour and post-pour foundation audit checklists",
      "Laser and optical leveling for anchor bolt ring flatness tolerances",
      "Cross-functional coordination with civil contractors before heavy crane arrival",
    ],
    keyConsiderations: [
      "Grout curing times and compressive strength verification before tower placement",
      "Erosion control and drainage along mountainous or rural access ways",
      "Foundation grounding ring resistance measurements",
    ],
    image: "/images/grid-substation.jpg",
    iconName: "Zap",
    tag: "Balance of Plant Interface",
  },
  {
    id: "project-specific-engineering-support",
    slug: "project-specific-engineering-support",
    title: "Project-Specific Engineering Support",
    shortDescription:
      "Tailored technical troubleshooting, repowering assessment, specialized tooling sourcing, and retrofitting assistance.",
    fullDescription:
      "Every wind farm presents unique geographical and mechanical variables. We provide custom engineering problem-solving for challenging terrains, non-standard component retrofits, legacy turbine repowering assessments, specialized rigging fixtures, and post-installation technical evaluations.",
    scopeOfWork: [
      "Technical root-cause troubleshooting for mechanical assembly misalignments",
      "Custom rigging beam and spreader bar design assistance for non-standard lifts",
      "Repowering feasibility and dismantling coordination for aging wind assets",
      "Torque audit programs, bolt stretch verification, and ultrasonic bolt inspection support",
      "End-of-warranty inspection preparation and punch-list technical remediation",
    ],
    executionApproach: [
      "Deployment of senior wind turbine mechanical engineers to resolve on-site anomalies",
      "Direct technical consultation with component manufacturers and structural analysts",
      "Documented technical reporting with actionable engineering solutions",
    ],
    keyConsiderations: [
      "Preservation of OEM warranties during custom technical procedures",
      "Site-specific wind shear, turbulence, and elevation effects",
      "Rapid turnaround time to minimize standby crane costs",
    ],
    image: "/images/wind-sunset.jpg",
    iconName: "Compass",
    tag: "Technical Advisory & Custom Solutions",
  },
];
