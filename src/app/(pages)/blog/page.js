"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import CardBlog from "@/components/CardBlog";
import Image from "next/image";

const PageListBlog = () => {
  const [dataBlog, setdataBlog] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getDataBlog = async () => {
      setisLoading(true);
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
      });

      const res = await client.getEntries({
        content_type: "blog",
      });

      setdataBlog(res.items);
      setisLoading(false);
    };

    getDataBlog();
  }, []);

  return (
    <div className="bg-cinchy-background-teal-50">
      {/* hero section */}
      <div className="relative flex justify-center items-center mb-5 bg-white h-[450px] overflow-hidden">
        <Image
          width={2000}
          height={2000}
          src={"/picture/image/background/bg-aboutus.png"}
          alt={"background-cinchy-bali-about-us"}
          className="object-cover h-full w-screen object-center"
        />

        {/* text */}
        <div className="absolute text-center max-w-[720px] px-3 z-10">
          <h1 className="text-h1-desktop tablet:text-h1-mobile text-white mb-6">
            Blog
          </h1>
          <p className="text-white text-p-lg">
            Plan your adventure in Bali by renting a motorbike from us, as every
            corner of this island is worth exploring.
          </p>
        </div>

        <div className="absolute bg-[#00332ca9] w-screen h-full"></div>
      </div>

      {/* content section */}
      <div className="flex justify-center md:mx-10 mx-5">
        <div className="max-w-screen-2xl w-full my-10 flex justify-center items-start gap-5 flex-wrap">
          {isLoading ? (
            <>
              {[1,2,3,4,5,6].map((res, index) => (
                <CardBlog key={res} isLoading={true} />
              ))}
            </>
          ) : (
            <>
              {dataBlog.map((res, index) => (
                <CardBlog key={res.sys.id} data={res} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageListBlog;
