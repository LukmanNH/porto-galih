import React from "react";
import Head from "next/head";
import { RichText } from "@graphcms/rich-text-react-renderer";

const ProjectDetail = ({ projects }) => {
  const content = projects.content.raw;
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
            className="font-normal break-words text-sm md:text-base lg:text-[1.25rem] text-[#282828] mb-8 lg:leading-9"
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
      <div className="container mb-[3.625rem] text-justify">
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
              <p className="font-normal break-words text-sm md:text-base lg:text-[1.25rem] mb-8 text-[#282828] lg:leading-10">
                {children}
              </p>
            ),
            h1: ({ children }) => (
              <h1 className="text-[#01549F] font-bold text-4xl">{children}</h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-[#282828] font-medium text-[2rem]">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-[#282828] font-medium text-2xl">
                {children}
              </h3>
            ),
            h4: ({ children }) => (
              <h4 className="text-[#282828] font-bold text-xl">{children}</h4>
            ),
            h5: ({ children }) => (
              <h5 className="text-[#8C8C8C] font-medium text-base">
                {children}
              </h5>
            ),
            bold: ({ children }) => <strong>{children}</strong>,
            table_cell: ({ children }) => <td className="pr-6">{children}</td>,
            image: ({ children }) => <img src={children} />,
          }}
        />
      </div>
    </>
  );
};

export default ProjectDetail;
