import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container-w-full bg-no-repeat bg-center bg-cover bg-hero h-[15.25rem] sm:h-[18.25rem] md:h-[20.25rem] lg:h-[22.25rem] xl:h-[24.25rem] flex items-stretch">
        <div className="w-11/12 self-center mx-auto container pt-20 md:pt-24 lg:pt-28 md:w-10/12 lg:w-9/12 xl:w-8/12">
          <p className="text-[1.5rem] font-sans text-white mx-auto font-bold sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide xl:text-[2.875rem]">
            Hey, I'm Galih Putra. A struggling Digital Product Designer.
          </p>
        </div>
      </div>
      <div className="w-11/12 container mx-auto pt-[3.625rem] self-center md:10/12 lg:w-9/12 xl:w-8/12">
        <p className="text-[1.1rem] leading-[2.3rem] font-sans font-light text-[#282828] sm:text-[1.2rem] sm:leading-[2.4rem] md:text-[1.3rem] md:leading-[2.6rem] lg:text-[1.4rem] lg:leading-[2.8rem] xl:text-[1.5rem] xl:leading-[3rem]">
          Currently a UX Designer working within amazing team at Digital Product
          Agency{" "}
          <span className="border-b-[0.188rem] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="https://salt.id/">SALT Indonesia.</Link>
          </span>{" "}
          Day-to-day, I'm contributing on Digital Product Interface, and Design
          System.
        </p>
        <p className="mt-[2.375rem] text-[1.1rem] leading-[2.3rem] font-sans font-light text-[#282828] sm:text-[1.2rem] sm:leading-[2.4rem] md:text-[1.3rem] md:leading-[2.6rem] lg:text-[1.4rem] lg:leading-[2.8rem] xl:text-[1.5rem] xl:leading-[3rem]">
          If you want to know more{" "}
          <span className="border-b-[0.188rem] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/AboutMe">about me</Link>
          </span>{" "}
          — Just read my{" "}
          <span className="border-b-[0.188rem] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/WritingJourney">thoughts</Link>
          </span>{" "}
          and my{" "}
          <span className="border-b-[0.188rem] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/NotableWorks">projects</Link>
          </span>
        </p>
        <div className="my-20 font-medium w-auto flex text-[#969696] text-[0.9rem] sm:text-[1rem] md:text-[1.63] lg:tex-[1.125]">
          <div className="mr-1 hover:underline hover:text-[#01549F]">
            <a href="https://www.linkedin.com/in/galihputra26/" target="_blank">
              Linkedin,
            </a>
          </div>
          <div className="mr-1 hover:underline hover:text-[#303030]">
            <a href="https://galihputra26.medium.com/" target="_blank">
              Medium,
            </a>
          </div>
          <div className="mr-1 hover:underline hover:text-[#DB4EA3]">
            <a href="https://dribbble.com/galihputra26" target="_blank">
              Dribbble,
            </a>
          </div>
          <div className="hover:underline hover:text-[#EB6708]">
            <a href={"/"} target="_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
