"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Button = ({
  variant = "base",
  isFilled = true,
  isIconOnRight = true,
  icon = <></>,
  text = "Button",
  size = "tiny",
  isFullWidth = false,
  customCss = "",
  addCss = "",
  type = "",
  onClick,
  url = "",
  isRounded = true,
  children,
  isDisabled = false,
}) => {
  const router = useRouter();

  const checkVariantAndFilled = () => {
    // check variant
    if (variant === "base") {
      // check is button filled
      if (isFilled) {
        return `bg-cinchy-primary-green-950 text-cinchy-base-white hover:bg-cinchy-snowDrift-600`;
      } else {
        return `border border-cinchy-primary-green-950 text-cinchy-primary-green-950 hover:bg-cinchy-snowDrift-100`;
      }
    } else if (variant === "danger") {
      // check is button filled
      if (isFilled) {
        return `bg-cinchy-primary-red-500 text-cinchy-base-white hover:bg-cinchy-sunsetOrange-300`;
      } else {
        return `border border-cinchy-primary-red-500 text-cinchy-primary-red-500 hover:bg-cinchy-sunsetOrange-100`;
      }
    } else if (variant === "warning") {
      // check is button filled
      if (isFilled) {
        return `bg-cinchy-primary-yellow-400 text-cinchy-base-white hover:bg-cinchy-yellow-300`;
      } else {
        return `border border-cinchy-primary-yellow-400 text-cinchy-primary-yellow-400 hover:bg-cinchy-yellow-100`;
      }
    } else if (variant === "success") {
      // check is button filled
      if (isFilled) {
        return `bg-cinchy-secondary-green-500 text-cinchy-base-white hover:bg-cinchy-deepTeal-300`;
      } else {
        return `border border-cinchy-secondary-green-500 text-cinchy-secondary-green-500 hover:bg-cinchy-deepTeal-100`;
      }
    } else if (variant === "disabled") {
      // check is button filled
      if (isFilled) {
        return `bg-cinchy-primary-neutral-600 text-cinchy-base-white cursor-not-allowed`;
      } else {
        return `border border-cinchy-primary-neutral-600 text-cinchy-primary-neutral-600 cursor-not-allowed`;
      }
    } else if (variant === "dark") {
      // check is button filled
      if (isFilled) {
        return `bg-cinchy-primary-neutral-800 text-cinchy-base-white hover:bg-cinchy-primary-neutral-600`;
      } else {
        return `border border-cinchy-primary-neutral-600 text-cinchy-primary-neutral-600 hover:bg-cinchy-primary-neutral-600 hover:text-white`;
      }
    }
  };

  const checkSize = () => {
    if (size === "tiny") {
      return `h-[32px] ${isRounded && "rounded-[16px]"}`;
    } else if (size === "small") {
      return `h-[40px] ${isRounded && "rounded-[8px]"}`;
    } else if (size === "medium") {
      return `h-[48px] ${isRounded && "rounded-[8px]"}`;
    } else if (size === "large") {
      return `h-[56px] ${isRounded && "rounded-[8px]"}`;
    }
  };

  return (
    <button
      className={`group px-6 py-[10px] flex justify-center items-center gap-2 ${
        customCss === "" ? checkVariantAndFilled() : customCss
      } ${checkSize()} ${isFullWidth && "w-full"} ${
        isDisabled && "cursor-not-allowed"
      } ease-in-out duration-300 ${addCss}`}
      type={type}
      onClick={
        isDisabled
          ? null
          : url === ""
          ? onClick
            ? onClick
            : undefined
          : () => router.push(url)
      }
    >
      {!isIconOnRight && icon}
      {children ? children : <div className="text-p">{text}</div>}
      {isIconOnRight && icon}
    </button>
  );
};

export default Button;
