export type CaseStudyHighlight = {
  text: string;
  emphasized?: boolean;
};

export type CaseStudyArticle = {
  intro: string[];
  highlights: CaseStudyHighlight[];
  conclusion: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  cardTeaser: string;
  subheadings: string[];
  summary: string;
  article: CaseStudyArticle;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "uk-wealth-advisory-saudi",
    title: "Wealth advisory expansion into the Kingdom",
    image:
      "https://images.pexels.com/photos/5668886/pexels-photo-5668886.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Professional financial advisory meeting",
    cardTeaser: "Blueprint locked before legal spend. One pathway, no guesswork.",
    subheadings: [
      "Designed licence mapping assumptions",
      "Governance alignment",
      "Sequencing roadmap",
      "Counsel brief pack",
      "Outcome: Blueprint approved before legal submission"
    ],
    summary:
      "We designed licensing structure, entity setup and sequencing for a UK wealth advisory firm entering Saudi Arabia. The plan was locked before legal spend began.",
    article: {
      intro: [
        "A UK-regulated wealth advisory firm wanted to expand into Saudi Arabia. The challenge: align licensing assumptions, governance and sequencing before briefing external counsel."
      ],
      highlights: [
        { text: "Designed licence mapping assumptions", emphasized: true },
        { text: "Governance alignment with supervisory expectations" },
        { text: "Sequencing roadmap for entity setup and submission" },
        {
          text: "Blueprint approved before legal submission — no guesswork.",
          emphasized: true
        }
      ],
      conclusion:
        "The client went to legal counsel with a single, agreed blueprint. Licensing pathway and governance structure were defined up front, reducing risk and cost."
    }
  },
  {
    slug: "uk-fintech-uae",
    title: "Fintech in DIFC: clarity before counsel",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Fintech digital innovation workspace",
    cardTeaser: "Regulator pathway defined before briefing counsel.",
    subheadings: [
      "Activity mapping to DFSA categories",
      "Controlled function design",
      "Structured engagement plan",
      "Outcome: Clear regulator pathway defined pre-legal"
    ],
    summary:
      "Activity mapping, controlled function design and regulator pathway for a UK fintech entering DIFC.",
    article: {
      intro: [
        "A UK fintech needed clarity on DFSA activity categories and controlled functions before committing to a UAE licence."
      ],
      highlights: [
        {
          text: "Activity mapping to DFSA categories — no ambiguity.",
          emphasized: true
        },
        { text: "Controlled function design and fit" },
        { text: "Structured engagement plan with local counsel" },
        {
          text: "Clear regulator pathway defined pre-legal.",
          emphasized: true
        }
      ],
      conclusion:
        "The client had a defined regulator pathway before briefing lawyers. Execution followed a single blueprint."
    }
  },
  {
    slug: "cross-border-governance-uplift",
    title: "Governance uplift ahead of submission",
    image:
      "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
    imageAlt: "Team collaboration on governance structure",
    cardTeaser: "Internal readiness in place before the regulator call.",
    subheadings: [
      "Operating model design",
      "Compliance structure",
      "Risk register",
      "Outcome: Internal readiness improved before submission"
    ],
    summary:
      "Operating model, compliance structure and risk register to improve readiness ahead of GCC submission.",
    article: {
      intro: [
        "A UK firm with GCC ambitions needed to strengthen internal governance before submission. We designed operating model, compliance structure and risk register."
      ],
      highlights: [
        { text: "Operating model design aligned to target jurisdiction" },
        {
          text: "Internal readiness improved before submission — no surprises.",
          emphasized: true
        },
        { text: "Compliance structure and risk register" },
        { text: "Governance gap closure ahead of regulator engagement" }
      ],
      conclusion:
        "The firm entered GCC engagement with clear internal readiness. Regulator expectations were mapped and addressed before submission."
    }
  }
];

export const CASE_STUDY_SLUGS = CASE_STUDIES.map((c) => c.slug);

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}

export function getOtherCaseStudies(currentSlug: string): CaseStudy[] {
  return CASE_STUDIES.filter((c) => c.slug !== currentSlug);
}
