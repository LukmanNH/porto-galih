import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const ProtectedContent = () => {
  const router = useRouter();
  const [password, setPassword] = useState();
  const credentials = process.env.NEXT_PUBLIC_PASSWORD_CONTENT;
  const [alert, setalert] = useState(false);
  const [classHidden, setclassHidden] = useState("hidden");
  const alertWrongPassword = "";
  let urlFromLastPage = "";
  if (typeof window !== "undefined") {
    urlFromLastPage = localStorage.getItem("prevUrl").toString() || "";
  }

  const onSubmit = () => {
    if (password === credentials) {
      router.push(urlFromLastPage);
    } else {
      setalert(true);
      setclassHidden("");
    }
  };

  return (
    <>
      <img
        src="../Gelombang 1.svg"
        alt=""
        className="top-0 absolute w-full z-0"
      />
      <div className="pt-6 mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 z-10 relative">
        <div className="text-[#282828] cursor-pointer text-base lg:text-lg font-medium flex items-center hover:border-b-[3px] border-[#2B9EDE] absolute">
          <img src="../👈.svg" alt="" className="mr-1 md:mr-2 h-4 lg:h-5" />
          <Link href={"/"}>Back to homepage</Link>
        </div>
        <div className="pt-36 mx-auto sm:w-[32.313rem] lg:w-[42.313rem] z-0">
          <div className="grid text-center">
            <div className="justify-self-center flex items-center mb-[1.375rem] text-4xl lg:text-5xl font-bold">
              <img
                src="../🗃.svg"
                alt=""
                className="pr-1 md:pr-2 h-8 md:h-9 lg:h-12"
              />
              Protected Content
            </div>
            <p className="font-light text-sm md:text-base lg:text-lg mb-[3.125rem] text-[#282828]">
              Some project need passwords please contact{" "}
              <span className="underline font-medium">
                windawan26@gmail.com
              </span>{" "}
              to gain access to the project, — Only selected cases granted.
            </p>
            <input
              className="placeholder:text-[#C0C0C0] block bg-white w-full border border-[#282828] rounded-md p-3 lg:w-[25rem] mx-auto mb-7"
              placeholder="Enter the password"
              type="password"
              value={password}
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            {alert ? (
              <p
                className={`${classHidden} 
              text-[#FF4E4E] font-normal lg:text-sm mt-[0.875rem] mb-[1.75rem] block`}
              >
                Password lu salah! goblok
              </p>
            ) : (
              <div></div>
            )}

            <button
              onClick={() => onSubmit()}
              className="cursor-pointer block mx-auto bg-[#01549F] hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] px-12 w-[9.125rem] rounded-[5px] font-medium text-sm text-white"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <img
        src="../Gelombang 2.svg"
        alt=""
        className="bottom-0 absolute w-full z-0"
      />
    </>
  );
};

export default ProtectedContent;
