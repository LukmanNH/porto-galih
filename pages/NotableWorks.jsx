import React, { useState } from "react";
import NavBar from "../components/NavBar";
const NotableWorks = () => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const onClickDropDownCategories = () => {
    setDropdownCategories(!dropDownCategories);
    setDropStyleCategories(!dropStyleCategories);
  };
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");

  // const createPattern = (length) => {
  //   const pattern = [];
  //   let x = true;
  //   for (let y = 1; y <= length; y++) {
  //     if (x) pattern.push(y);
  //     if (y % 2 == 0) x = !x;
  //   }
  //   return pattern;
  // };

  const project = {
    data: {
      postsConnection: {
        edges: [
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Revamp the Telkomsel B2B Platform Client Dashboard",
              excerpt:
                "Merge multiple adivpplication dashboards into one with seamless user experiences.",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Website",
                  slug: "webdev",
                },
                {
                  name: "B2B Service",
                  slug: "webdev",
                },
              ],
              lock: true,
            },
          },
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Jenius App Re—design Concept for Competition",
              excerpt:
                "Improve the User interface and user flow of using the Jenius mobile banking application",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Mobile",
                  slug: "webdev",
                },
                {
                  name: "Mobile Banking",
                  slug: "webdev",
                },
              ],
              lock: true,
            },
          },
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Jenius App Re—design Concept for Competition",
              excerpt:
                "Improve the User interface and user flow of using the Jenius mobile banking application",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Mobile",
                  slug: "webdev",
                },
                {
                  name: "Mobile Banking",
                  slug: "webdev",
                },
              ],
              lock: false,
            },
          },
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Jenius App Re—design Concept for Competition",
              excerpt:
                "Improve the User interface and user flow of using the Jenius mobile banking application",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Mobile",
                  slug: "webdev",
                },
                {
                  name: "Mobile Banking",
                  slug: "webdev",
                },
              ],
              lock: true,
            },
          },
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Jenius App Re—design Concept for Competition",
              excerpt:
                "Improve the User interface and user flow of using the Jenius mobile banking application",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Mobile",
                  slug: "webdev",
                },
                {
                  name: "Mobile Banking",
                  slug: "webdev",
                },
              ],
              lock: false,
            },
          },
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Jenius App Re—design Concept for Competition",
              excerpt:
                "Improve the User interface and user flow of using the Jenius mobile banking application",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Mobile",
                  slug: "webdev",
                },
                {
                  name: "Mobile Banking",
                  slug: "webdev",
                },
              ],
              lock: true,
            },
          },
          {
            node: {
              createdAt: "2021-12-02T16:12:09.443809+00:00",
              slug: "the-element-of-surprise-on-ux-design",
              title: "Jenius App Re—design Concept for Competition",
              excerpt:
                "Improve the User interface and user flow of using the Jenius mobile banking application",
              featureImage: {
                url: "https://media.graphcms.com/waETOQNiShedAwMtcJAs",
              },
              categories: [
                {
                  name: "Mobile",
                  slug: "webdev",
                },
                {
                  name: "Mobile Banking",
                  slug: "webdev",
                },
              ],
              lock: false,
            },
          },
        ],
      },
    },
  };

  // const pattern = useState(
  //   createPattern(project.data.postsConnection.edges.length)
  // )[0];

  function truncateString(str, num) {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  }

  const dataProject = project.data.postsConnection.edges;

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-60 sm:h-72 md:h-84 lg:h-96">
        <div className="h-60 sm:h-72 md:h-84 lg:h-96 w-full justify-items-center grid content-between">
          <NavBar isNavItem={true} />
          <div className="flex w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
            <div className="w-full md:w-8/12 lg:w-8/12 self-end pb-9 lg:mr-3">
              <h1 className="text-white font-bold text-3xl sm:text-3xl md:text-4xl lg:text-5xl">
                🗃 Notable Works
              </h1>
              <p className="mt-4 lg:mt-8 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
                Some project need password, contact{" "}
                <span className="font-medium underline">
                  windawan26@gmail.com
                </span>{" "}
                to gain access to the project, — Only selected cases granted.
              </p>
            </div>
            <div className="hidden md:flex md:w-4/12 lg:w-4/12">
              <img
                src="../notableWork-img.png"
                className="md:translate-y-6 lg:translate-y-5 mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container pt-6 text-sm text-[#282828] flex mb-14">
        <div className="w-[10rem] relative mr-5 cursor-pointer">
          <div
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleCategories
                ? " icon-up rounded-md border-b-0 rounded-b-none"
                : " icon-down rounded-md "
            }`}
          >
            <ul onClick={() => onClickDropDownCategories()}>
              <li>{valueDropDownCategories}</li>
            </ul>
          </div>
          {dropDownCategories && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-md rounded-t-none w-[10rem] bg-white">
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Mobile")}>
                  Mobile
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Website")}>
                  Website
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("B2B Service")}>
                  B2B Service
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Mobile Banking")}>
                  Mobile Banking
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p onClick={() => setValueDropDownCategories("Design System")}>
                  Design System
                </p>
              </li>
              <li>
                <p
                  onClick={() => setValueDropDownCategories("Service App")}
                  className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white"
                >
                  Service App
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto mb-28 container">
        {/* <-- START Jenius App Re—design SECTION --> */}
        <div className="grid grid-cols-2 gap-6 sm:gap-7 md:gap-8 lg:gap-[38px]">
          {dataProject.map((value, index) => (
            <div
              className={`grid ${
                index != 2 && index != 3
                  ? " col-span-2 md:col-span-1 lg:col-span-2"
                  : "col-span-2 md:col-span-1"
              }`}
              key={index}
            >
              <div
                className={`rounded-md hover:shadow-custom-card bg-[#EEF2F5] ${
                  index != 2 && index != 3 ? " lg:flex  " : " container "
                }`}
              >
                <div
                  className={`h-[280px] my-4 ${
                    index != 2 && index != 3
                      ? " order-last lg:w-6/12 mx-4 "
                      : " mx-4 "
                  }`}
                >
                  <img
                    src="../imgPost.png"
                    className="w-full h-full rounded-md"
                    alt=""
                  />
                </div>
                <div
                  className={`mx-4 my-[38px] lg:mx-10 ${
                    index != 2 && index != 3
                      ? " lg:w-6/12 "
                      : "  lg:mb-[38px] mt[17px] "
                  }`}
                >
                  <h1 className="font-bold text-[1.3rem] sm:text-[1.5rem] lg:text-[1.625rem] xl:text-[1.75rem]">
                    {/* {truncateString(`${value.node.title}`, 4)} */}
                    {value.node.title}
                  </h1>
                  <div className="flex font-light text-[#808080] my-2 text-xs sm:text-sm">
                    <p>{value.node.categories[0].name}</p>
                    <span className="h-[5px] w-[5px] bg-[#808080] rounded-full inline-block mx-3 self-center"></span>
                    <p>{value.node.categories[1].name}</p>
                  </div>
                  <p className="font-normal text-[#282828] mb-[1.438rem] text-xs sm:text-sm">
                    {value.node.excerpt}
                  </p>
                  <div className="cursor-pointer flex justify-center bg-white hover:bg-[#282828] hover:text-white shadow-custom-button py-[0.625rem] w-[9.125rem] rounded-[5px] font-medium text-sm text-[#01549F]">
                    <p className="mr-[10px]">View Project</p>
                    {value.node.lock ? (
                      <img
                        width={18}
                        height={18}
                        src="../lock-icon.png"
                        alt=""
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NotableWorks;
