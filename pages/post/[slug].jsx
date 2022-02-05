import React from "react";
import NavBar from "../../components/NavBar";
const PostDetails = () => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80">
        <div className="h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 w-full justify-items-center grid content-between">
          <NavBar />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pb-14">
            <div className="w-auto justify-center">
              <p className="text-white font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                The Element of Surprise on UX Design throught Mobile App
              </p>
              <p className="mt-7 lg:mt-7 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
                📅 Dec 07, 2021 — by Galih Putra
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
        <div className="py-[3.625rem]">
          <img src="../imgPost.png" alt="" />
        </div>
        <div className="mb-[3.625rem]">
          <p className="text-justify">
            Ehey, good morning everyone, padahal nulis ini jam 12 siang LOL,
            udah lama gak nulis, dan hari ini gue akan membahas salah satu ilmu
            yang mungkin bisa dimanfaat-in di bidang UX, yaitu "The element of
            surprise". Pernah gak sih suatu ketika, lagi dengerin playlist lagu
            di cafe atau di radio, yang bahkan kita gak tau list-list lagu nya,
            tapi sewaktu diputerin nyaman aja dengerinnya, yang bahkan kadang
            lagunya gak pernah kita denger sama sekali sebelumnya, tapi kok kita
            jarang banget protes “ahh lagu nya gak enak" dan lebih sering
            menikmati aja lagu-lagu random yang di puter itu. Itu namanya
            Element of Surprise, keadaan dimana kita gak bisa ngatur apa yang
            sedang kita nikmati, dan otak lebih milih untuk mengikuti dan
            menikmati keadaan yang sedang terjadi, contohnya ya di lagu tadi,
            kita gak punya kuasa untuk ngerubah lagu-lagu di cafe atau radio
            tadi semau kita, jadi semua lagu yang keluar tiba-tiba mau gak mau
            kita nikmatin. Metode ini juga yang dijadiin ide sama spotify untuk
            bikin fitur “Play random song”, “Shuffle”, “Made For You Playlist”,
            DLL, fitur-fitur ini membuat seakan kita gak tau lagu apa yang akan
            diputar, dan setiap lagu yang diputar kita dipaksa untuk “Nikmatin
            Aja” yaa walaupun kalo di spotify kita masih bisa ganti lagunya sih
            LOL. Itu kenapa kita gak pernah bosen kalo dengerin lagu lagu yang
            ada di radio, cafe-cafe yang bahkan kita gak tau lagu apa yang akan
            diputar selanjutnya sama cafe atau radio tersebut. Thank you semua
            udah mau baca tulisan gabut ini EHE :)
          </p>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
