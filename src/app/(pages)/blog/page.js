import React from "react";

// components
import Image from "next/image";
import MainContent from "./_components/MainContent";

const PageListBlog = () => {
  return (
    <div className="bg-cinchy-background-teal-50 h-full">
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

      <div className="max-w-screen-2xl w-full m-auto px-10">
        <MainContent />
      </div>
    </div>
  );
};

export default PageListBlog;
