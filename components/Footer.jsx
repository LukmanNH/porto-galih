import React from "react";

const Footer = () => {
  return (
    <div className="h-[23.625rem] sm:h-[24.625rem] md:h-[25.625rem] lg:h-[26.625rem] xl:h-[27.625rem] bg-[#F4F8FB] pt-[4.875rem] bottom-0">
      <div className="w-11/12 md:w-10/12 mx-auto lg:w-9/12 xl:w-8/12">
        <p className="font-bold text-[1.75rem] mb-[1.75rem]">
          See other selected projects
        </p>
        <div className="flex items-center mb-6">
          <img src="../💰.svg" alt="" className="pr-1 h-4 lg:h-5" />
          Jenius App Re—design Concept for Competition
        </div>
        <div className="flex items-center mb-6">
          <img src="../🎨.svg" alt="" className="pr-1 h-4 lg:h-5" />
          Telkomsel B2B Platfoam Design System
        </div>
        <div className="flex items-center mb-6">
          <img src="../⚙.svg" alt="" className="pr-1 h-4 lg:h-5" />
          Telkomsel DigiHub API Marketplace Revamp
        </div>
        <div className="flex items-center mb-[144px]">
          <img src="../✂.svg" alt="" className="pr-1 h-4 lg:h-5" />
          UX Case Study — Barbershop Booking
        </div>
      </div>
    </div>
  );
};

export default Footer;
