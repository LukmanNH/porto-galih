import React, { useState } from "react";
import moment from "moment";
import NavBar from "../components/NavBar";

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

  const post = [
    {
      data: {
        postsConnection: {
          edges: [
            {
              node: {
                author: {
                  bio: "Aku kayes",
                  name: "Kayes Onic",
                  id: "ckwp5gtlc2u200c86nymojb3d",
                  photo: {
                    url: "https://media.graphcms.com/3EnHv5yTxipQiPofntvK",
                  },
                },
                createdAt: "2021-12-02T16:12:09.443809+00:00",
                slug: "the-element-of-surprise-on-ux-design",
                title: "The Element of Surprise on UX Design",
                excerpt:
                  "The Element of Surprise, keadaan dimana kita gak bisa ngatur apa yang sedang kita nikmati, dan otak lebih milih untuk mengikuti dan menikmati keadaan yang sedang terjadi.",
                featureImage: {
                  url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
                },
                categories: [
                  {
                    name: "Web Development",
                    slug: "webdev",
                  },
                ],
              },
            },
            {
              node: {
                author: {
                  bio: "Aku cantik banget lohh",
                  name: "Kayes Onic",
                  id: "ckwp5gtlc2u200c86nymojb3d",
                  photo: {
                    url: "https://media.graphcms.com/3EnHv5yTxipQiPofntvK",
                  },
                },
                createdAt: "2021-12-03T00:15:58.679385+00:00",
                slug: "next-js",
                title: "Next.js is the Future of Web",
                excerpt:
                  "The Element of Surprise, keadaan dimana kita gak bisa ngatur apa yang sedang kita nikmati, dan otak lebih milih untuk mengikuti dan menikmati keadaan yang sedang terjadi.",
                featureImage: {
                  url: "https://media.graphcms.com/5dD2NEY4TUi5oBgJcf2u",
                },
                categories: [
                  {
                    name: "Web Development",
                    slug: "webdev",
                  },
                ],
              },
            },
          ],
        },
      },
    },
  ];

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96">
        <div className="h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full justify-items-center grid content-between">
          <NavBar />
          <div className="flex w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
            <div className="w-full md:w-8/12 lg:w-8/12 self-end pb-9 lg:mr-3">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl ">
                ✏️ Writing Journey
              </h1>
              <p className="mt-4 lg:mt-8 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
                Something new I'm starting for 2021 — every week or two I write
                about what I've been working on, problems I've solved.
              </p>
            </div>
            <div className="hidden md:flex md:w-4/12 lg:w-4/12">
              <img
                src="blog-img.png"
                className="md:translate-y-6 lg:translate-y-5 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container pt-6 text-sm text-[#282828] flex">
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
      <div className="container mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container pt-14">
        <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828] mb-6">
          Januari 2022
        </p>

        <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828]">
          <table>
            <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE] mb-3">
              <td>24</td>
              <td>:</td>
              <td>The Element of Surprise on UX Design</td>
            </tr>
          </table>
          <table>
            <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE] mb-3">
              <td>23</td>
              <td>:</td>
              <td>UX Design bukan hanya untuk product digital?</td>
            </tr>
          </table>
        </div>
      </div>

      {/* {post.map((data) => (
        <div
          key={data.title}
          className="container mx-auto w-8/12 container pt-14"
        >
          <p className="text-lg font-light text-[#282828] mb-6">
            {moment(data.data.postsConnection.edges.createdAt).format(
              "MMMM YYYY"
            )}
          </p> */}
      {/* {post.map((content) => {
            if (moment(data.date).format("MMMM") == "January") {
              return (
                <div className="text-lg font-semibold text-[#282828]">
                  <table>
                    <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE] mb-3">
                      <td>{moment(content.date).format("DD")}</td>
                      <td>:</td>
                      <td>{content.title}</td>
                    </tr>
                  </table>
                </div>
              );
            }
          })} */}
      {/* </div>
      ))} */}
    </>
  );
};

export default WritingJourney;
