import { data } from "autoprefixer";
import React from "react";
import NavBar from "../../components/NavBar";
import PostDetail from "../PostDetail";

const ProjectDetails = ({ post }) => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80">
        <div className="h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 w-full justify-items-center grid content-between">
          <NavBar isNavItem={false} />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pb-14 lg:pr-40 md:pr-36 sm:pr-28">
            <div className="w-auto justify-center">
              <p className="text-white font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                Revamp the Telkomsel B2B Platform Client Dashboard
              </p>
              <div class="grid grid-flow-col auto-cols-max">
                <div>
                  <p>Role</p>
                  <p>UI/UX Designer</p>
                </div>
                <div>
                  <p>Period</p>
                  <p>June 2020 - October 2020</p>
                </div>
                <div>
                  <p>Company</p>
                  <p>SALT Indonesia</p>
                </div>
                <div>
                  <p>Goals</p>
                  <p>
                    Merge multiple application dashboards into one with seamless
                    user experiences.
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:pr-36 sm:pr-28 pb-16">
        <div className="py-[3.625rem]">
          <img src="../imgPost.png" alt="" />
        </div>
        <p className="mb-[3.625rem] text-justify">
          Ehey, good morning everyone, padahal nulis ini jam 12 siang LOL, udah
          lama gak nulis, dan hari ini gue akan membahas salah satu ilmu yang
          mungkin bisa dimanfaat-in di bidang UX, yaitu "The element of
          surprise".
        </p>
        <p className="mb-[3.625rem] text-justify">
          Pernah gak sih suatu ketika, lagi dengerin playlist lagu di cafe atau
          di radio, yang bahkan kita gak tau list-list lagu nya, tapi sewaktu
          diputerin nyaman aja dengerinnya, yang bahkan kadang lagunya gak
          pernah kita denger sama sekali sebelumnya, tapi kok kita jarang banget
          protes “ahh lagu nya gak enak" dan lebih sering menikmati aja
          lagu-lagu random yang di puter itu.
        </p>
        <p className="mb-[3.625rem] text-justify">
          Itu namanya Element of Surprise, keadaan dimana kita gak bisa ngatur
          apa yang sedang kita nikmati, dan otak lebih milih untuk mengikuti dan
          menikmati keadaan yang sedang terjadi, contohnya ya di lagu tadi, kita
          gak punya kuasa untuk ngerubah lagu-lagu di cafe atau radio tadi semau
          kita, jadi semua lagu yang keluar tiba-tiba mau gak mau kita nikmatin.
        </p>
        <p className="mb-[3.625rem] text-justify">
          Metode ini juga yang dijadiin ide sama spotify untuk bikin fitur “Play
          random song”, “Shuffle”, “Made For You Playlist”, DLL, fitur-fitur ini
          membuat seakan kita gak tau lagu apa yang akan diputar, dan setiap
          lagu yang diputar kita dipaksa untuk “Nikmatin Aja” yaa walaupun kalo
          di spotify kita masih bisa ganti lagunya sih LOL.
        </p>
        <p className="text-justify">
          Itu kenapa kita gak pernah bosen kalo dengerin lagu lagu yang ada di
          radio, cafe-cafe yang bahkan kita gak tau lagu apa yang akan diputar
          selanjutnya sama cafe atau radio tersebut. Thank you semua udah mau
          baca tulisan gabut ini EHE :)
        </p>
      </div>
      <div className="h-56 sm:h-60 md:h-64 lg:h-72 xl:h-96 bg-[#F4F8FB] pt-[78px]">
        <div className="w-11/12 md:w-10/12 mx-auto lg:w-9/12 xl:w-8/12">
          <p className="font-bold text-[1.75rem] mb-[1.75rem]">
            See other selected projects
          </p>
          <p className="mb-6">
            💰 Jenius App Re—design Concept for Competition
          </p>
          <p className="mb-6">🎨 Telkomsel B2B Platfoam Design System</p>
          <p className="mb-6">⚙️ Telkomsel DigiHub API Marketplace Revamp</p>
          <p className="mb-[144px]">✂️ UX Case Study — Barbershop Booking</p>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
