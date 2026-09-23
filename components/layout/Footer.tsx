const Footer = () => {
  return (
    <footer className="bg-primary px-30 py-10 flex flex-row ">
      <div className="flex flex-row flex-1">
        <div className="flex flex-col items-start gap-2">
          <h3 className="font-bold text-white text-xs">
            SañJñāNā Development Pvt. Ltd.
          </h3>
          <p className="text-[#94A3B8] text-xs w-2/3">
            Strengthening institutions, knowledge, and leadership through
            evidence-based knowledge services.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <span className="font-bold text-white text-xs">Quick Links</span>
          <ul className="text-xs text-[#94A3B8] space-y-1">
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Service overview</li>
            <li className="cursor-pointer">Featured Projects</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 text-xs">
        <span className="font-bold text-white">Institutional Links</span>
        <span className="text-[#94A3B8]">
          Devtec House, Jyatha, Kathmandu, Nepal
        </span>
        <span className="text-muted-foreground">
          © 2026 SañJñāNā Development. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
