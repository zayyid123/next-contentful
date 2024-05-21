"use client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import React, { useState } from "react";
import "./blog.css";
import CovertAltFormat from "@/utils/ConvertAltFormat";
import { usePathname } from "next/navigation";

const Heading2 = ({ children }) => {
  return (
    <h2 id={CovertAltFormat(children[0])} className="align-center">
      {children}
    </h2>
  );
};

const options = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => <Heading2>{children}</Heading2>,
  },
  renderText: (text) => text.replace("!", "?"),
};

const MainContentBlogDetail = ({ data }) => {
  const pathname = usePathname();
  const [isOpenTableContent, setisOpenTableContent] = useState(false);

  return (
    <div className="flex justify-center tablet:flex-col tablet:items-center">
      <div className="max-w-screen-2xl w-full flex justify-center items-start gap-10 px-4">
        {/* menu desktop*/}
        <div className="w-full min-w-[240px] max-w-[300px] bg-white shadow-lg p-6 rounded-2xl xl:flex flex-col hidden sticky top-24 text-cinchy-primary-neutral-900">
          <div className="text-h6 mb-3">TABLE OF CONTENTS</div>
          <ul>
            {data.fields.method.content
              .filter((item) => item.nodeType === "heading-2")
              .map((res, index) => (
                <a
                  key={"tableOfContent" + index}
                  className="mt-2 block cursor-pointer hover:text-cinchy-deepTeal-500 ease-in-out duration-300"
                  href={pathname + "#" + CovertAltFormat(res.content[0].value)}
                >
                  {res.content[0].value}
                </a>
              ))}
          </ul>
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
                <ul className="text-cinchy-primary-neutral-600">
                  {data.fields.method.content
                    .filter((item) => item.nodeType === "heading-2")
                    .map((res, index) => (
                      <a
                        key={"tableOfContent" + index}
                        className="mt-2 block cursor-pointer hover:text-cinchy-primary-neutral-100 ease-in-out duration-300"
                        href={pathname + "#" + CovertAltFormat(res.content[0].value)}
                        onClick={() =>
                          setisOpenTableContent(!isOpenTableContent)
                        }
                      >
                        {res.content[0].value}
                      </a>
                    ))}
                </ul>
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

        <div className="w-full max-w-[850px] text-justify -mt-8 text-cinchy-primary-neutral-900">
          <>{documentToReactComponents(data.fields.method, options)}</>
        </div>
        {/* <div className="w-full min-w-[240px] hidden xl:block sticky top-24 px-4 py-2 text-white">
          Ads
        </div> */}
      </div>
    </div>
  );
};

export default MainContentBlogDetail;
