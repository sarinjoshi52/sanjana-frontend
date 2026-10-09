import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

const menuItem = [
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

const projects = [
  {
    organization: "Norvic International Hospital",
    title: "Review and Calibration of Employee Appraisals (2018/19)",
    description:
      "Covered comprehensive review and calibration of appraisal forms based on consistency, objectivity, and policy compliance. Designed results-based appraisal templates and recommended criteria for rating calibration.",
    workDone: [
      "Norvic revised its Employee Appraisal practices in line with recommendations.",
    ],
  },
  {
    organization: "F1Soft International Pvt. Ltd.",
    title: "Diagnosis of Leadership Roles and Competencies",
    description:
      "Mapped critical executive leadership roles, identified key competency requirements, and designed a targeted leadership enrichment program for top executives.",
    workDone: [
      "F1Soft initiated program execution based on diagnostic assessment outputs.",
    ],
  },
  {
    organization: "Norvic International Hospital",
    title: "Organizational Diagnostic Assessment",
    description:
      "ssessed 4 structural dimensions: Strategy & Structure, Management Systems, Human Resource Systems, and Employee Perception via FGDs and KIIs to identify major change requirements.",
    workDone: ["Systems redesign initiated following assessment."],
  },
  {
    organization: "Bharosa Hospital Pvt. Ltd.",
    title: "Performance Frameworks for Front Desk & Nursing Units",
    description:
      "Designed key result areas, job descriptions, competency standards, and implementation guidelines for front desk and nursing unit staff.",
    workDone: [],
  },
  {
    organization: "Sana Kisan Development Bank",
    title: "Management Development Programs",
    description:
      "Customized management and leadership development interventions tailored for middle and senior level operational managers.",
    workDone: [],
  },
];

export default function Projects() {
  return (
    <main data-aos="fade-in" className="flex flex-col gap-5 px-5 lg:px-30">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">
          Projects & Engagements
        </h1>
        <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0 lg:items-center">
          <span className="text-xs text-muted-foreground">
            Delivering evidence-based knowledge solutions across diverse
            healthcare, corporate, and financial institutions.
          </span>
          <Tabs defaultValue="completed">
            <TabsList className="bg-transparent space-x-2 ">
              {menuItem.map((item, index) => (
                <TabsTrigger
                  value={item.name}
                  key={index}
                  className="bg-muted capitalize cursor-pointer text-xs text-muted-foreground hover:text-muted-foreground data-active:bg-black data-active:text-white data-active:hover:text-white"
                >
                  {item.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
        <Separator />
      </div>
      <div className="flex flex-col gap-5">
        {projects.map((project, index) => (
          <Card
            className="rounded-md shadow-none hover:shadow-md border-[#E2E8F0] border flex flex-col gap-5"
            key={index}
          >
            <CardHeader className="flex lg:flex-row flex-col gap-3 lg:gap-0 justify-between lg:items-center">
              <h3 className="font-bold text-lg">{project.title}</h3>
              <span className="px-5 py-1 text-xs w-full lg:w-fit font-bold rounded-sm bg-[#F1FDFA] border border-[#9AF6E5] text-primary-foreground">
                {project.organization}
              </span>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <p className="text-muted-foreground text-xs">
                {project.description}
              </p>

              {project.workDone.map((work, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-primary-foreground" />
                  <p className="text-primary-foreground font-bold text-xs">
                    {work}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
