import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container-w-full bg-no-repeat bg-center bg-cover bg-hero h-60 sm:h-72 md:h-84 lg:h-96 flex items-stretch">
        <div className="w-11/12 self-center mx-auto container pt-20 md:pt-24 lg:pt-28 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <p className="text-[1.5rem] font-sans text-white mx-auto font-bold sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide xl:text-[2.875rem]">
            Hey, I'm Galih Putra. A struggling Digital Product Designer.
          </p>
        </div>
      </div>
      <div className="w-11/12 container mx-auto pt-[58px] self-center md:10/12 lg:w-9/12 xl:w-8/12">
        <p className="text-[1.1rem] leading-[2.3rem] font-sans font-light text-[#282828] sm:text-[1.2rem] sm:leading-[2.4rem] md:text-[1.3rem] md:leading-[2.6rem] lg:text-[1.4rem] lg:leading-[2.8rem] xl:text-[1.5rem] xl:leading-[3rem]">
          Currently a UX Designer working within amazing team at Digital Product
          Agency{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="https://salt.id/">SALT Indonesia.</Link>
          </span>{" "}
          Day-to-day, I'm contributing on Digital Product Interface, and Design
          System.
        </p>
        <p className="mt-[38px] text-[1.1rem] leading-[2.3rem] font-sans font-light text-[#282828] sm:text-[1.2rem] sm:leading-[2.4rem] md:text-[1.3rem] md:leading-[2.6rem] lg:text-[1.4rem] lg:leading-[2.8rem] xl:text-[1.5rem] xl:leading-[3rem]">
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
        <div className="my-20 font-medium w-auto flex text-[#969696] text-[0.9rem] sm:text-[1rem] md:text-[1.63] lg:tex-[1.125]">
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
