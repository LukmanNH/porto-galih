import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="container-w-full bg-no-repeat bg-center bg-cover bg-hero h-[388px] px-56 pt-44">
        <div className="container">
          <p className="md:text-[2.5rem] sm:text-[2rem] tracking-wide lg:text-[2.875rem] font-sans text-white mx-auto">
            Hey, I'm 😎 Galih Putra. A struggling Digital Product Designer.
          </p>
        </div>
      </div>
      <div className="container-w-full px-56 pt-[58px]">
        <p className="text-2xl w-11/12 font-sans font-light text-[#454545] leading-[3rem]">
          Currently a UX Designer working within amazing team at Digital Product
          Agency{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="https://salt.id/">SALT Indonesia.</Link>
          </span>{" "}
          Day-to-day, I'm contributing on Digital Product Interface, and Design
          System.
        </p>
        <p className="text-2xl mt-[38px] w-11/12 font-sans font-light text-[#454545] leading-[3rem]">
          Read my{" "}
          <span className="border-b-[3px] font-semibold border-blue-600 duration-200 hover:text-[#01549F] cursor-pointer">
            <Link href="/blog">thoughts</Link>
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
        <p className="text-[#ADADAD] font-sans font-light my-[98px]">
          Made with {`<3`} by Lukman Nur Hakim
        </p>
      </div>
    </>
  );
}
