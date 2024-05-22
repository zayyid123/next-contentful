import Image from "next/image";
import Link from "next/link";
import React from "react";
import LoaderImage from "./LoaderImage";
import LoaderText from "./LoaderText";

const CardBlog = ({ data, isLoading = false }) => {
  if (isLoading) {
    return (
      <div className="w-fit">
        <div className="group w-full max-w-none md:max-w-md h-[600px] bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
          <div className="w-full h-3/4 overflow-hidden rounded-t-lg">
            <LoaderImage width="w-[500px]" height="h-[500px]"/>
          </div>
          <div className="p-5 h-1/4 flex flex-col gap-y-3">
            <LoaderText height="h-4" width="w-[70%]"/>
            <LoaderText height="h-3" width="w-[50%]"/>
          </div>
        </div>
      </div>
    );
  }
  const { title, slug, cookingTime, thumbnail } = data.fields;

  return (
    <Link href={`/blog/${slug}`} className="w-full md:w-fit">
      <div className="group w-full max-w-none md:max-w-md h-[600px] bg-white border border-gray-200 rounded-lg shadow cursor-pointer">
        <div className="w-full h-3/4 overflow-hidden rounded-t-lg">
          <Image
            src={"https:" + thumbnail.fields.file.url}
            alt="blog image"
            width={1000}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-110 ease-in-out duration-300"
          />
        </div>
        <div className="p-5 h-1/4">
          <h4 className="mb-2 text-h4-desktop mobile:text-h4-mobile tracking-tight text-gray-900">
            {title}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
