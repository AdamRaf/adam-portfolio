export interface ProjectExperience {
  systemName: string;
  description: string;
  highlights: string[];
}

export const experienceData: ProjectExperience[] = [
  {
    systemName: "Server-Driven UI (SDUI) Survey Architecture",
    description: "Architected and engineered a dynamic, programmatic interface engine designed to decouple layout rendering from frontend code deployments, streamlining remote form management at enterprise scale.",
    highlights: [
      "Engineered a Frontend Engine that programmatically generates complex survey & checklist UIs directly from backend JSON configurations.",
      "Eliminated massive amounts of manual frontend updates by shifting structural changes entirely to backend-driven payloads.",
      "Successfully refactored rigid, legacy survey logic into a highly modular, maintainable component library.",
    ],
  },
  {
    systemName: "Steganography-Based Secure Data Transfer",
    description: "Designed and developed a low-level cryptographic data transfer solution optimizing local proximity communications without relying on external network dependencies.",
    highlights: [
      "Developed a custom steganography system utilizing bitwise operations to embed encrypted data payloads directly within image assets.",
      "Facilitated highly secure offline cross-device data validation via Bluetooth transmission protocols.",
      "Designed defensive UI/UX architectures with robust client-side error handling to ensure absolute data integrity during packet transfer.",
    ],
  },
  {
    systemName: "Real-Time Enterprise Logistics & Workflow Automation",
    description: "Built high-precision internal tools and automated automation systems to optimize mobile operations and enforce strict corporate compliance.",
    highlights: [
      "Implemented a sub-meter precision Geofencing system bound to real-time activation rules for automated enterprise attendance tracking.",
      "Streamlined contract management workflows by building an advanced PDF viewer with native zoom, pan, and cache-backed temporary storage.",
      "Automated cross-app data synchronization via an encoded QR framework, slashing manual input error rates.",
      "Integrated the YouTube IFrame API with custom completion tracking to enforce mandatory compliance workflows.",
    ],
  },
  {
    systemName: "Enterprise Integration & Core Migrations",
    description: "Facilitated major backend and framework modernization overhauls, bridging frontend clients with massive data layers and modern middleware interfaces.",
    highlights: [
      "Integrated frontend web interfaces with robust backend ecosystems and Odoo API infrastructures.",
      "Migrated legacy enterprise codebases smoothly using Abstract Syntax Tree (AST) automated transformation tooling.",
    ],
  }
];