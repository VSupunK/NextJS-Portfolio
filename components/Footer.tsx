import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";

const Footer = () => {
  return (
    <footer className="w-full mg-[100px] pb-10 md:mb-5" id="contact">
      {/* <div className="w-full  absolute left-0 -bottom-100 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-100"
        />
      </div> */}

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to elevate <span className="text-purple">your</span> digital
          presece to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let's connect and explore how I can help turn your vision into
          reality. Reach out today!
        </p>
        <a href="mailto:vsupunkalhara@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 VSK
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <a key={profile.id} href={profile.link}>
              <img src={profile.img} alt={profile.img} width={30} height={30} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
