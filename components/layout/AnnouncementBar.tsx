import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const AnnouncementBar = () => {
  return (
    <div className="bg-primary w-full py-2 px-10 lg:px-20 h-fit">
      <div className="flex md:flex-row md:justify-between justify-center items-center flex-col text-white text-xs">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-5 items-center text-center sm:text-left">
          <div className="flex flex-row items-center gap-2">
            <FaLocationDot className="text-secondary text-sm" />
            <p className="text-muted">
              Devtec House, 87 Nachghar Galli, Jyatha, Kathmandu
            </p>
          </div>
          <a
            href="mailto:info@sanjana.com.np"
            className="group flex flex-row items-center gap-2"
          >
            <IoMail className="text-secondary text-sm " />
            <p className="text-muted group-hover:text-secondary transition-color duration-300">
              info@sanjñana.com.np
            </p>
          </a>
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-1 items-center mt-1 md:mt-0">
          <span className="text-muted italic">
            संज्ञाना : संस्था ज्ञान नेतृत्वको सेवामा
          </span>
          <FaFacebookF aria-label="Facebook" role="img" className="text-muted hover:text-secondary cursor-pointer" />
          <FaLinkedinIn aria-label="LinkedIn" role="img" className="text-muted hover:text-secondary cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
