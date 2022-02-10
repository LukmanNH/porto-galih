import React from "react";
import NavBar from "../../components/NavBar";
import PostDetail from "../PostDetail";
import { getPosts, getPostDetails, getPosts2 } from "../../services";
import moment from "moment";

const PostDetails = ({ post }) => {
  return (
    <>
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80">
        <div className="h-56 sm:h-60 md:h-64 lg:h-72 xl:h-80 w-full justify-items-center grid content-between">
          <NavBar isNavItem={false} />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pb-14 lg:pr-40 md:pr-36 sm:pr-28">
            <div className="w-auto justify-center">
              <p className="text-white font-semibold text-2xl sm:text-2xl md:text-3xl lg:text-4xl">
                {post.title}
              </p>
              <p className="mt-3 lg:mt-7 text-white font-light text-sm sm:text-sm md:text-base lg:text-lg tracking-wider">
                📅 {moment(post.createdAt).format("MMM DD, YYYY")} — by Galih
                Putra
              </p>
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
          <div className="border-t-2 border-b-2 border-dashed border-[#000000]  p-5 hover:blueHover">
            <p className="font-semibold lg:text-xl md:text-base sm:text-sm pb-2">
              👋 Say hay! and Book 30 minutes 1:1 chat
            </p>
            <p className="font-light italic text-[#878787] lg:text-base md:text-base sm:text-sm">
              Get career advice or portfolio review. You can book a group
              session too. <br />
              More details →
            </p>
          </div>
          <div className="border-b-2 border-dashed border-[#000000] p-5 hover:blueHover">
            <p className="font-semibold lg:text-xl md:text-base sm:text-sm pb-2">
              ☕️ Buy me a coffee!
            </p>
            <p className="font-light italic text-[#878787] lg:text-base md:text-base sm:text-sm">
              Or you can give me an appreciation by giving me a cup of coffee
              😁. <br />
              More details →
            </p>
          </div>
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
