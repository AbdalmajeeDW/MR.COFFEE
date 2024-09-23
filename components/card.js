"use client";
import { Bs0Circle } from "react-icons/bs";
import _6in1_1 from "../public/6in1/1.jpg";
import _3in1_1 from "../public/3in1/1.jpg";
import Image from "next/image";
import products from "../COMMON/products";
import { useEffect, useState } from "react";

export default function Home(props) {
  
  useEffect(() => {
    setCount(products.products);

    setCategorie(props.categorie);
  });
  const [count, setCount] = useState();
  const [categorie, setCategorie] = useState();
  let dataFilter =
    count &&
    count.map((e, i) => (
      <>
        {e.title.includes(props.filter) ? (
          <div
            className="bg-slate-100 h-full py-2 shadow-2xl shadow-black rounded"
            key={i}
          >
            <Image
              src={e.product.src}
              className="h-64 lg:w-full xs:w-full bg-slate-100 shadow-xl rounded object-fill"
              width={300}
              height={50}
              alt="l"
            />
            <div className="h-44 justify-between	flex flex-col	flex-1	">
              <div className="px-2 py-2 text-black text-2xl">{e.title}</div>

              <div className="px-2 text-black text-lg flex flex-col	flex-1">
                {e.Description}
              </div>
              <div className="px-2 py-2 flex justify-end text-black text-lg">
                {e.price}
              </div>
            </div>
          </div>
        ) : null}
      </>
    ));
  let data =
    count &&
    count.map((e, i) => (
      <>
        {e.categorie === categorie ? (
          <div
            className="bg-slate-100 h-full py-2 shadow-2xl shadow-black rounded"
            key={i}
          >
            <Image
              src={e.product.src}
              className="h-64 lg:w-full xs:w-full bg-slate-100 shadow-xl rounded object-fill"
              width={300}
              height={50}
              alt="l"
            />
            <div className="h-44 justify-between	flex flex-col	flex-1	">
              <div className="px-2 py-2 text-black text-2xl">{e.title}</div>

              <div className="px-2 text-black text-lg flex flex-col	flex-1">
                {e.Description}
              </div>
              <div className="px-2 py-2 flex justify-end text-black text-lg">
                {e.price}
              </div>
            </div>
          </div>
        ) : null}
      </>
    ));
  return (
    <div className="xl:grid xl:grid-cols-4 lg:grid xs:w-full lg:grid-cols-3  sm:grid sm:grid-cols-2  xs:grid xs:grid-cols-1   gap-4  px-10 my-40  ">
     {data} 
    </div>
  );
}
// {props.filter ===undefined ||props.filter.length ===0 ?data :dataFilter}