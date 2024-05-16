import React from "react";

// component
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";
// import FormSubscriptionFooter from "./FormSubscriptionFooter";

const Footer = ({ isIncludeBookNow = true }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
      {/* header footer */}
      <div
        className={`${
          !isIncludeBookNow && "hidden"
        } py-12 flex justify-center items-center gap-5 flex-row tablet:flex-col`}
      >
        <div className="flex flex-col items-start tablet:items-center">
          <h2 className="text-h2-mobile lg:text-h2-desktop text-center">
            Ready for your Bali journey?
          </h2>
          <p className="text-p text-cinchy-primary-green-950 max-w-[400px] tablet:text-center">
            Secure your scooter ahead of time for a piece of mind. Cinchy offers
            24 hours FREE Cancellation.{" "}
          </p>
        </div>
        <Link href={"/scooter-booking#top"} className="w-[320px]">
          <Button
            variant="danger"
            size="medium"
            text="BOOK NOW"
            isFullWidth={true}
          />
        </Link>
      </div>

      {/* content */}
      <div className="bg-[#FFF9EB] flex justify-center items-center w-full px-5">
        <div className="flex justify-between tablet:justify-center mobile:justify-between items-start flex-row tablet:flex-wrap mobile:flex-col gap-8 max-w-screen-2xl w-full py-12 px-3">
          {/* alamat */}
          <div className="sm:w-fit w-full">
            <div>
              <Image
                width={182}
                height={43}
                src={"/picture/icons/logo_cinchy_icon.svg"}
                alt="logo-cinchy"
              />
            </div>

            <div className="text-label text-cinchy-primary-green-950 mt-10 max-w-[180px]">
              <div>CV HIDUP MUDAH CINCHY</div>
              <div>
                Jl. Plawa No.50, Seminyak, Kec. Kuta, Kabupaten Badung, Bali
                80361
              </div>
              <div>+62-851-7424-6249</div>
            </div>
          </div>

          {/* about */}
          <div className="flex sm:w-fit w-full justify-start flex-col gap-2 text-cinchy-primary-green-950">
            <div className="text-h6">About Cinchy</div>
            <Link
              className="text-p hover:text-cinchy-secondary-green-500 ease-in-out duration-300"
              href={"/about-us"}
            >
              About Us
            </Link>
            <Link
              className="text-p hover:text-cinchy-secondary-green-500 ease-in-out duration-300"
              href={"/pricing#what-are-the-scooter-rental-costs-?"}
            >
              Pricing
            </Link>
            <Link
              className="text-p hover:text-cinchy-secondary-green-500 ease-in-out duration-300"
              href={"/blog"}
            >
              Blog
            </Link>
            <Link
              className="text-p hover:text-cinchy-secondary-green-500 ease-in-out duration-300"
              href={"/faq"}
            >
              FAQ
            </Link>
            <Link
              className="max-w-[150px] text-p hover:text-cinchy-secondary-green-500 ease-in-out duration-300"
              href={"/bali-airport-scooter-rental-map"}
            >
              Bali Airport Scooter Rental
            </Link>
          </div>

          {/* newslatter */}
          <div className="flex w-full sm:w-[370px] justify-start flex-col gap-2 text-cinchy-primary-green-950">
            <div className="text-h6">Newsletter</div>
            <div className="text-p">
              Subscribe for exclusive Bali insider tips.
            </div>

            {/* form */}
            <div className="w-full">
              {/* <FormSubscriptionFooter/> */}
            </div>

            {/* logo sosmed */}
            <div className="flex justify-start items-center gap-4">
              <a href="https://www.facebook.com/cinchybali" target="_blank">
                <Image
                  width={32}
                  height={32}
                  className="cursor-pointer"
                  src={"/picture/icons/sosmed/facebooklogo.svg"}
                  alt="logo-facebook"
                />
              </a>
              <a href="https://www.instagram.com/cinchy.life/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  className="cursor-pointer"
                  src={"/picture/icons/sosmed/instagramlogo.svg"}
                  alt="logo-instagram"
                />
              </a>
              <a href="https://www.pinterest.jp/cinchylife/" target="_blank">
                <Image
                  width={32}
                  height={32}
                  className="cursor-pointer"
                  src={"/picture/icons/sosmed/pinterestlogo.svg"}
                  alt="logo-pinterest"
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCRbOuhG9gNgBkqJjQxkyoYQ"
                target="_blank"
              >
                <Image
                  width={32}
                  height={32}
                  className="cursor-pointer"
                  src={"/picture/icons/sosmed/youtubelogo.svg"}
                  alt="logo-youtube"
                />
              </a>
              <a
                href="https://maps.app.goo.gl/1uHSkzr7QXgqTHza6"
                target="_blank"
              >
                <Image
                  width={32}
                  height={32}
                  className="cursor-pointer"
                  src={"/picture/icons/sosmed/googlelogo.svg"}
                  alt="logo-google"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="bg-cinchy-primary-green-950 flex justify-center items-center w-full px-5">
        <div className="flex justify-between items-center flex-col md:flex-row max-w-screen-2xl w-full text-cinchy-background-teal-50 py-3 px-3">
          <div className="text-label">© 2024 CINCHY. ALL RIGHTS RESERVED.</div>
          <Link className="text-label md:pr-12" href={"/terms-and-conditions"}>
            Terms and Conditions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
