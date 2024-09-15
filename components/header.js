import logo from "../public/logo_MrCoffe.png";
import Image from "next/image";
import { AiOutlineAlignRight } from "react-icons/ai";

export default function Header() {
  return (
    <header className="absolute  backdrop-blur-sm z-10 flex flex-row items-center justify-between  w-full  p-2">
        <div>


      <a
        href="/"
        className="flex items-center px-4  text-white hover:opacity-90"
      >
        <Image className="lg:w-20 lg:h-20 xs:w-16 xs:h-16" src={logo} />
      </a>
        </div>

      <nav className="flex items-center   gap-16   px-5">
        <a href="#" className="text-white  xs: p-1 lg:p-2 bg-black hover:text-orange-800  rounded  xs:text-xs lg:text-xl ">
          Menu
        </a>
        <a href="#" className="text-black hover:text-orange-800 xs:text-xs lg:text-xl">
          About
        </a>
        <a href="#" className="text-black hover:text-orange-800 xs:text-xs lg:text-xl">
          Contact
        </a>
      </nav>
      {/* <div className="px-10 ">
        <AiOutlineAlignRight className="w-6 h-6 hover:text-gray-500" />
      </div> */}
    </header>
  );
}
