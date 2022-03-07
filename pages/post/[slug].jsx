import React from "react";
import NavBar from "../../components/NavBar";
import PostDetail from "../../components/PostDetail";
import Loader from "../../components/Loader";
import { getPosts, getPostDetails, getPosts2 } from "../../services";
import { useRouter } from "next/router";
import moment from "moment";

const PostDetails = ({ post }) => {
  const joinCategory = [];
  const router = useRouter();
  console.log(router.isFallback);

  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat bg-center h-auto">
        <div className="h-auto w-full justify-items-center grid content-between">
          <NavBar isNavItem={false} isHumberger={false} />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pt-[2.375rem] pb-7 sm:pb-8 md:pb-9 lg:pb-14 2xl:pb-20 lg:pr-40 md:pr-36 sm:pr-28 lg:pt-16 2xl:pt-32">
            <div className="justify-center">
              <p className="text-white font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem] 2xl:text-7xl 2xl:leading-[6rem]">
                {post.title}
              </p>
              <div className="flex text-sm md:text-base 2xl:text-3xl text-white pt-5 md:pt-7 lg:pt-8 2xl:pt-14">
                <div className="mr-24">
                  <p className="font-light">Date</p>
                  <p className="font-medium py-[6px] 2xl:py-5">
                    {moment(post.createdAt).format("DD MMMM YYYY")}
                  </p>
                </div>
                <div className="">
                  <p className="font-light">Category</p>
                  {post.blogCategories.map((item, index) => {
                    joinCategory.push(item.name);
                  })}
                  <p className="font-medium py-[6px] 2xl:py-5">
                    {joinCategory.join(", ")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:pr-36 sm:pr-28 pb-[6.25rem] pt-12">
        {post.featuredImage !== null ? (
          <div className="py-[3.625rem]">
            <img src={post.featuredImage.url} alt="" />
          </div>
        ) : null}

        <PostDetail post={post} />
        <div>
          <a href="https://calendly.com/hellogalih" target="_blank">
            <div className="border-t-2 border-b-2 border-dashed border-[#878787]  p-5 2xl:p-8 hover:blueHover">
              <div className="flex items-center font-semibold lg:text-xl 2xl:text-3xl md:text-base sm:text-sm pb-2 2xl:pb-4">
                <img
                  src="../../👋.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-4 md:h-5 lg:h-6 2xl:h-8"
                />
                Say hay! and Book 30 minutes 1:1 chat
              </div>
              <p className="font-light italic text-[#878787] lg:text-base md:text-base sm:text-sm 2xl:text-xl">
                Get career advice or portfolio review. You can book a group
                session too. <br />
                More details →
              </p>
            </div>
          </a>
          <a href="https://www.buymeacoffee.com/hellogalih" target="_blank">
            <div className="cursor-pointer border-b-2 border-dashed border-[#878787] p-5 2xl:p-8 hover:blueHover">
              <div className="flex items-center font-semibold lg:text-xl 2xl:text-3xl md:text-base sm:text-sm pb-2 2xl:pb-4">
                <img
                  src="../../☕️.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-4 md:h-5 lg:h-6 2xl:h-8"
                />
                Buy me a coffee!
              </div>
              <div className="font-light italic text-[#878787] lg:text-base md:text-base sm:text-sm 2xl:text-xl">
                <div className="flex items-end md:items-start">
                  Or you can give me an appreciation by giving me a cup of
                  coffee.
                </div>
                More details →
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
    revalidate: 30,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts2();

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: true,
  };
}
