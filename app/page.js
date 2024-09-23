"use client";
import { Bs0Circle } from "react-icons/bs";
import Card from "../components/card";
import { useState } from "react";

export default function Home(Component) {
  const [categoie, setCategoie] = useState();

  return (
    <div className="h-screen ">
      <div className="flex gap-4 my-4 w-full justify-center xs:px-4 fixed z-10 top-16 shadow-xl bg-mainColor">
        <div
          onClick={() => setCategoie("hotDrink")}
          className="bg-orange-800 text-white text-lg	 xs:text-sm lg:text-lg p-2 md:text-lg sm:text-lg rounded shadow-inner	 cursor-pointer"
        >
          مشروبات ساخنة
        </div>
        <div
          onClick={() => setCategoie("iceDrink")}
          className="bg-orange-900 text-white shadow-inner xs:text-sm	lg:text-lg  md:text-lg sm:text-lg text-lg p-2 rounded  cursor-pointer"
        >
          مشروبات باردة
        </div>
        <div
          onClick={() => setCategoie("candies")}
          className="bg-orange-900 text-white shadow-inner xs:text-sm lg:text-lg md:text-lg sm:text-lg	 text-lg p-2 rounded  cursor-pointer "
        >
          حلويات
        </div>
      </div>
      <Card categorie={categoie} />
    </div>
  );
}
