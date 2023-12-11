import React from "react";
import Typed from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import kolade from "../assets/kolade.jpg";

const hero = () => {
  return (
    <div className="text-white bg-[#000300] pt-24 pb-16 px-4">
      <div className="mx-auto grid md:grid-cols-2">
        <div className="flex flex-col justify-center mx-3">
          <h3 className="font-bold">Hello, it's me</h3>
          <h1 className="lg:text-[50px] md:text-5xl sm:text-4xl text-3xl font-bold py-2">
            Matanmi Kolade
          </h1>
          <h3 className=" text-[25px] font-bold">
            And I'm a
            <span className=" text-[#0ef]">
              <Typed
                strings={["Frontend-Engineer", "Blogger", "Gamer"]}
                startDelay={2000}
                typeSpeed={130}
                backSpeed={150}
                cursorChar={"."}
                loop
              />
            </span>
          </h3>
          <h3 className=" text-[25px] underline text-blue-400 font-bold">
            A little speech about my-seif
          </h3>
          <p className="text-[20px] font-bold">
            I Talk to people the way I want to be spoken to; respect people as I
            wish to be respected. My status, religion, race, political views, or
            culture don't matter being a good person really is as simple as
            following the golden rule and treating others as I would like them
            to treat Me.
          </p>
          <div className="flex gap-5 my-5">
            <a
              className="rounded-full bg-[#0ef] p-2 text-black"
              href="https://twitter.com/koladeMOK"
              target="_blank"
              title="Twitter"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black"
              href="https://www.facebook.com/kolade.matanmi.92"
              target="_blank"
              title="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black"
              href="https://www.instagram.com/matiness200/"
              target="_blank"
              title="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black"
              href=""
              target="_blank"
              title="Linkedin"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              className="rounded-full bg-[#0ef] p-2 text-black"
              href="https://github.com/kolamat"
              target="_blank"
              title="Github"
            >
              <FaGithub size={20} />
            </a>
          </div>
          <a
            className=" font-bold w-[98px] rounded-lg bg-[#0ef] p-1 text-xl text-center text-black"
            href="https://kolamat.github.io/resuming/"
            target="_blank"
          >
            View CV
          </a>
        </div>
        <img
          className="w-[500px] mx-auto my-4 rounded-2xl"
          src={kolade}
          alt="Kolade"
        />
      </div>
    </div>
  );
};

export default hero;
