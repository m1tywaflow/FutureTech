export type RoadmapStatus = "done" | "progress" | "planned" | "future";

export interface RoadmapItem {
  phase: string;
  title: string;
  status: RoadmapStatus;
  description: string;
  items: string[];
}

export const roadmap: RoadmapItem[] = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "done",
    description: "Base setup and core pages",
    items: [
      "Vite + TypeScript setup",
      "Routing & layout",
      "Responsive UI",
      "Core pages implementation",
    ],
  },
  {
    phase: "Phase 2",
    title: "Enhancement",
    status: "progress",
    description: "Improving UX and performance",
    items: [
      "Animations & transitions",
      "UI/UX improvements",
      "Performance optimizations",
    ],
  },
  {
    phase: "Phase 3",
    title: "Expansion",
    status: "planned",
    description: "New features and integrations",
    items: [
      "Blog system",
      "API / CMS integration",
      "Authentication",
    ],
  },
  {
    phase: "Phase 4",
    title: "Future Vision",
    status: "future",
    description: "Advanced and experimental features",
    items: [
      "AI-powered features",
      "Backend services",
      "User dashboard",
    ],
  },
];
