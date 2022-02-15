import React, { useState, useEffect, useRef } from "react";
import moment from "moment";
import NavBar from "../components/NavBar";
import Link from "next/link";
import {
  getPosts,
  getBlogCategories,
  getPostsOrderASC,
  get5FirstPost,
} from "../services";

const WritingJourney = ({ posts, postsASC, first5Post }) => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");
  const [valueDropDownTime, setValueDropDownTime] = useState("By Newest");
  const [dropDownTime, setDropdownTime] = useState(false);
  const [dropStyleTime, setDropStyleTime] = useState(false);
  const [buttonValue, setbuttonValue] = useState(true);
  const dropdown = useRef(null);
  const downTime = useRef(null);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!dropDownCategories) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropStyleCategories(false);
        setDropdownCategories(false);
      }
    }
    // if (!dropDownTime) return;
    // function handleClick(event) {
    //   if (downTime.current && !downTime.current.contains(event.target)) {
    //     setDropStyleTime(false);
    //     setDropdownTime(false);
    //   }
    // }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropDownCategories]);

  useEffect(() => {
    // only add the event listener when the dropdown is opened
    if (!dropDownTime) return;
    function handleClick(event) {
      if (downTime.current && !downTime.current.contains(event.target)) {
        setDropStyleTime(false);
        setDropdownTime(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropDownTime]);

  const onClickDropDownCategories = () => {
    setDropdownCategories((b) => !b);
    setDropStyleCategories((b) => !b);
  };

  const onClickDropDownTime = () => {
    setDropdownTime((b) => !b);
    setDropStyleTime((b) => !b);
  };

  const mappedData = posts.blogPostsConnection.edges.map((x) => ({
    createdAt: moment(x.node.createdAt).format("MMMM YYYY").toString(),
    data: {
      title: x.node.title,
      day: moment(x.node.createdAt).format("dddd D"),
      slug: x.node.slug,
    },
    slug: x.node.categories,
  }));

  const bismillah = mappedData.reduce((postContent, { createdAt, data }) => {
    if (!postContent[createdAt]) postContent[createdAt] = [];
    postContent[createdAt].push({
      info: { title: data.title, day: data.day, slug: data.slug },
    });

    return postContent;
  }, {});

  const key = Object.keys(bismillah);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getBlogCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  const data = posts.blogPostsConnection.edges.filter((item) =>
    item.node.blogCategories.some(
      (items) => items.name === valueDropDownCategories
    )
  );

  const mappedData2 = data.map((x) => ({
    createdAt: moment(x.node.createdAt).format("MMMM YYYY").toString(),
    data: {
      title: x.node.title,
      day: moment(x.node.createdAt).format("dddd D"),
      slug: x.node.slug,
    },
    slug: x.node.categories,
  }));

  const bismillah2 = mappedData2.reduce((postContent, { createdAt, data }) => {
    if (!postContent[createdAt]) postContent[createdAt] = [];
    postContent[createdAt].push({
      info: { title: data.title, day: data.day, slug: data.slug },
    });

    return postContent;
  }, {});

  const key2 = Object.keys(bismillah2);

  const mappedData3 = postsASC.blogPostsConnection.edges.map((x) => ({
    createdAt: moment(x.node.createdAt).format("MMMM YYYY").toString(),
    data: {
      title: x.node.title,
      day: moment(x.node.createdAt).format("dddd D"),
      slug: x.node.slug,
    },
    slug: x.node.categories,
  }));

  const bismillah3 = mappedData3.reduce((postContent, { createdAt, data }) => {
    if (!postContent[createdAt]) postContent[createdAt] = [];
    postContent[createdAt].push({
      info: { title: data.title, day: data.day, slug: data.slug },
    });

    return postContent;
  }, {});

  const key3 = Object.keys(bismillah3);

  const data2 = postsASC.blogPostsConnection.edges.filter((item) =>
    item.node.blogCategories.some(
      (items) => items.name === valueDropDownCategories
    )
  );

  const mappedData4 = data2.map((x) => ({
    createdAt: moment(x.node.createdAt).format("MMMM YYYY").toString(),
    data: {
      title: x.node.title,
      day: moment(x.node.createdAt).format("dddd D"),
      slug: x.node.slug,
    },
    slug: x.node.categories,
  }));

  const bismillah4 = mappedData4.reduce((postContent, { createdAt, data }) => {
    if (!postContent[createdAt]) postContent[createdAt] = [];
    postContent[createdAt].push({
      info: { title: data.title, day: data.day, slug: data.slug },
    });

    return postContent;
  }, {});

  const key4 = Object.keys(bismillah4);

  const getPostFirst5 = first5Post.blogPostsConnection.edges.map((x) => ({
    createdAt: moment(x.node.createdAt).format("MMMM YYYY").toString(),
    data: {
      title: x.node.title,
      day: moment(x.node.createdAt).format("dddd D"),
      slug: x.node.slug,
    },
    slug: x.node.categories,
  }));

  const groupedDataPostFirst5 = getPostFirst5.reduce(
    (postContent, { createdAt, data }) => {
      if (!postContent[createdAt]) postContent[createdAt] = [];
      postContent[createdAt].push({
        info: { title: data.title, day: data.day, slug: data.slug },
      });
      return postContent;
    },
    {}
  );
  const key5 = Object.keys(groupedDataPostFirst5);

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96">
        <div className="h-60 sm:h-64 md:h-72 lg:h-80 xl:h-96 w-full justify-items-center grid content-between">
          <NavBar isNavItem={true} />
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
        <div className="w-[10rem] relative mr-5 cursor-pointer" ref={dropdown}>
          <div
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleCategories
                ? " icon-up rounded-[0.313rem] border-b-0 rounded-b-none"
                : " icon-down rounded-[0.313rem]"
            }`}
          >
            <ul onClick={() => onClickDropDownCategories()}>
              <li>{valueDropDownCategories}</li>
            </ul>
          </div>
          {dropDownCategories && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-[0.313rem] rounded-t-none w-[10rem] bg-white">
              {valueDropDownCategories != "All Categories" ? (
                <li>
                  <p
                    onClick={function () {
                      setValueDropDownCategories("All Categories");
                      onClickDropDownCategories();
                      setbuttonValue(false);
                    }}
                    className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white"
                  >
                    All Categories
                  </p>
                </li>
              ) : null}
              {categories.map((item) => (
                <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                  <p
                    onClick={function () {
                      setValueDropDownCategories(item.name);
                      onClickDropDownCategories();
                      setbuttonValue(false);
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="w-[10rem] relative cursor-pointer" ref={downTime}>
          <div
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleTime
                ? " icon-up rounded-[0.313rem] border-b-0 rounded-b-none"
                : " icon-down rounded-[0.313rem]"
            }`}
          >
            <ul onClick={() => onClickDropDownTime()}>
              <li>{valueDropDownTime}</li>
            </ul>
          </div>
          {dropDownTime && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-[0.313rem] rounded-t-none w-[10rem] bg-white">
              {valueDropDownTime !== "By Newest" ? (
                <li>
                  <p
                    onClick={function () {
                      setValueDropDownTime("By Newest");
                      onClickDropDownTime();
                      setbuttonValue(false);
                    }}
                    className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white"
                  >
                    By Newest
                  </p>
                </li>
              ) : null}
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p
                  onClick={function () {
                    setValueDropDownTime("Newest");
                    onClickDropDownTime();
                    setbuttonValue(false);
                  }}
                >
                  Newest
                </p>
              </li>
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p
                  onClick={function () {
                    setValueDropDownTime("Oldest");
                    onClickDropDownTime();
                    setbuttonValue(false);
                  }}
                >
                  Oldest
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="container mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container pt-14">
        {!buttonValue
          ? valueDropDownTime !== "Oldest"
            ? valueDropDownCategories === "All Categories"
              ? key.map((item) => (
                  <div key={item}>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
                      {item}
                    </p>
                    <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-5">
                      {bismillah[item].map((items) => (
                        <div
                          key={items.info.slug}
                          className="w-[fit-content] pb-[0.875rem]"
                        >
                          <Link href={`/post/${items.info.slug}`}>
                            <div className="container flex cursor-pointer !m-0 border-transparent border-b-[3px] hover:border-[#2B9EDE] ">
                              <p>{items.info.day}</p>
                              <p className="px-2">{" : "}</p>
                              <p>{items.info.title}</p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              : key2.map((item) => (
                  <div key={item + 1}>
                    <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
                      {item}
                    </p>
                    <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
                      {bismillah2[item].map((items) => (
                        <div
                          key={items.info.slug}
                          className="w-[fit-content] pb-[0.875rem]"
                        >
                          <Link href={`/post/${items.info.slug}`}>
                            <div className="container flex cursor-pointer !m-0 border-transparent border-b-[3px] hover:border-[#2B9EDE] ">
                              <p>{items.info.day}</p>
                              <p className="px-2">{" : "}</p>
                              <p>{items.info.title}</p>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </div>
                ))
            : valueDropDownCategories === "All Categories"
            ? key3.map((item) => (
                <div key={item}>
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
                    {item}
                  </p>
                  <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
                    {bismillah3[item].map((items) => (
                      <div
                        key={items.info.slug}
                        className="w-[fit-content] pb-[0.875rem]"
                      >
                        <Link href={`/post/${items.info.slug}`}>
                          <div className="container flex cursor-pointer !m-0 border-transparent border-b-[3px] hover:border-[#2B9EDE] ">
                            <p>{items.info.day}</p>
                            <p className="px-2">{" : "}</p>
                            <p>{items.info.title}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            : key4.map((item) => (
                <div key={item + 1}>
                  <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
                    {item}
                  </p>
                  <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
                    {bismillah4[item].map((items) => (
                      <div
                        key={items.info.slug}
                        className="w-[fit-content] pb-[0.875rem]"
                      >
                        <Link href={`/post/${items.info.slug}`}>
                          <div className="container flex cursor-pointer !m-0 border-transparent border-b-[3px] hover:border-[#2B9EDE] ">
                            <p>{items.info.day}</p>
                            <p className="px-2">{" : "}</p>
                            <p>{items.info.title}</p>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))
          : key5.map((item) => (
              <div key={item + 1}>
                <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
                  {item}
                </p>
                <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
                  {groupedDataPostFirst5[item].map((items) => (
                    <div
                      key={items.info.slug}
                      className="w-[fit-content] pb-[0.875rem]"
                    >
                      <Link href={`/post/${items.info.slug}`}>
                        <div className="container flex cursor-pointer !m-0 border-transparent border-b-[3px] hover:border-[#2B9EDE] ">
                          <p>{items.info.day}</p>
                          <p className="px-2">{" : "}</p>
                          <p>{items.info.title}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
      <div className="container mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 container mt-[5.5rem] mb-[6.25rem]">
        <div className="text-center">
          {valueDropDownCategories !== "All Categories" ||
          valueDropDownTime !== "By Newest" ? null : (
            <button
              className="cursor-pointer text-base font-medium text-white bg-[#01549F] hover:bg-[#282828] transition duration-200 mx-auto hover:text-white shadow-custom-button py-[0.875rem] w-[11.25rem] rounded-[5px]"
              onClick={() => setbuttonValue(!buttonValue)}
            >
              {buttonValue ? "See more article 👇" : "See less article 👆"}
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default WritingJourney;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const postsASC = (await getPostsOrderASC()) || [];
  const first5Post = (await get5FirstPost()) || [];
  return {
    props: { posts, postsASC, first5Post },
  };
}
