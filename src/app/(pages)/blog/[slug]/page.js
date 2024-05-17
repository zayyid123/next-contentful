"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

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
    <div>
      <div className="w-full flex justify-center">
        {dataDetailBlog && (
          <Image
            src={"https:" + dataDetailBlog.fields.featuredImage.fields.file.url}
            width={
              dataDetailBlog.fields.featuredImage.fields.file.details.image
                .width
            }
            height={
              dataDetailBlog.fields.featuredImage.fields.file.details.image
                .height
            }
            alt="gambar"
          />
        )}
      </div>

      <div className="w-full my-3 px-10">
        {dataDetailBlog && (
          <h1 className="text-left font-bold text-xl">
            {dataDetailBlog.fields.title}
          </h1>
        )}
        {dataDetailBlog && (
          <p>About {dataDetailBlog.fields.cookingTime} Minutes</p>
        )}
      </div>

      <div className="w-full my-3 px-10">
        {dataDetailBlog && (
          <div>{documentToReactComponents(dataDetailBlog.fields.method)}</div>
        )}
      </div>
    </div>
  );
};

export default PageDetailBlog;
