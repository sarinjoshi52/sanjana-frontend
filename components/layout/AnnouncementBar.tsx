import { FaFacebookF, FaLinkedinIn, FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

export default function AnnouncementBar() {
  return (
    <div className="flex flex-row items-center font-outfit font-light justify-between bg-primary w-full h-fit py-2 px-[10%] md:px-[15%]">
      <div className="flex gap-10">
        <div className="flex flex-row items-center gap-2">
          <FaLocationDot className="text-secondary text-xs" />
          <p className="text-muted text-xs">
            Devtec House, 87 Nachghar Galli, Jyatha, Kathmandu
          </p>
        </div>
        <a
          href="mailto:info@sanjana.com.np"
          className="group flex flex-row items-center gap-2"
        >
          <IoMail className="text-secondary text-xs " />
          <p className="text-muted group-hover:text-secondary transition-color duration-300 text-xs">
            info@sanjñana.com.np
          </p>
        </a>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-x-5 gap-y-1 items-center mt-1 md:mt-0">
        <span className="text-muted italic font-outfit text-xs">
          संज्ञाना : संस्था ज्ञान नेतृत्वको सेवामा
        </span>
        <FaFacebookF
          aria-label="Facebook"
          role="img"
          className="text-muted hover:text-secondary cursor-pointer text-xs"
        />
        <FaLinkedinIn
          aria-label="LinkedIn"
          role="img"
          className="text-muted hover:text-secondary cursor-pointer text-xs"
        />
      </div>
    </div>
  );
}
