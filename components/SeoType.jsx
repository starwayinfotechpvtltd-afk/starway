"use client";

import { useState } from "react";
import Image from "next/image";

export default function SeoType({ data }) {
  const services = [
    "AEO Services",
    "Multilocation SEO",
    "Enterprise SEO",
    "B2B SEO",
    "Ecommerce SEO",
    "SaaS SEO",
  ];
  console.log(data);

  const [seoType, setSeoType] = useState("aeo services");
  const serviceTypeHandler = (type) => {
    const value = type.toLowerCase();
    setSeoType(value);
  };
  console.log(seoType);

  return (
    <div className="rounded-4xl bg-white w-full min-h-80 mt-10 p-5 md:p-10 flex flex-wrap items-start gap-x-18 justify-center">
      <div className="w-full md:w-10/12 overflow-hidden">
        <div className="flex justify-between items-center overflow-scroll hide-scrollbar">
          {services.map((list, index) => (
            <button
              key={index}
              className={`${
                seoType == list.toLowerCase() ? "bg-[#072255]" : "bg-[#fff]"
              } px-5 py-4 font-bold rounded-t-xl text-nowrap ${
                seoType != list.toLowerCase() ? "text-[#072255]" : "text-[#fff]"
              }`}
              onClick={() => serviceTypeHandler(list)}
            >
              {list}
            </button>
          ))}
        </div>

        {/* service type section */}
        <div className="bg-[#072255] p-5 md:p-10 rounded-b-xl">
          {data?.seoServiceTab
            ?.filter(
              (item) => item.heading?.toLowerCase() === seoType?.toLowerCase()
            )
            ?.map((value, index) => (
              <div
                key={index}
                className={`${
                  seoType == value.heading.toLowerCase() && "bg-[#072255]"
                }`}
              >
                <h3 className="text-2xl md:text-4xl text-center text-white font-bold ">
                  {value.heading}
                </h3>
                <p className="text-center text-xl md:text-2xl mt-5 text-[#00c8ff]">
                  {value.subHeading}
                </p>
                <div className="flex flex-col lg:flex-row items-center justify-between mt-10">
                  <div>
                  <p className="text-xl mt-5 font-bold text-white">
                    {value.listHeading}
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-lg text-white flex flex-col gap-2">
                    {value?.listData?.map((list, i) => (
                      <li key={i}>{list}</li>
                    ))}
                  </ul>
                  </div>
                  <Image src={`${value.image}`} alt={`image${index}`} height={400} width={400} className="mt-5 lg:mt-0 rounded-2xl shadow-md shadow-white duration-300 transition ease-in-out hover:scale-102"/>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
