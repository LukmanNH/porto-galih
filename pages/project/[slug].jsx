import React from "react";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import {
  getPartOfProjects,
  getSlugOfProjects,
  getDetailProject,
} from "../../services";
import ProjectDetail from "../ProjectDetail";

const ProjectDetails = ({ projects }) => {
  return (
    <>
      <div className="bg-hero bg-cover bg-no-repeat bg-center h-auto">
        <div className=" h-auto w-full justify-items-center grid content-between">
          <NavBar isNavItem={false} isHumberger={false} />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pt-[2.375rem] pb-7 sm:pb-8 md:pb-9 lg:pb-14 lg:pr-40 md:pr-36 sm:pr-28">
            <div className="justify-center">
              <div>
                <p className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:leading-[3rem]">
                  {projects.title}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:gap-[28px] md:gap-[38px] lg:gap-11 xl:gap-[52px] text-xs lg:text-sm text-white pt-5 md:pt-7 lg:pt-8 xl:pt-[42px]">
                <div className="">
                  <p className="font-light">Role</p>
                  <p className="font-medium py-[6px]">{projects.role}</p>
                </div>
                <div className="">
                  <p className="font-light">Period</p>
                  <p className="font-medium py-[6px]">{projects.period}</p>
                </div>
                <div className="pt-3 sm:pt-0">
                  <p className="font-light">Company</p>
                  <p className="font-medium py-[6px]">{projects.company}</p>
                </div>
                <div className="pt-3 sm:col-span-2 sm:pt-0">
                  <p className="font-light">Goals</p>
                  <p className="font-medium py-[6px]">{projects.goals}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto md:pr-36 sm:pr-28 pb-16">
        <div className="py-[3.625rem]">
          {projects.featuredImage ? (
            <img src={projects.featuredImage.url} alt="" />
          ) : null}
        </div>
        <ProjectDetail projects={projects} />
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetails;

export async function getStaticProps({ params }) {
  const data = await getDetailProject(params.slug);
  return {
    props: { projects: data },
  };
}

export async function getStaticPaths() {
  const projects = await getSlugOfProjects();

  return {
    paths: projects.map(({ node: { slug } }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
