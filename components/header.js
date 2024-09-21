import logo from "../public/logo_MrCoffe.png";
import Image from "next/image";
import { AiOutlineAlignRight } from "react-icons/ai";

export default function Header() {
  return (
    <header className="px-10 bg-orange-900 shadow backdrop-blur-sm z-10 flex flex-row items-center justify-between  w-full  p-2">
      <div>
        <a
          href="/"
          className="flex items-center px-4  text-white hover:opacity-90"
        >
          <Image className="lg:w-20 lg:h-20 xs:w-16 xs:h-16 shadow-white" src={logo} alt="d"/>
        </a>
      </div>

      <nav className="lg:flex md:flex sm:flex items-center  xs:hidden  gap-10   px-5">
        <a
          href="#"
          className="text-white text-lg  xs: p-1 lg:p-2 bg-orange-900 hover:text-black  rounded  xs:text-xs lg:text-xl "
        >
          القائمة
        </a>
        <a
          href="#"
          className="text-black text-lg hover:text-orange-950 xs:text-xs lg:text-xl"
        >
          معلومات عنا
        </a>
        <a
          href="#"
          className="text-black  hover:text-orange-950 xs:text-xs lg:text-xl"
        >
          اتصل بنا
        </a>
      </nav>
      <div className="px-10 xs:flex sm:hidden lg:hidden md:hidden">
        <AiOutlineAlignRight className="w-6 h-6 hover:text-gray-500" />
      </div>
    </header>
  );
}
