"use client";
import { Bs0Circle } from "react-icons/bs";
import Card from "../components/card";
import { useState } from "react";

export default function Home(Component) {
  const [categoie, setCategoie] = useState();
  // const [search, setSearch] = useState();
// function searchProduct(e) {
//   setSearch(e.target.value)

  
  
// }
  return (
    <div className="h-screen ">
      <div className="flex gap-4 my-4 w-full justify-center xs:px-4 fixed z-10 top-16 shadow-xl bg-primaryColor py-4">
      {/* <input onChange={(e)=>searchProduct(e)} /> */}
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
      <Card categorie={categoie}  />
    </div>
  );
}
