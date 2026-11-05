export const cardData = [
  {
    slug: "competency_development",
    name: "cod",
    title: "Competency Development",
    description:
      "Focuses on managerial learning, leadership development, and knowledge processes for performance enhancement, personal growth, and institution building through customized workshops, coaching, and evaluation.",
    cta: "Short & Staggered Programs",
    bgcolor: "#F0F6FF",
    color: "#1C4966",
  },
  {
    slug: "professional_development",
    name: "prd",
    title: "Professional Development",
    description:
      "Hybrid programs combining education and training for functional domains (150+ contact hours). Offers Professional Certificates and Diplomas in collaboration with accredited institutions.",
    cta: "Certificates & Diplomas",
    bgcolor: "#F1FDFA",
    color: "#2B9D8F",
  },
  {
    slug: "organization_development",
    name: "ord",
    title: "Organization Development",
    description:
      "Diagnostic assessments and tailored interventions to correct dysfunctionalities, renew operational systems, and improve organizational frameworks across public and corporate sectors.",
    cta: "Diagnostic Assessments",
    bgcolor: "#FFFBEB",
    color: "#F4A261",
  },
  {
    slug: "advisory_services",
    name: "ads",
    title: "Advisory Services",
    description:
      "Business, governance, and management consulting for strategic optimization, operational retainership, and overall institutional efficiency.",
    cta: "Strategic Consulting",
    bgcolor: "#FAF5FF",
    color: "#9334EB",
  },
  {
    slug: "analytical_services",
    name: "ans",
    title: "Analytical Services",
    description:
      "Applied, policy, and action research using advanced methodologies to validate, generate, and enrich evidence-based policy inputs and strategic decisions.",
    cta: "Action & Policy Research",
    bgcolor: "#F1FDFA",
    color: "#2B9D8F",
  },
  {
    slug: "information_services",
    name: "ins",
    title: "Information Services",
    description:
      "Specialized documentation, publications, forums, and knowledge dissemination platforms designed to preserve institutional memory and inform public/corporate discourses.",
    cta: "Publications & Forums",
    bgcolor: "#FFF2F2",
    color: "#E11D48",
  },
];

export type ServiceDetail = {
  summary: string;
  overview: string;
  offerings: string[];
  howWeWork: string[];
};

export const serviceDetails: Record<string, ServiceDetail> = {
  competency_development: {
    summary:
      "Focuses on managerial learning, leadership development, and knowledge processes for performance enhancement, personal growth, and institution building.",
    overview:
      "Short and staggered programs build the competencies people need to perform, through customized workshops, coaching, and evaluation tailored to the institution.",
    offerings: [
      "Customized workshops",
      "Leadership coaching",
      "Learning needs assessment",
      "Program evaluation",
    ],
    howWeWork: [
      "Assess current competencies and learning needs",
      "Design customized workshops and coaching",
      "Deliver programs in short, staggered formats",
      "Evaluate results and follow up",
    ],
  },
  professional_development: {
    summary:
      "Hybrid programs combining education and training for functional domains, offered with accredited institutions.",
    overview:
      "Programs of 150+ contact hours blend education and training for functional domains, leading to Professional Certificates and Diplomas in collaboration with accredited institutions.",
    offerings: [
      "Professional certificates",
      "Diploma programs",
      "Functional domain training",
      "Accredited partnerships",
    ],
    howWeWork: [
      "Identify functional domain requirements",
      "Co-design curricula with accredited partners",
      "Deliver hybrid education and training",
      "Assess learners and award credentials",
    ],
  },
  organization_development: {
    summary:
      "Diagnostic assessments and tailored interventions to renew operational systems and organizational frameworks.",
    overview:
      "We diagnose dysfunctionalities and design tailored interventions that renew operational systems and improve organizational frameworks across public and corporate sectors.",
    offerings: [
      "Organizational diagnostic assessment",
      "Systems and process renewal",
      "Structure and role design",
      "Change interventions",
    ],
    howWeWork: [
      "Diagnose organizational strengths and gaps",
      "Design tailored interventions",
      "Support implementation with the institution",
      "Review outcomes and sustain change",
    ],
  },
  advisory_services: {
    summary:
      "Business, governance, and management consulting for strategic optimization and institutional efficiency.",
    overview:
      "We provide business, governance, and management consulting for strategic optimization, operational retainership, and overall institutional efficiency.",
    offerings: [
      "Strategic consulting",
      "Governance advisory",
      "Management consulting",
      "Operational retainership",
    ],
    howWeWork: [
      "Understand institutional goals and context",
      "Analyze strategic and operational options",
      "Recommend and plan priority actions",
      "Provide ongoing advisory support",
    ],
  },
  analytical_services: {
    summary:
      "Applied, policy, and action research that generates evidence for strategic decisions.",
    overview:
      "We use advanced methodologies to validate, generate, and enrich evidence-based policy inputs and strategic decisions through applied, policy, and action research.",
    offerings: [
      "Applied research",
      "Policy research",
      "Action research",
      "Evidence-based policy inputs",
    ],
    howWeWork: [
      "Define research questions and scope",
      "Design methodology and collect data",
      "Analyze findings rigorously",
      "Report insights and recommendations",
    ],
  },
  information_services: {
    summary:
      "Documentation, publications, and forums that preserve institutional memory and inform discourse.",
    overview:
      "Specialized documentation, publications, forums, and knowledge dissemination platforms preserve institutional memory and inform public and corporate discourse.",
    offerings: [
      "Documentation",
      "Publications",
      "Forums and dialogues",
      "Knowledge dissemination",
    ],
    howWeWork: [
      "Capture institutional knowledge and experience",
      "Document and edit for clarity",
      "Publish through suitable platforms",
      "Convene forums to share and discuss",
    ],
  },
};
