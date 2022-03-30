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
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

const WritingJourney = ({ posts, postsASC, first5Post }) => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");
  const [valueDropDownTime, setValueDropDownTime] = useState("By Newest");
  const [dropDownTime, setDropdownTime] = useState(false);
  const [dropStyleTime, setDropStyleTime] = useState(false);
  const [buttonValue, setbuttonValue] = useState(true);
  const [showButton, setShowButton] = useState(true);
  const dropdown = useRef(null);
  const downTime = useRef(null);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 50,
    });
  });

  useEffect(() => {
    if (!dropDownCategories) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setDropStyleCategories(false);
        setDropdownCategories(false);
      }
    }
    window.addEventListener("click", handleClick);
    // clean up
    return () => window.removeEventListener("click", handleClick);
  }, [dropDownCategories]);

  useEffect(() => {
    if (!dropDownTime) return;
    function handleClick(event) {
      if (downTime.current && !downTime.current.contains(event.target)) {
        setDropStyleTime(false);
        setDropdownTime(false);
      }
    }
    window.addEventListener("click", handleClick);
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
      day: moment(x.node.createdAt).format("DD"),
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
      day: moment(x.node.createdAt).format("DD"),
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
      day: moment(x.node.createdAt).format("DD"),
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
      day: moment(x.node.createdAt).format("DD"),
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
      day: moment(x.node.createdAt).format("DD"),
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

  const renderPost = () => {
    if (
      buttonValue &&
      valueDropDownCategories === "All Categories" &&
      (valueDropDownTime === "By Newest" || valueDropDownTime === "Newest")
    ) {
      return key5.map((item) => (
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
                  <div className="container flex cursor-pointer sm:w-full">
                    <p className="line-clamp-1 !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE]">
                      {items.info.day} : {items.info.title}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      ));
    } else {
      if (
        valueDropDownCategories === "All Categories" &&
        (valueDropDownTime === "By Newest" || valueDropDownTime === "Newest")
      ) {
        return key.map((item) => (
          <div key={item}>
            <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
              {item}
            </p>
            <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
              {bismillah[item].map((items) => (
                <div
                  key={items.info.slug}
                  className="w-[fit-content] pb-[0.875rem]"
                >
                  <Link href={`/post/${items.info.slug}`}>
                    <div className="container flex cursor-pointer sm:w-full">
                      <p className="line-clamp-1 !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE]">
                        {items.info.day} : {items.info.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ));
      } else if (
        valueDropDownCategories !== "All Categories" &&
        (valueDropDownTime === "By Newest" || valueDropDownTime === "Newest")
      ) {
        return key2.map((item) => (
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
                    <div className="container flex cursor-pointer sm:w-full">
                      <p className="line-clamp-1 !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE]">
                        {items.info.day} : {items.info.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ));
      } else if (
        valueDropDownCategories === "All Categories" &&
        valueDropDownTime === "Oldest"
      ) {
        return key3.map((item) => (
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
                    <div className="container flex cursor-pointer sm:w-full">
                      <p className="line-clamp-1 !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE]">
                        {items.info.day} : {items.info.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ));
      } else if (
        valueDropDownCategories !== "All Categories" &&
        valueDropDownTime === "Oldest"
      ) {
        return key4.map((item) => (
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
                    <div className="container flex cursor-pointer sm:w-full">
                      <p className="line-clamp-1 !m-0 border-transparent border-b-[0.188rem] hover:border-[#2B9EDE]">
                        {items.info.day} : {items.info.title}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ));
      }
    }
  };

  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-[15.25rem] sm:h-[18.25rem] md:h-[20.25rem] lg:h-[22.25rem] xl:h-[24.25rem]">
        <div className="h-[15.25rem] sm:h-[18.25rem] md:h-[20.25rem] lg:h-[22.25rem] xl:h-[24.25rem] 2xl:h-[24.25rem] w-full justify-items-center grid content-between">
          <NavBar isNavItem={true} isHumberger={true} />
          <div className="flex w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 2xl:w-8/12 max-w-screen-lg">
            <div className="w-full md:w-8/12 lg:w-8/12 xl:w-8/12 self-end pb-9">
              <div className="flex items-end text-white font-bold text-3xl md:text-3xl lg:text-5xl 2xl:text-5xl">
                <img
                  src="../✏️.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-8 md:h-9 lg:h-12"
                />
                Writing Journey
              </div>
              <p className="mt-4 lg:mt-8 text-white font-light text-xs leading-[18px] sm:text-sm md:text-base lg:text-lg tracking-wider lg:leading-8">
                Something new I'm starting for 2021 — every week or two I write
                about what I've been working on, problems I've solved.
              </p>
            </div>
            <div className="hidden md:flex md:w-4/12">
              <img
                src="blog-img.svg"
                className="md:translate-y-5 lg:translate-y-7 xl:translate-y-9 2xl:translate-y-9"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-screen-lg pt-6 mb-14 text-xs sm:text-sm text-[#282828] flex relative">
        <div
          className="w-[9rem] sm:w-[10rem] absolute mr-5 cursor-pointer"
          ref={dropdown}
        >
          <div
            onClick={() => onClickDropDownCategories()}
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleCategories
                ? " icon-up rounded-[0.313rem] border-b-0 rounded-b-none"
                : " icon-down rounded-[0.313rem]"
            }`}
          >
            <ul>
              <li>{valueDropDownCategories}</li>
            </ul>
          </div>
          {dropDownCategories && (
            <div className="absolute w-[9rem] sm:w-[10rem]">
              <ul className="border-2 border-[#01549F] border-t-0 rounded-[0.313rem] rounded-t-none bg-white">
                {valueDropDownCategories != "All Categories" ? (
                  <li>
                    <p
                      onClick={function () {
                        setValueDropDownCategories("All Categories");
                        onClickDropDownCategories();
                        setShowButton(false);
                        setbuttonValue(true);
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
                        setShowButton(false);
                        setbuttonValue(false);
                      }}
                    >
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div
          className="w-[9rem] sm:w-[10rem] absolute cursor-pointer left-[9.4rem] sm:left-[11.4rem]"
          ref={downTime}
        >
          <div
            onClick={() => onClickDropDownTime()}
            className={`border-2 border-[#01549F] p-3 ${
              dropStyleTime
                ? " icon-up rounded-[0.313rem] border-b-0 rounded-b-none"
                : " icon-down rounded-[0.313rem]"
            }`}
          >
            <ul>
              <li>{valueDropDownTime}</li>
            </ul>
          </div>
          {dropDownTime && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-[0.313rem] rounded-t-none w-[9rem] sm:w-[10rem] bg-white">
              {valueDropDownTime !== "By Newest" ? (
                <li>
                  <p
                    onClick={function () {
                      setValueDropDownTime("By Newest");
                      onClickDropDownTime();
                      setShowButton(true);
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
                    setShowButton(true);
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
                    setShowButton(false);
                    if (valueDropDownCategories === "All Categories") {
                      buttonValue = true;
                    } else {
                      setbuttonValue(false);
                      setShowButton(false);
                    }
                  }}
                >
                  Oldest
                </p>
              </li>
            </ul>
          )}
        </div>
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-screen-lg pt-14">
        {renderPost()}
      </div>
      <div className="container-w-full mx-auto w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 max-w-screen-lg mt-[5.5rem] mb-[6.25rem]">
        <div className="text-center">
          {valueDropDownCategories !== "All Categories" &&
          valueDropDownTime === "Oldest" ? null : valueDropDownCategories ===
              "All Categories" && valueDropDownTime !== "Oldest" ? (
            <div
              className="cursor-pointer text-base font-medium grid text-white bg-[#01549F] hover:bg-[#282828] transition duration-200 mx-auto hover:text-white shadow-custom-button py-[0.875rem] w-[11.25rem] rounded-[0.313rem]"
              onClick={() => setbuttonValue(!buttonValue)}
            >
              {!buttonValue ? (
                <div className="flex items-center justify-self-center">
                  See less article
                  <img src="../👆.svg" alt="" className="pl-1 h-4" />
                </div>
              ) : (
                <div className="flex items-center justify-self-center">
                  See more article
                  <img src="../👇.svg" alt="" className="pl-1 h-4" />
                </div>
              )}
            </div>
          ) : null}
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
    revalidate: 30,
  };
}
