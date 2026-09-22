type HeadingProps = {
  title: string;
};

const Heading = (data: HeadingProps) => {
  return (
    <div className="flex flex-row items-center w-full">
      <span className="rotate-90 h-1 w-8 bg-primary-foreground" />
      <h2 className="font-bold text-2xl capitalize whitespace-nowrap">
        {data.title}
      </h2>
    </div>
  );
};

export default Heading;
