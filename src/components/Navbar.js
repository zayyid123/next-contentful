"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

// components
import Image from "next/image";
import Button from "./Button";

// data menu
const dataMenus = [
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Pricing",
    link: "/pricing#what-are-the-scooter-rental-costs-?",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "FAQ",
    link: "/faq",
  },
  {
    name: "My Booking",
    link: "/mybooking",
  },
];

const Navbar = () => {
  const router = useRouter();
  const [isOpenNavbar, setisOpenNavbar] = useState(false);

  return (
    <div className="sticky top-0 z-30 w-full bg-white flex justify-center shadow-md">
      <div
        className={`max-w-screen-2xl w-full flex items-center px-5 py-5 z-20 h-[80px] ${
          isOpenNavbar
            ? "tablet:bg-cinchy-primary-green-950 bg-white tablet:justify-end justify-between"
            : "bg-white justify-between"
        } ease-in-out duration-300`}
      >
        {/* logo */}
        <div
          className={`${isOpenNavbar && "tablet:hidden"} cursor-pointer`}
          onClick={() => router.push("/")}
        >
          <Image
            width={278}
            height={43}
            src={"/picture/cinchy_logo_white_horizontal_tagline.svg"}
            className="mobile:w-[220px] mobile:h-[34px]"
            alt="cinchy-logo"
          />
        </div>

        {/* menu desktop */}
        <div>
          {/* desktop menu */}
          <div className="flex tablet:hidden justify-between items-center gap-4">
            {/* menus */}
            {dataMenus.map((item, index) => (
              <button
                key={item.name + index}
                className="text-cinchy-primary-green-950 hover:text-cinchy-secondary-green-500 text-h6 ease-in-out duration-300"
                onClick={() => {
                  setisOpenNavbar(!isOpenNavbar);
                  router.push(item.link);
                }}
              >
                {item.name}
              </button>
            ))}

            {/* get started */}
            <Button
              variant="success"
              isFilled={true}
              size="small"
              text="Get Started"
              onClick={() => {
                setisOpenNavbar(!isOpenNavbar);
                router.push(
                  "/getstarted#title"
                );
              }}
            />
          </div>

          {/* button hamburger menu */}
          <div
            className="hidden tablet:block z-50 w-full group"
            onClick={() => {
              setisOpenNavbar(!isOpenNavbar);
            }}
          >
            <div
              className={`cursor-pointer flex flex-col ${
                isOpenNavbar ? "gap-[15px]" : "gap-1"
              } justify-center`}
            >
              <div
                className={`w-[24px] h-[2.5px] origin-right ${
                  isOpenNavbar
                    ? "bg-cinchy-background-teal-50 group-hover:bg-cinchy-primary-red-500 -rotate-45"
                    : "bg-cinchy-primary-green-950 group-hover:bg-cinchy-primary-neutral-800"
                } rounded-full ease-in-out duration-300`}
              />
              <div
                className={`w-[24px] h-[2.5px] ${
                  isOpenNavbar
                    ? "hidden"
                    : "bg-cinchy-primary-green-950 group-hover:bg-cinchy-primary-neutral-800"
                } rounded-full ease-in-out duration-300`}
              />
              <div
                className={`w-[24px] h-[2.5px] origin-right ${
                  isOpenNavbar
                    ? "bg-cinchy-background-teal-50 group-hover:bg-cinchy-primary-red-500 rotate-45"
                    : "bg-cinchy-primary-green-950 group-hover:bg-cinchy-primary-neutral-800"
                } rounded-full ease-in-out duration-300`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* menu mobile */}
      <div
        className={`hidden tablet:block absolute ${
          isOpenNavbar ? "h-screen top-[80px]" : "top-[-330px]"
        } ease-in-out duration-200 right-0 left-0 bg-cinchy-primary-green-950 px-6`}
      >
        {/* menus */}
        <div className="flex flex-col justify-start items-start gap-2">
          {dataMenus.map((item, index) => (
            <button
              key={item.name + index}
              className="text-cinchy-background-teal-50 hover:text-cinchy-primary-green-950 text-h6 p-4 hover:bg-cinchy-secondary-green-500 w-full text-left ease-in-out duration-300"
              onClick={() => {
                setisOpenNavbar(!isOpenNavbar);
                router.push(item.link);
              }}
            >
              {item.name}
            </button>
          ))}

          {/* button book now */}
          <Button
            variant="warning"
            isFilled={false}
            size="small"
            isFullWidth={true}
            onClick={() => {
              setisOpenNavbar(!isOpenNavbar)
              router.push("/scooter-booking")
            }}
          >
            <div className="text-p text-cinchy-background-teal-50 group-hover:text-cinchy-primary-green-950">
              BOOK NOW
            </div>
          </Button>

          {/* get started */}
          <Button
            variant="success"
            size="small"
            isFullWidth={true}
            text="Get Started"
            onClick={() => {
              setisOpenNavbar(!isOpenNavbar);
              router.push(
                "/getstarted#title"
              );
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
