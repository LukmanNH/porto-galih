import React, { useState } from "react";
import Link from "next/link";

const ProtectedContent = () => {
  const [password, setPassword] = useState();

  const onSubmit = () => {};
  return (
    <>
      <div className="pt-6 mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
        <Link href={"/"}>
          <p className="text-[#282828] cursor-pointer text-sm lg:text-lg hover:border-b-[3px] hover:transition duration-150 border-[#2B9EDE] float-left">
            👈 Back to homepage
          </p>
        </Link>
        <div className="py-36 mx-auto lg:w-[42.313rem]">
          <div className="text-center">
            <p className="mb-[1.375rem] sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              🗃 Protected Content
            </p>
            <p className="font-light sm:text-sm md:text-base lg:text-lg mb-[3.125rem] text-[#282828]">
              Some project need passwords please contact{" "}
              <span className="underline font-medium">
                windawan26@gmail.com
              </span>{" "}
              to gain access to the project, — Only selected cases granted.
            </p>
            <input
              class="placeholder:text-[#C0C0C0] block bg-white w-full border border-[#282828] rounded-md p-3 lg:w-[25rem] mx-auto mb-7"
              placeholder="Enter the password"
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div
              onClick={onSubmit}
              className="cursor-pointer mx-auto bg-[#01549F] hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] px-12 w-[9.125rem] rounded-[5px] font-medium text-sm text-white"
            >
              <p>Submit</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedContent;
