"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// components
import Image from "next/image";

// css blog
import "./blog.css";

// third party
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { createClient } from "contentful";

// utils
import CovertAltFormat from "@/utils/ConvertAltFormat";
import Link from "next/link";
import FormatDate from "@/utils/FormatDate";

// Heading 2 Components
const Heading2 = ({ children }) => {
  return (
    <h2 id={CovertAltFormat(children[0])} className="align-center">
      {children}
    </h2>
  );
};

// Embed Photo Components
const EmbedPhoto = ({ dataPhoto }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col my-8">
      <Image
        src={"https:" + dataPhoto.file.url}
        width={1000}
        height={1000}
        alt={CovertAltFormat(dataPhoto.title)}
        title={CovertAltFormat(dataPhoto.title)}
        className="object-cover w-[80%] md:w-[50%] rounded-lg"
      />
      <div className="w-full -mt-3 flex justify-center">
        <p>
          <span className="text-label-lg text-center max-w-sm">
            {dataPhoto?.description}
          </span>
        </p>
      </div>
    </div>
  );
};

// Embed Blog Entry
const EmbedBlogEntry = ({ dataBlog, target }) => {
  return (
    <Link
      href={`/blog/${dataBlog.slug}`}
      className="w-full flex justify-center"
    >
      <div className="group flex justify-between items-center sm:flex-row flex-col my-4 border rounded-lg border-cinchy-primary-neutral-600 bg-white shadow-lg w-full cursor-pointer">
        {/* Image */}
        <div className="sm:w-[30%] w-full h-[170px] overflow-hidden sm:rounded-tl-lg sm:rounded-bl-lg sm:rounded-tr-none rounded-t-lg">
          <Image
            src={"https:" + dataBlog.thumbnail.fields.file.url}
            alt={CovertAltFormat(dataBlog.thumbnail.fields.title)}
            width={1000}
            height={1000}
            className="h-full w-full object-cover group-hover:scale-110 ease-in-out duration-300"
          />
        </div>

        {/* body */}
        <div className="sm:pr-9 px-3 py-3 sm:w-[65%] w-full text-cinchy-primary-green-950 capitalize group-hover:text-cinchy-secondary-green-500 ease-in-out duration-300">
          <h3>{dataBlog.title}</h3>
          <p>
            Created at:{"  "}
            <span className="text-label-lg font-thin">
              {FormatDate(target.sys.createdAt)}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};

// Embed blog  inline entri
const EmbedBlogInline = ({ dataBlog }) => {
  return (
    <Link
      href={`/blog/${dataBlog.slug}`}
      className="group hover:bg-cinchy-primary-green-950 bg-cinchy-secondary-green-500 flex justify-end shadow-lg hover:shadow-xl ease-in-out duration-300 cursor-pointer"
    >
      <div className="w-[99%] bg-white py-2 px-2">
        <span className="font-semibold text-cinchy-primary-green-950 group-hover:text-cinchy-secondary-green-500 ease-in-out duration-300">
          {dataBlog.title}
        </span>
      </div>
    </Link>
  );
};

const options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      return <EmbedPhoto dataPhoto={node.data.target.fields} />;
    },
    [BLOCKS.TABLE]: (node, children) => (
      <div className="overflow-x-scroll">
        <table>
          <tbody>{children}</tbody>
        </table>
      </div>
    ),
    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      return (
        <EmbedBlogEntry
          dataBlog={node.data.target.fields}
          target={node.data.target}
        />
      );
    },
    [INLINES.EMBEDDED_ENTRY]: (node) => {
      return <EmbedBlogInline dataBlog={node.data.target.fields} />;
    },
    [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
  },
  renderText: (text) => text.replace("!", "?"),
};

const MainContentBlogDetail = ({ params }) => {
  const pathname = usePathname();
  const { slug } = params;
  const [isOpenTableContent, setisOpenTableContent] = useState(false);
  const [dataDetailBlog, setdataDetailBlog] = useState();

  useEffect(() => {
    const getDataBlog = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
      });

      const res = await client.getEntries({
        content_type: "blog",
        "fields.slug": slug,
      });

      setdataDetailBlog(res.items[0]);
    };

    getDataBlog();
  }, []);

  return (
    <>
      {/* hero section */}
      <div className="relative flex justify-center items-center mb-12 bg-white h-[450px] overflow-hidden">
        {dataDetailBlog && (
          <Image
            src={"https:" + dataDetailBlog.fields.featuredImage.fields.file.url}
            width={2000}
            height={2000}
            alt="gambar"
            className="object-cover h-full w-screen object-center"
          />
        )}

        <div className="absolute text-center max-w-[720px] px-3 z-10">
          {dataDetailBlog && (
            <h1 className="text-h1-desktop tablet:text-h1-mobile text-white mb-6">
              {dataDetailBlog.fields.title}
            </h1>
          )}
        </div>

        <div className="absolute bg-[#00332ca9] w-screen h-full"></div>
      </div>

      {/* content section */}
      <div className="flex justify-center tablet:flex-col tablet:items-center">
        <div className="max-w-screen-2xl w-full flex justify-center items-start gap-10 px-4">
          {/* menu desktop*/}
          <div className="w-full min-w-[240px] max-w-[300px] bg-white shadow-lg p-6 rounded-2xl xl:flex flex-col hidden sticky top-24 text-cinchy-primary-neutral-900">
            <div className="text-h6 mb-3">TABLE OF CONTENTS</div>
            {dataDetailBlog && (
              <ul>
                {dataDetailBlog.fields.method.content
                  .filter((item) => item.nodeType === "heading-2")
                  .map((res, index) => (
                    <a
                      key={"tableOfContent" + index}
                      className="mt-2 block cursor-pointer hover:text-cinchy-deepTeal-500 ease-in-out duration-300"
                      href={
                        pathname + "#" + CovertAltFormat(res.content[0].value)
                      }
                    >
                      {res.content[0].value}
                    </a>
                  ))}
              </ul>
            )}
          </div>

          {/* menu mobile */}
          <div
            className={`${
              isOpenTableContent ? "h-screen" : "h-[50px]"
            } xl:hidden fixed bottom-0 left-0 w-full ${
              isOpenTableContent
                ? "bg-[#929192ab]"
                : "bg-cinchy-primary-neutral-900"
            } text-white flex ${
              isOpenTableContent
                ? "justify-end items-end z-50"
                : "justify-end items-center"
            } flex-col ease-out duration-500`}
          >
            {/* close button */}
            <button
              className={`${
                !isOpenTableContent && "hidden"
              } group flex flex-col gap-[15px] ease-in-out duration-100 mr-3 mb-3`}
              onClick={(e) => {
                e.preventDefault();
                setisOpenTableContent(!isOpenTableContent);
              }}
            >
              <div
                className={`w-[24px] h-[2.5px] ease-in-out duration-100 bg-cinchy-primary-neutral-900 group-hover:bg-red-300 rounded-full origin-right -rotate-45`}
              />
              <div
                className={`w-[24px] h-[2.5px] ease-in-out duration-100 bg-cinchy-primary-neutral-900 group-hover:bg-red-300 rounded-full origin-right rotate-45`}
              />
            </button>

            {/* content */}
            <div
              className={`${
                isOpenTableContent ? "opacity-100 scale-100" : "scale-0 h-0"
              } bg-cinchy-primary-neutral-900 w-full bottom-0 px-5 py-4 rounded-t-lg ease-in-out duration-500 origin-bottom`}
            >
              {isOpenTableContent && (
                <>
                  <div className="text-h6 mb-3">TABLE OF CONTENTS</div>
                  {dataDetailBlog && (
                    <ul className="text-cinchy-primary-neutral-600">
                      {dataDetailBlog.fields.method.content
                        .filter((item) => item.nodeType === "heading-2")
                        .map((res, index) => (
                          <a
                            key={"tableOfContent" + index}
                            className="mt-2 block cursor-pointer hover:text-cinchy-primary-neutral-100 ease-in-out duration-300"
                            href={
                              pathname +
                              "#" +
                              CovertAltFormat(res.content[0].value)
                            }
                            onClick={() =>
                              setisOpenTableContent(!isOpenTableContent)
                            }
                          >
                            {res.content[0].value}
                          </a>
                        ))}
                    </ul>
                  )}
                </>
              )}
            </div>

            {/* button open */}
            <div
              className={`${
                isOpenTableContent && "hidden"
              } border border-white px-5 py-1 rounded-lg cursor-pointer hover:bg-cinchy-primary-neutral-800 ease-in-out duration-300 h-fit mb-2`}
              onClick={() => setisOpenTableContent(!isOpenTableContent)}
            >
              TABLE OF CONTENTS
            </div>
          </div>

          <div className="body-content w-full max-w-[850px] text-justify -mt-8 text-cinchy-primary-neutral-900">
            {dataDetailBlog && (
              <>
                {documentToReactComponents(
                  dataDetailBlog.fields.method,
                  options
                )}
              </>
            )}
          </div>
          {/* <div className="w-full min-w-[240px] hidden xl:block sticky top-24 px-4 py-2 text-white">
          Ads
        </div> */}
        </div>
      </div>
    </>
  );
};

export default MainContentBlogDetail;
