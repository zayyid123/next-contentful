import Image from "next/image";
import Link from "next/link";
import React from "react";

const CardBlog = ({ data }) => {
  const { title, slug, cookingTime, thumbnail } = data.fields;

  return (
    <Link href={`/blog/${slug}`} className="w-fit bg-red-700">
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
