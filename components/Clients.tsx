import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

function Clients() {
  return (
    <div className="py-20 " id="testimonials">
      <h1 className="heading">
        Inspiring Insights from{" "}
        <span className="text-purple"> Visionaries in Technology</span>
      </h1>
      <div className="flex flex-wrap items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <h1 className="heading pb-5">
        My <span className="text-purple"> Tech Stack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center g4 md:gap-10 max-lg:mt-8">
        {companies.map(({ id, img, name }) => (
          <div key={id} className="flex md:max-w-60 max-w-32 gap-2">
            <img src={img} alt={name} className="md:w-22 w-20" />

            {/* <img src={nameImg} alt={name} className="md:w-24 w-20" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
