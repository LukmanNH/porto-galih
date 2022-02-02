import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container-w-full bg-no-repeat bg-center bg-cover bg-hero h-[388px] flex items-stretch">
        <div className="self-center mx-auto w-8/12 container pt-28">
          <p className="md:text-[2.5rem] sm:text-[2rem] tracking-wide lg:text-[2.875rem] font-sans text-white mx-auto font-bold">
            Hey, I'm Galih Putra. A struggling Digital Product Designer.
          </p>
        </div>
      </div>
      <div className="container mx-auto pt-[58px] self-center w-8/12">
        <p className="text-2xl font-sans font-light text-[#282828] leading-[3rem]">
          Currently a UX Designer working within amazing team at Digital Product
          Agency{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="https://salt.id/">SALT Indonesia.</Link>
          </span>{" "}
          Day-to-day, I'm contributing on Digital Product Interface, and Design
          System.
        </p>
        <p className="text-2xl mt-[38px] w-11/12 font-sans font-light text-[#282828] leading-[3rem]">
          Read my{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/WritingJourney">thoughts</Link>
          </span>{" "}
          or my{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            projects
          </span>{" "}
          if you want to know more{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            about me.
          </span>
        </p>
        <div className="my-20 font-medium w-auto flex text-lg text-[#969696]">
          <div className="mr-1 hover:underline hover:text-[#01549F]">
            <Link href={"/"}>Linkedin,</Link>
          </div>
          <div className="mr-1 hover:underline hover:text-[#303030]">
            <Link href={"/"}>Medium,</Link>
          </div>
          <div className="mr-1 hover:underline hover:text-[#DB4EA3]">
            <Link href={"/"}>Dribbble,</Link>
          </div>
          <div className="hover:underline hover:text-[#EB6708]">
            <Link href={"/"}>Resume</Link>
          </div>
        </div>
      </div>
    </>
  );
}
