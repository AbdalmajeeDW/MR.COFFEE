"use client";
import { Bs0Circle } from "react-icons/bs";
import Card from "../components/card";
import { useState } from "react";

export default function Home(Component) {
  const [categoie, setCategoie] = useState();

  return (
    <div className="h-screen ">
      <div className="flex gap-10 my-6  justify-center">
        <div
          onClick={() => setCategoie("hotDrink")}
          className="bg-orange-900 text-white text-lg	 p-2 rounded shadow-xl cursor-pointer"
        >
          مشروبات ساخنة
        </div>
        <div
          onClick={() => setCategoie("iceDrink")}
          className="bg-orange-900 text-white shadow-white text-lg p-2 rounded shadow-xl cursor-pointer"
        >
          مشروبات باردة
        </div>
        <div
          onClick={() => setCategoie("candies")}
          className="bg-orange-900 text-white shadow-white text-lg p-2 rounded shadow-xl cursor-pointer "
        >
          حلويات
        </div>
      </div>
      <Card categorie={categoie} />
    </div>
  );
}
