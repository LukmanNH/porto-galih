import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Galih Putra Windawan" />
        <meta property="og:type" content="article" />
        <meta
          property="og:description"
          content="Currently a UX Designer working within amazing team at Digital Product Agency SALT Indonesia."
        />
        <meta property="og:url" content="https://www.hellogalih.com" />
      </Head>
      <div className="container-w-full bg-no-repeat bg-center bg-cover bg-hero h-[15.25rem] sm:h-[18.25rem] md:h-[20.25rem] lg:h-[22.25rem] xl:h-[24.25rem] 2xl:h-[24.25rem] flex">
        <div className="w-11/12 self-center mx-auto container pt-20 md:pt-24 lg:pt-28 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 max-w-screen-lg">
          <p className="text-[1.5rem] font-sans text-white mx-auto font-bold sm:text-[1.8rem] md:text-[2rem] lg:text-[2.5rem] tracking-wide">
            Hey, I'm Galih Putra. A struggling Digital Product Designer.
          </p>
        </div>
      </div>
      <div className="w-11/12 container mx-auto pt-[3.625rem] self-center md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 max-w-screen-lg">
        <p className="text-[1.1rem] leading-[2.3rem] font-sans font-light text-[#282828] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.5rem] lg:leading-10 ">
          Currently a UX Designer working within amazing team at Digital Product
          Agency{" "}
          <span className="border-b-[0.188rem] font-semibold border-[#2B9EDE] duration-200 hover:text-[#01549F] cursor-pointer">
            <a target="_blank" href="https://salt.id/">
              SALT Indonesia.
            </a>
          </span>{" "}
          Day-to-day, I'm contributing on Digital Product Interface, and Design
          System.
        </p>
        <p className="mt-[2.375rem] text-[1.1rem] leading-[2.3rem] font-sans font-light text-[#282828] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem]">
          If you want to know more{" "}
          <span className="border-b-[0.188rem] font-semibold border-[#2B9EDE] duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/AboutMe">about me</Link>
          </span>{" "}
          — Just read my{" "}
          <span className="border-b-[0.188rem] font-semibold border-[#2B9EDE] duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/WritingJourney">thoughts</Link>
          </span>{" "}
          and my{" "}
          <span className="border-b-[0.188rem] font-semibold border-[#2B9EDE] duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/NotableWorks">projects</Link>
          </span>
        </p>
        <div className="my-20 font-normal w-auto flex text-[#969696] text-[0.9rem] sm:text-[1rem] lg:text-[1.125rem]">
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
