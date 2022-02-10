import React, { useState, useEffect } from "react";
import moment from "moment";
import NavBar from "../components/NavBar";
import Link from "next/link";
import { getPosts, getBlogCategories, getPostsOrderASC } from "../services";

const WritingJourney = ({ posts, postsASC }) => {
  const [dropDownCategories, setDropdownCategories] = useState(false);
  const [dropStyleCategories, setDropStyleCategories] = useState(false);
  const [valueDropDownCategories, setValueDropDownCategories] =
    useState("All Categories");
  const [valueDropDownTime, setValueDropDownTime] = useState("By Newest");
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

  const conditionalRendering = () => {
    if (valueDropDownCategories === "All Categories") {
      key.map((item) => (
        <div key={item}>
          <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
            {item}
          </p>
          <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
            {bismillah[item].map((items) => (
              <table key={items.info.slug}>
                <Link href={`/post/${items.info.slug}`}>
                  <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE]">
                    <td>{items.info.day}</td>
                    <td>:</td>
                    <td>{items.info.title}</td>
                  </tr>
                </Link>
              </table>
            ))}
          </div>
        </div>
      ));
    }
  };

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
        <div className="w-[10rem] relative mr-5 cursor-pointer">
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
                    }}
                  >
                    {item.name}
                  </p>
                </li>
              ))}
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
                ? " icon-up rounded-[0.313rem] border-b-0 rounded-b-none"
                : " icon-down rounded-[0.313rem]"
            }`}
          >
            {valueDropDownTime}
          </div>
          {dropDownTime && (
            <ul className="absolute border-2 border-[#01549F] border-t-0 rounded-[0.313rem] rounded-t-none w-[10rem] bg-white">
              <li className="p-2 hover:bg-[#2B9EDE] hover:opacity-70 hover:text-white">
                <p
                  onClick={function () {
                    setValueDropDownTime("Newest");
                    onClickDropDownTime();
                    // fungsi memanggil query yang mengurutkan berdasarkan waktu
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
                    // fungsi memanggil query yang mengurutkan berdasarkan waktu
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
        {valueDropDownCategories === "All Categories"
          ? key.map((item) => (
              <div key={item}>
                <p className="text-sm sm:text-sm md:text-base lg:text-lg font-light text-[#282828]">
                  {item}
                </p>
                <div className="text-sm sm:text-sm md:text-base lg:text-lg font-semibold text-[#282828] py-4">
                  {bismillah[item].map((items) => (
                    <table key={items.info.slug}>
                      <Link href={`/post/${items.info.slug}`}>
                        <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE]">
                          <td>{items.info.day}</td>
                          <td>:</td>
                          <td>{items.info.title}</td>
                        </tr>
                      </Link>
                    </table>
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
                    <table key={items.info.slug}>
                      <Link href={`/post/${items.info.slug}`}>
                        <tr className="cursor-pointer hover:border-b-2 border-[#2B9EDE]">
                          <td>{items.info.day}</td>
                          <td>:</td>
                          <td>{items.info.title}</td>
                        </tr>
                      </Link>
                    </table>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </>
  );
};

export default WritingJourney;

export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  const postsASC = (await getPostsOrderASC()) || [];
  return {
    props: { posts, postsASC },
  };
}
