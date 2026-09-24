import { FaFolderOpen } from "react-icons/fa";
import { FaBoxArchive, FaNetworkWired } from "react-icons/fa6";

const data = [
  {
    icon: <FaFolderOpen />,
    title: "Industry Information",
  },
  {
    icon: <FaBoxArchive />,
    title: "Document Archives",
  },
  {
    icon: <FaNetworkWired />,
    title: "Network Publications",
  },
];

export default function KnowledgeBank() {
  return (
    <main
      data-aos="fade-in"
      className="min-h-[450px] px-5 lg:px-30 flex flex-col gap-5"
    >
      <h1 className="font-bold text-3xl tracking-tight">
        Knowledge Bank & Archives
      </h1>
      <div className="bg-white rounded-lg flex flex-col border gap-5 border-[#E2E8F0] p-5">
        <p className="text-sm text-muted-foreground">
          Our Knowledge Bank serves as an institutional memory repository
          featuring industry information, research data sets, manuals, and
          archived network publications.
        </p>
        <div className="flex flex-col lg:flex-wrap justify-center gap-5 items-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex bg-[#F9FAFC] items-center gap-2 w-full lg:w-[30%] rounded-md border border-muted p-5"
            >
              <span className="text-primary-foreground text-lg">
                {item.icon}
              </span>
              <span className="text-xs font-bold">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
