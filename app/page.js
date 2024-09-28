"use client";
import Card from "../components/card";
import { useEffect, useState } from "react";
import logo from "../public/logo_MrCoffe.png";
import Image from "next/image";

export default function Home(Component) {
  const [categoie, setCategoie] = useState();
  const [splash, setSplash] = useState(false);
  useEffect(() => {
    setSplash(true);
    setTimeout(() => {
      setSplash(false);
    }, 5000);
    if (categoie === undefined) {
      setCategoie("hotDrink");
    }
  }, [""]);
  return (
    <div className="h-screen ">
      {splash === false ? (
        <>
          <div className="flex gap-4 my-4 w-full justify-center xs:px-4 fixed z-10 top-16 shadow-xl bg-primaryColor py-4">
            <a href="#">
              <div
                onClick={() => setCategoie("hotDrink")}
                className={`${
                  categoie === "hotDrink"
                    ? "bg-secondryColor rounded text-white		"
                    : "bg-primaryColor"
                }  text-lg	 xs:text-sm lg:text-lg p-2 md:text-lg sm:text-lg  shadow-xl shadow-black	 cursor-pointer`}
              >
                مشروبات ساخنة
              </div>
            </a>
            <a href="#">
              <div
                onClick={() => setCategoie("iceDrink")}
                className={`${
                  categoie === "iceDrink"
                    ? "bg-secondryColor text-white"
                    : "bg-primaryColor"
                }  text-black shadow-xl xs:text-sm	lg:text-lg  md:text-lg sm:text-lg text-lg p-2 rounded  cursor-pointer`}
              >
                مشروبات باردة
              </div>
            </a>
            <a href="#">
              <div
                onClick={() => setCategoie("candies")}
                className={`${
                  categoie === "candies"
                    ? "bg-secondryColor text-white"
                    : "bg-primaryColor"
                } text-black shadow-xl xs:text-sm lg:text-lg md:text-lg sm:text-lg	 text-lg p-2 rounded  cursor-pointer`}
              >
                حلويات
              </div>
            </a>
          </div>
          <Card categorie={categoie} />
        </>
      ) : (
        <div className="h-screen w-full bg-primaryColor absolute z-50 top-0">
          <div className="flex items-center justify-center my-52">
            <Image src={logo} alt="dd" className="animate-bounce xs:w-40 xs:h-40 md:w-60 md:h-60 lg:w-60 lg:h-60" />
          </div>
        </div>
      )}
    </div>
  );
}
