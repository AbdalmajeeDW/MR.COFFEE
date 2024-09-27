"use client";
import logo from "../public/logo_MrCoffe.png";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { usePathname, useSearchParams } from 'next/navigation'


export default function Header() {
  const [drower, setDrower] = useState(false);
  const pathname = usePathname()
  useEffect(() => {
    console.log(pathname);
  
  });
  return (
    <div>
      <header className="px-10 bg-primaryColor   top-0 flex  fixed z-30 flex-row items-center justify-between xs:px-4  w-full  p-2">
        <div>
          <a
            href="/"
            className="flex items-center px-4  text-white hover:opacity-90"
          >
            <Image
              className="lg:w-20 lg:h-20 xs:w-16 xs:h-16 shadow-white"
              src={logo}
              alt="d"
            />
          </a>
        </div>

        <nav className="lg:flex md:flex sm:flex items-center  xs:hidden  gap-10   px-5">
          <a
            href="/"
            className={`${pathname === '/' ? 'bg-secondryColor rounded text-white':'bg-primaryColor'}  text-black text-lg  xs:p-1 lg:p-2 bg-orange-900 hover:text-black  rounded  xs:text-xs lg:text-xl md:text-xl sm:text-xl`}
          >
            القائمة
          </a>
          <a
            href="/about"
            className={`${pathname === '/about' ? 'bg-secondryColor p-2 rounded text-white':'bg-primaryColor text-black'} text-lg hover:text-orange-950 xs:text-xs lg:text-xl md:text-xl sm:text-xl`}
          >
            معلومات عنا
          </a>
          <a
            href="#"
            className="text-black  hover:text-orange-950 xs:text-xs lg:text-xl md:text-xl sm:text-xl"
          >
            اتصل بنا
          </a>
        </nav>
        <div
          onClick={() => setDrower(!drower)}
          className="px-10 xs:flex sm:hidden lg:hidden md:hidden"
        >
          <AiOutlineAlignRight className="w-6 h-6 hover:text-gray-500 cursor-pointer" />
        </div>
      </header>
      {drower && (
        <div className="xs:flex flex-col sm:hidden lg:hidden md:hidden h-full w-40 fixed z-20 top-0  shadow-xl right-0 bg-primaryColor  ">
          <div className=" fixed top-28">
            <nav className="lg:flex md:flex sm:flex  xs:flex xs:flex-col  gap-10 flex-1 items-start	  px-5">
              <a
                href="#"
                className="text-black text-lg  xs:p-1 lg:p-2 bg-orange-900 hover:text-black  rounded  xs:text-xl lg:text-xl md:text-xl "
              >
                القائمة
              </a>
              <a
                href="#"
                className="text-black text-lg hover:text-orange-950 xs:text-xl lg:text-xl md:text-xl sm:text-xl"
              >
                معلومات عنا
              </a>
              <a
                href="#"
                className="text-black  hover:text-orange-950 xs:text-xl lg:text-xl md:text-xl sm:text-3xl"
              >
                اتصل بنا
              </a>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
