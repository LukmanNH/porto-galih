import React, { useState } from "react";

const WritingJourney = () => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");
  const [valueDropDownTime, setValueDropDownTime] = useState("All Time");
  const [dropDownTime, setDropdownTime] = useState(false);
  const [dropStyleTime, setDropStyleTime] = useState(false);

  const onClickDropDownCategories = () => {
    setDropdownCategories(!dropDownCategories);
    setDropStyleCategories(!dropStyleCategories);
  };

  const onClickDropDownTime = () => {
    setDropdownTime(!dropDownTime);
    setDropStyleTime(!dropStyleTime);
  };

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-[388px]">
        <div className="h-[388px] w-full justify-items-center grid content-between">
          <div className="flex justify-between pt-6 mx-auto w-8/12 container">
            <p className="text-white">👈 Back to homepage</p>
            <ul className="flex text-white space-x-[3.75rem]">
              <li>Home</li>
              <li>Project</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
          <div className="flex w-8/12">
            <div className="w-auto self-end pb-9">
              <h1 className="text-white text-5xl font-bold">
                ✏️ Writing Journey
              </h1>
              <p className="mt-10 text-white font-light text-lg tracking-wider">
                Something new I'm starting for 2021 — every week or two I write
                about what I've been working on, problems I've solved.
              </p>
            </div>
            <div className="w-7/12">
              <img src="blog-img.png" className="translate-y-5 mx-auto" />
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto w-8/12 container pt-6 text-sm text-[#282828] flex">
        <div className="w-[10rem] relative mr-5 cursor-pointer">
          <div
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleCategories
                ? " icon-up rounded-lg border-b-0 rounded-b-none"
                : " icon-down rounded-lg "
            }`}
          >
            <ul onClick={() => onClickDropDownCategories()}>
              <li>{valueDropDownCategories}</li>
            </ul>
          </div>
          {dropDownCategories && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-lg rounded-t-none w-[10rem] bg-white">
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Life")}>Life</p>
              </li>
              <li>
                <p
                  onClick={() => setValueDropDownCategories("Career")}
                  className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white"
                >
                  Career
                </p>
              </li>
            </ul>
          )}
        </div>
        <div
          className="w-[10rem] relative cursor-pointer"
          onClick={() => onClickDropDownTime()}
        >
          <div
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleTime
                ? " icon-up rounded-lg border-b-0 rounded-b-none"
                : " icon-down rounded-lg "
            }`}
          >
            {valueDropDownTime}
          </div>
          {dropDownTime && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-lg rounded-t-none w-[10rem] bg-white">
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownTime("Newest")}>Newest</p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownTime("Oldest")}>Oldest</p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="container mx-auto w-8/12 container pt-14">
        <p className="text-lg font-light text-[#282828] mb-6">Januari 2022</p>
        <div className="text-lg font-semibold text-[#282828]">
          <table>
            <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE] mb-3">
              <td>24</td>
              <td>: The Element of Surprise on UX Design</td>
            </tr>
          </table>
          <table>
            <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE] mb-3">
              <td>23</td>
              <td>: UX Design bukan hanya untuk product digital?</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default WritingJourney;
