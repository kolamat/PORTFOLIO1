import React from "react";
import { FaPaintRoller } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

function Services() {
  return (
    <div className="w-full text-white py-[7rem] px-4">
      <h1 className="lg:text-[50px] md:text-5xl sm:text-4xl w-full text-3xl font-bold flex items-center justify-center gap-2 mb-6">
        My<span className="text-[#0ef] underline">Services</span>
      </h1>
      <div className="mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div className="flex flex-col items-center border p-4 rounded-[15px] w-[100%]">
          <h3 className="flex flex-col items-center justify-center text-[27px] font-bold">
            <FaCode size={42} />
            Web Developer
          </h3>
          <p className="font-bold my-3">
            a web developer's job is to use the basic building blocks of the web
            ( like HTML, CSS and JavaScript ) to create something complex.
            molestias atque tenetur voluptates quos sapiente facilis aliquam,
            ratione eaque
          </p>
          <button className=" font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black">
            <a href="/">Read More</a>
          </button>
        </div>
        <div className="flex flex-col items-center border p-4 rounded-[15px] w-[100%]">
          <h3 className="flex flex-col items-center justify-center text-[27px] font-bold">
            <FaPaintRoller size={42} />
            Graphic Design
          </h3>
          <p className="font-bold my-3">
            Graphic design is a craft where professionals create visual content
            to communicate messages. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Eius, iure itaque! Est facilis aliquam, ratione
            eaque
          </p>
          <a
            className=" font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black"
            href="/"
          >
            Read More
          </a>
        </div>
        <div className=" flex flex-col items-center border p-4 rounded-[15px] w-[100%]">
          <h3 className="flex flex-col items-center justify-center text-[27px] font-bold">
            <FaChartBar size={42} />
            Digital Marketing
          </h3>
          <p className="font-bold my-3">
            Digital marketing involves many of the same principles as
            traditional Marketing and is often considered an additional way for
            companies to approach consumers and understand their behavior. Lorem
            ipsum dolor, sit amet.
          </p>
          <a
            className=" font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black flex flex-col"
            href="/"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
