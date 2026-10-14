export type ProjectStatus = "COMPLETED" | "ONGOING" | "UPCOMING";

export type Project = {
  id: string;
  status: ProjectStatus;
  organization: string;
  title: string;
  description: string;
  workDone: string[];
};

export const projects: Project[] = [
  {
    id: "abc1",
    status: "COMPLETED",
    organization: "Norvic International Hospital",
    title: "Review and Calibration of Employee Appraisals (2018/19)",
    description:
      "Covered comprehensive review and calibration of appraisal forms based on consistency, objectivity, and policy compliance. Designed results-based appraisal templates and recommended criteria for rating calibration.",
    workDone: [
      "Norvic revised its Employee Appraisal practices in line with recommendations.",
    ],
  },
  {
    id: "abc2",
    status: "COMPLETED",
    organization: "F1Soft International Pvt. Ltd.",
    title: "Diagnosis of Leadership Roles and Competencies",
    description:
      "Mapped critical executive leadership roles, identified key competency requirements, and designed a targeted leadership enrichment program for top executives.",
    workDone: [
      "F1Soft initiated program execution based on diagnostic assessment outputs.",
    ],
  },
  {
    id: "abc3",
    status: "COMPLETED",
    organization: "Norvic International Hospital",
    title: "Organizational Diagnostic Assessment",
    description:
      "ssessed 4 structural dimensions: Strategy & Structure, Management Systems, Human Resource Systems, and Employee Perception via FGDs and KIIs to identify major change requirements.",
    workDone: ["Systems redesign initiated following assessment."],
  },
  {
    id: "abc4",
    status: "ONGOING",
    organization: "Bharosa Hospital Pvt. Ltd.",
    title: "Performance Frameworks for Front Desk & Nursing Units",
    description:
      "Designed key result areas, job descriptions, competency standards, and implementation guidelines for front desk and nursing unit staff.",
    workDone: [],
  },
  {
    id: "abc5",
    status: "UPCOMING",
    organization: "Sana Kisan Development Bank",
    title: "Management Development Programs",
    description:
      "Customized management and leadership development interventions tailored for middle and senior level operational managers.",
    workDone: [],
  },
];

export const menuItem = [
  {
    name: "completed",
    link: "/completed-project",
  },
  {
    name: "ongoing",
    link: "/ongoing-project",
  },
  {
    name: "upcoming",
    link: "upcoming-project",
  },
];
