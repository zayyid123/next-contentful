"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import MainContentBlogDetail from "./_components/MainContent";

const PageDetailBlog = ({ params }) => {
  const { slug } = params;
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
    <div className="min-h-screen bg-cinchy-background-teal-50 pb-24">
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
      {dataDetailBlog && <MainContentBlogDetail data={dataDetailBlog} />}
    </div>
  );
};

export default PageDetailBlog;
