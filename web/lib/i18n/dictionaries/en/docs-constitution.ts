import type { DocsConstitutionDict } from "../types";

/**
 * English reference dictionary for the docs constitution page. Copy moved
 * from `app/[locale]/docs/constitution/page.tsx`. Two JSX line-wrap
 * artifacts were normalized in the move (a missing space after the
 * `$CODEWHALE_HOME/constitution.json` code span, and a stray mid-sentence
 * space in the zh lead) — the only rendered-output deltas, called out in
 * the commit body.
 */
export const docsConstitution: DocsConstitutionDict = {
  metaTitle: "Constitution and /constitution · Codewhale Docs",
  metaDescription:
    "User-global constitution, repo-local law, project instructions, and runtime boundaries.",
  leadingClassName: "leading-relaxed",
  title: "Constitution and /constitution",
  titleSecondary: "宪法与 /constitution",
  overviewLead1:
    "Codewhale gives the agent an accountable address, then a legal system for context conflicts. ",
  overviewLead2:
    " is the primary personal constitution surface: guided setup stores structured user-global data in ",
  overviewLead3: " and renders it as model-facing prose. Repos can still add local law via ",
  overviewLead4:
    "; runtime policy separately encodes modes, approval, sandbox, cost, and tool boundaries.",
  layers: [
    [
      "User-global",
      "用户全局",
      "Use /constitution for standing personal law across projects. It is structured data rendered to prose, not a raw prompt editor.",
    ],
    [
      "Repo-local",
      "仓库本地",
      ".codewhale/constitution.json is optional project policy for protected invariants, branch rules, verification, and escalation.",
    ],
    [
      "Runtime",
      "运行时",
      "Constitution text may express preferences, but approval, sandbox, shell, network, trust, and MCP permissions remain enforced config.",
    ],
  ],
  closingLead:
    "Standard project instructions still live in AGENTS.md; memory and handoffs rank below constitutions and project instructions; the full base-prompt Markdown override is an expert escape hatch, not the normal setup path. See ",
  closingLinkLabel: "configuration docs",
  closingTail: ".",
  sourceNote: "Source document: docs/ARCHITECTURE.md · Update docs-map.ts when changing.",
};
