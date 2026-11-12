import { Check } from "lucide-react";

const list = [
  {
    id: 1,
    content:
      "Strong governance and leadership from accomplished practitioners.",
  },
  {
    id: 2,
    content: "Skilled core team with practical and academic excellence.",
  },
  {
    id: 3,
    content: "Robust technological infrastructure & knowledge support systems.",
  },
  {
    id: 4,
    content: "Vast network of associate subject specialists and experts",
  },
];

export default function CoreResources() {
  return (
    <section
      id="core-resources"
      data-aos="fade-up"
      className="flex flex-col px-5 gap-5 sm:px-5 lg:px-[5%] xl:px-[10%] py-15 "
    >
      <h2>Our Core Resources</h2>
      <div className="flex flex-col gap-5 md:flex-row">
        <article className="flex w-full min-w-0 flex-col gap-2 font-outfit md:w-1/2">
          <p className="text-lg ">
            What distinguishes SañJñāNā is the wealth of knowledge resources it
            embodies, stemming from the expertise and experience of its core
            professionals and associates across diverse operational sectors.
          </p>
          <ul className="flex flex-col gap-5">
            {list.map((item) => (
              <li key={item.id} className="flex flex-row items-center gap-3">
                <span className="mr-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E3F4EC] p-1">
                  <Check
                    aria-hidden="true"
                    className="h-4 w-4 text-light-green"
                    strokeWidth={3}
                  />
                </span>
                <span>{item.content}</span>
              </li>
            ))}
          </ul>
        </article>

        <div className="min-h-64 w-full min-w-0 rounded-3xl border border-dashed border-light-green/50 bg-light-green/5 md:min-h-[420px] md:w-1/2" />
      </div>
    </section>
  );
}
