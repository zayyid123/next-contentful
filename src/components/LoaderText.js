import React from "react";

const LoaderText = ({
  height = "h-2",
  width = "w-48",
  customCss = "",
  background = "bg-cinchy-primary-neutral-600",
  rounded = "rounded-full",
}) => {
  return (
    <div className='"space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"'>
      <div
        className={`${height} ${width} ${customCss} ${background} ${rounded} dark:bg-gray-700 `}
      />
    </div>
  );
};

export default LoaderText;
