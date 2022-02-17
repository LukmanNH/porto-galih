import React from "react";
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
      <div className="bg-hero bg-no-repeat bg-cover bg-center h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[388px]">
        <div className="h-60 sm:h-72 md:h-80 lg:h-96 xl:h-[388px] w-full justify-items-center grid content-between">
          <NavBar isNavItem={false} />
          <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 pb-14 sm:pb-8 md:pb-9 lg:pb-14 lg:pr-40 md:pr-36 sm:pr-28">
            <div className="justify-center">
              <div>
                <p className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl xl:leading-[3rem]">
                  {projects.title}
                </p>
              </div>
              <div className="hidden sm:grid grid-cols-5 sm:gap-[28px] md:gap-[38px] lg:gap-11 xl:gap-[52px] sm:text-xs lg:text-sm text-white sm:pt-5 md:pt-7 lg:pt-8 xl:pt-[42px]">
                <div className="">
                  <p className="font-light">Role</p>
                  <p className="font-medium py-[6px]">{projects.role}</p>
                </div>
                <div className="">
                  <p className="font-light">Period</p>
                  <p className="font-medium py-[6px]">{projects.period}</p>
                </div>
                <div className="">
                  <p className="font-light">Company</p>
                  <p className="font-medium py-[6px]">{projects.company}</p>
                </div>
                <div className="col-span-2">
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
      <div className="h-56 sm:h-60 md:h-64 lg:h-72 xl:h-96 bg-[#F4F8FB] pt-[78px]">
        <div className="w-11/12 md:w-10/12 mx-auto lg:w-9/12 xl:w-8/12">
          <p className="font-bold text-[1.75rem] mb-[1.75rem]">
            See other selected projects
          </p>
          <p className="mb-6">
            💰 Jenius App Re—design Concept for Competition
          </p>
          <p className="mb-6">🎨 Telkomsel B2B Platfoam Design System</p>
          <p className="mb-6">⚙️ Telkomsel DigiHub API Marketplace Revamp</p>
          <p className="mb-[144px]">✂️ UX Case Study — Barbershop Booking</p>
        </div>
      </div>
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
