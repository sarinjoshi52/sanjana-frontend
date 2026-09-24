import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

const cardData = [
  {
    name: "cod",
    title: "Competency Development",
    description:
      "Focuses on managerial learning, leadership development, and knowledge processes for performance enhancement, personal growth, and institution building through customized workshops, coaching, and evaluation.",
    cta: "Short & Staggered Programs",
    bgcolor: "#F0F6FF",
    color: "#1C4966",
  },
  {
    name: "prd",
    title: "Professional Development",
    description:
      "Hybrid programs combining education and training for functional domains (150+ contact hours). Offers Professional Certificates and Diplomas in collaboration with accredited institutions.",
    cta: "Certificates & Diplomas",
    bgcolor: "#F1FDFA",
    color: "#2B9D8F",
  },
  {
    name: "ord",
    title: "Organization Development",
    description:
      "Diagnostic assessments and tailored interventions to correct dysfunctionalities, renew operational systems, and improve organizational frameworks across public and corporate sectors.",
    cta: "Diagnostic Assessments",
    bgcolor: "#FFFBEB",
    color: "#F4A261",
  },
  {
    name: "ads",
    title: "Advisory Services",
    description:
      "Business, governance, and management consulting for strategic optimization, operational retainership, and overall institutional efficiency.",
    cta: "Strategic Consulting",
    bgcolor: "#FAF5FF",
    color: "#9334EB",
  },
  {
    name: "ans",
    title: "Analytical Services",
    description:
      "Applied, policy, and action research using advanced methodologies to validate, generate, and enrich evidence-based policy inputs and strategic decisions.",
    cta: "Action & Policy Research",
    bgcolor: "#F1FDFA",
    color: "#2B9D8F",
  },
  {
    name: "ins",
    title: "Information Services",
    description:
      "Specialized documentation, publications, forums, and knowledge dissemination platforms designed to preserve institutional memory and inform public/corporate discourses.",
    cta: "Publications & Forums",
    bgcolor: "#FFF2F2",
    color: "#E11D48",
  },
];

export default function Knowledge() {
  return (
    <main
      data-aos="fade-in"
      id="knowledge"
      className="flex flex-col gap-10 justify-center"
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-3xl">Knowledge Services</h1>
        <p className="text-center text-sm text-[#475569] lg:w-1/2 px-5 lg:px-0">
          Serving with knowledge — generating, refining, and applying insights
          to enrich individual and organizational performance across six
          specialized pillars.
        </p>
      </div>

      <div className="flex flex-col px-5 lg:px-0 lg:flex-wrap items-center justify-center gap-7">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="rounded-lg hover:shadow-md shadow-none transition-shadow duration-200 border-muted border lg:w-[27%] h-65 lg:h-70 flex flex-col gap-3"
          >
            <CardHeader>
              <div
                className={`flex items-center justify-center p-5 w-12 h-12 rounded-lg`}
                style={{ backgroundColor: `${card.bgcolor}` }}
              >
                <span
                  className={`uppercase font-bold text-xl`}
                  style={{ color: `${card.color}` }}
                >
                  {card.name}
                </span>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              <h2 className="text-lg font-bold">{card.title}</h2>
              <p className="text-xs text-muted-foreground leading-5">
                {card.description}
              </p>
            </CardContent>

            <div className="flex flex-col gap-5 mt-auto">
              <Separator className="w-[80%]! mx-auto bg-[#F1F5F9]" />

              <CardFooter className=" flex justify-between">
                <span className="text-primary-foreground text-xs font-bold">
                  {card.cta}
                </span>
                <ArrowRight className="w-4 h-4 text-primary-foreground" />
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
