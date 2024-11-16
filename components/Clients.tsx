import React from "react";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";
import { companies, testimonials } from "@/data";

function Clients() {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Inspiring Insights from{" "}
        <span className="text-purple">Visionaries in Technology</span>
      </h1>
      <div className="flex flex-wrap items-center max-lg:mt-10">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
      <h1 className="heading pb-5">
        My <span className="text-purple">Tech Stack</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center g4 md:gap-6 max-lg:mt-8">
        {companies.map(({ id, img, name }) => (
          <div
            key={id}
            className="group flex flex-col items-center justify-center gap-2"
          >
            <div className="relative">
              {/* Icon with hover effect */}
              <img
                src={img}
                alt={name}
                className="md:w-22 w-20 transition-transform duration-300 group-hover:scale-125"
              />
            </div>
            {/* Name displayed on hover */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-lg text-gray-100">
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;
