import React from "react";
import NavBar from "../../components/NavBar";
import PostDetail from "../PostDetail";
import { getPosts, getPostDetails, getPosts2 } from "../../services";
import moment from "moment";

const PostDetails = ({ post }) => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-[14.75rem] sm:h-[15.75rem] md:h-[16.75rem] lg:h-[18.75rem] xl:h-[19.75rem]">
        <div className="h-[14.75rem] sm:h-[15.75rem] md:h-[16.75rem] lg:h-[18.75rem] xl:h-[19.75rem] w-full justify-items-center grid content-between">
          <NavBar isNavItem={false} isHumberger={false} />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pb-6 md:pb-8 lg:pb-12 lg:pr-40 md:pr-36 sm:pr-28">
            <div className="w-auto justify-center">
              <p className="text-white font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl lg:leading-[3rem]">
                {post.title}
              </p>
              <div className="flex items-center mt-3 lg:mt-7 text-white font-light text-sm sm:text-sm md:text-base lg:text-[1.25rem] tracking-wider">
                <img
                  src="../../📅.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-[0.875rem] md:h-4 lg:h-[1.125rem]"
                />
                {moment(post.createdAt).format("MMM DD, YYYY")} — by Galih Putra
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:pr-36 sm:pr-28 pb-[6.25rem]">
        <div className="py-[3.625rem]">
          {post.featuredImage ? (
            <img src={post.featuredImage.url} alt="" />
          ) : null}
        </div>
        <PostDetail post={post} />
        <div>
          <a href="https://calendly.com/hellogalih" target="_blank">
            <div className="border-t-2 border-b-2 border-dashed border-[#878787]  p-5 hover:blueHover">
              <div className="flex items-center font-semibold lg:text-xl md:text-base sm:text-sm pb-2">
                <img
                  src="../../👋.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-4 md:h-5 lg:h-6"
                />
                Say hay! and Book 30 minutes 1:1 chat
              </div>
              <p className="font-light italic text-[#878787] lg:text-base md:text-base sm:text-sm">
                Get career advice or portfolio review. You can book a group
                session too. <br />
                More details →
              </p>
            </div>
          </a>
          <a href="https://www.buymeacoffee.com/hellogalih" target="_blank">
            <div className="cursor-pointer border-b-2 border-dashed border-[#878787] p-5 hover:blueHover">
              <div className="flex items-center font-semibold lg:text-xl md:text-base sm:text-sm pb-2">
                <img
                  src="../../☕️.svg"
                  alt=""
                  className="pr-1 md:pr-2 h-4 md:h-5 lg:h-6"
                />
                Buy me a coffee!
              </div>
              <div className="font-light italic text-[#878787] lg:text-base md:text-base sm:text-sm">
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
  };
}

export async function getStaticPaths() {
  const posts = await getPosts2();

  return {
    paths: posts.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
