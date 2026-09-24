import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const AnnouncementBar = () => {
  return (
    <div className="bg-primary w-full py-2 px-10 lg:px-20 h-[45px] md:h-[32px]">
      <div className="flex md:flex-row md:justify-between justify-center items-center flex-col text-white text-xs">
        <div className="flex flex-row gap-5 items-center">
          <div className="flex flex-row items-center gap-2">
            <FaLocationDot className="text-secondary text-sm" />
            <p className="text-muted">
              Devtec House, 87 Nachghar Galli, Jyatha, Kathmandu
            </p>
          </div>
          <div className="hidden sm:flex flex-row items-center gap-2">
            <IoMail className="text-secondary text-sm" />
            <p className="text-muted">info@sanjñana.com.np</p>
          </div>
        </div>
        <div className="flex flex-row gap-5 items-center">
          <span className="text-muted italic">
            संज्ञाना : संस्था ज्ञान नेतृत्वको सेवामा
          </span>
          <FaFacebookF className="text-muted hover:text-secondary cursor-pointer" />
          <FaLinkedinIn className="text-muted hover:text-secondary  cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
