import React from "react";
import MainContentBlogDetail from "./_components/MainContent";

const PageDetailBlog = ({ params }) => {
  return (
    <div className="min-h-screen bg-cinchy-background-teal-50 pb-24">
      <MainContentBlogDetail params={params}/>
    </div>
  );
};

export default PageDetailBlog;
