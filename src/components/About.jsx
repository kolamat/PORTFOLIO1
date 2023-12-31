import React from "react";
import "aos/dist/aos.css";
import kolade1 from "../assets/kolade1.jpg";

function about() {
  return (
    <div className="mx-auto grid md:grid-cols-2 text-white py-16 px-4">
      <div>
        <img
          className="w-[500px] mx-auto my-4 rounded-2xl"
          src={kolade1}
          alt="still Kolade"
        />
      </div>

      <div className="flex flex-col justify-center mx-12">
        <h1 className="lg:text-[50px] md:text-5xl sm:text-4xl text-3xl font-bold py-2">
          About <span className="text-[#0ef] underline">Me</span>
        </h1>
        <h3 className=" text-[25px] font-bold">Frontend Developer</h3>
        <p className="text-md font-bold my-2">
          I am an enthusiastic, self-motivated, reliable, responsible and hard
          working person. I am a mature team worker and adaptable to all
          challenging situations. I am able to work well both in a team
          environment as well as using own initiative. I am able to work well
          under pressure and adhere to strict deadlines.
        </p>
        <a
          href="/"
          className=" font-semibold w-[98px] rounded-lg bg-[#0ef] p-2 text-center text-black"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default about;
