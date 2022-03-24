import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-[30.625rem] sm:h-[24.625rem] md:h-[25.625rem] lg:h-[26.625rem] xl:h-[27.625rem] bg-[#F4F8FB] pt-[4.875rem] bottom-0 z-10">
<<<<<<< HEAD
      <div className="w-11/12 md:w-10/12 mx-auto lg:w-9/12 xl:w-8/12 max-w-screen-lg relative">
=======
      <div className="w-11/12 md:w-10/12 mx-auto lg:w-9/12 xl:w-8/12 2xl:w-[40%] relative">
>>>>>>> b97effbdae692beb91d00107d260bb27ad0208ea
        <p className="font-bold text-[1.75rem] mb-[1.75rem]">
          See other selected projects
        </p>
        <Link href={"/project/my-visual-design-exploration-gallery"}>
          <div className="flex items-center cursor-pointer !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE] w-[fit-content] !mb-[1.5rem]">
            <img src="../💰.svg" alt="" className="pr-1 h-4 lg:h-5" />
            Jenius App Re—design Concept for Competition
          </div>
        </Link>
        <Link href={"/project/telkomsel-b2b-platfoam-design-system"}>
          <div className="flex items-center cursor-pointer !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE] w-[fit-content] !mb-[1.5rem]">
            <img src="../🎨.svg" alt="" className="pr-1 h-4 lg:h-5" />
            Telkomsel B2B Platfoam Design System
          </div>
        </Link>
        <Link href={"/project/telkomsel-digihub-api-marketplace-revamp"}>
          <div className="flex items-center cursor-pointer !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE] w-[fit-content] !mb-[1.5rem]">
            <img src="../⚙.svg" alt="" className="pr-1 h-4 lg:h-5" />
            Telkomsel DigiHub API Marketplace Revamp
          </div>
        </Link>
        <Link href={"/project/ux-case-study-barbershop-booking"}>
          <div className="flex items-center cursor-pointer !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE] w-[fit-content] !mb-[1.5rem]">
            <img src="../✂.svg" alt="" className="pr-1 h-4 lg:h-5" />
            UX Case Study — Barbershop Booking
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
