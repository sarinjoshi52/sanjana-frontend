const serviceCardContent = [
  {
    id: 1,
    title: "Result Focus",
    description:
      "Producing outcome and creating sustainable developmental impact.",
  },
  {
    id: 2,
    title: "Excellence",
    description:
      "Pursuing and advocating high-quality standards in all outputs.",
  },
  {
    id: 3,
    title: "Client Satisfaction",
    description: "Delivering responsive, desired, and deserving services.",
  },
  {
    id: 4,
    title: "Change Orientation",
    description: "Preparing and innovating solutions for evolving challenges.",
  },
  {
    id: 5,
    title: "Values Driven",
    description: "Promoting and practicing core developmental values.",
  },
  {
    id: 6,
    title: "Sustainable Capability",
    description:
      "Developing individual and organizational capability sustainably.",
  },
];

export default function ServicePrinciple() {
  return (
    <section
      id="service-principles"
      data-aos="fade-up"
      className="flex flex-col items-start gap-8 bg-primary px-5 py-12 sm:py-15 md:gap-10 lg:flex-row lg:px-[5%] xl:px-[10%]"
    >
      <h2 className="w-full text-secondary! tracking-wide! lg:w-[40%]">
        Guiding our commitment to high-quality knowledge services.
      </h2>

      <div className="grid min-w-0 flex-1 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {serviceCardContent.map((item) => (
          <div key={item.id} className="flex flex-col gap-3">
            <h3 className="text-light-green font-bold">{item.title}</h3>
            <p className="text-white text-[15px] font-outfit">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
