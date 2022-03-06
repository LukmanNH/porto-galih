import React from "react";
import Head from "next/head";
import { RichText } from "@graphcms/rich-text-react-renderer";

const ProjectDetail = ({ projects }) => {
  console.log(projects);
  const content = projects.content.raw;
  console.log(content);
  const getContentFragment = (index, text, obj, type) => {
    let modifiedText = text;

    if (obj) {
      if (obj.bold) {
        modifiedText = <b key={index}>{text}</b>;
      }

      if (obj.italic) {
        modifiedText = <em key={index}>{text}</em>;
      }

      if (obj.underline) {
        modifiedText = <u key={index}>{text}</u>;
      }
    }

    switch (type) {
      case "heading-three":
        return (
          <h3 key={index} className="text-xl font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h3>
        );
      case "paragraph":
        return (
          <p
            key={index}
            className="font-normal text-sm md:text-base lg:text-[1.25rem] text-[#282828] mb-8 lg:leading-10"
          >
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </p>
        );
      case "heading-four":
        return (
          <h4 key={index} className="text-md font-semibold mb-4">
            {modifiedText.map((item, i) => (
              <React.Fragment key={i}>{item}</React.Fragment>
            ))}
          </h4>
        );
      case "image":
        return (
          <img
            key={index}
            alt={obj.title}
            height={obj.height}
            width={obj.width}
            src={obj.src}
          />
        );
      default:
        return modifiedText;
    }
  };
  return (
    <>
      <Head>
        <title>{projects.title}</title>
        <meta property="og:title" content={projects.title} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={projects.excerpt} />
        <meta property="og:image" content={projects.thumbnail.url} />
        <meta
          property="og:url"
          content={`http://https://porto-galih-lukmannh.vercel.app/${projects.slug}`}
        />
        <meta
          property="og:site_name"
          content={`${projects.title} | Portofolio ueg nihh liat dongg`}
        ></meta>
      </Head>
      <div className="mb-[3.625rem] text-justify">
        {/* {projects.content.raw.children.map((typeObj, index) => {
        const children = typeObj.children.map((item, itemIndex) =>
          getContentFragment(itemIndex, item.text, item)
        );

        return getContentFragment(index, children, typeObj, typeObj.type);
      })} */}
        <RichText
          content={content}
          renderers={{
            p: ({ children }) => (
              <p className="font-normal text-sm md:text-base lg:text-[1.25rem] text-[#282828] mb-8 lg:leading-10">
                {children}
              </p>
            ),
            h1: ({ children }) => <h1 className="text-white">{children}</h1>,
            bold: ({ children }) => <strong>{children}</strong>,
            table_cell: ({ children }) => <td className="pr-6">{children}</td>,
          }}
        />
      </div>
    </>
  );
};

export default ProjectDetail;
