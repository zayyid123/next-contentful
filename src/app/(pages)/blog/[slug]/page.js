import React from "react";
import MainContentBlogDetail from "./_components/MainContent";
import { createClient } from "contentful";

// set dynamic metadata
export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;

  const getDetailBlog = async () => {
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({
      content_type: "blog",
      "fields.slug": slug,
    });

    return res.items[0];
  };

  const dataBlog = await getDetailBlog();

  return {
    title: `${slug} - Cinchy Blog`,
    description: slug,
    openGraph: {
      images: [
        {
          url: "https:" + dataBlog.fields.featuredImage.fields.file.url,
          width: 800,
          height: 600,
          alt: slug,
        },
      ],
    },
  };
}

const PageDetailBlog = ({ params }) => {
  return (
    <div className="min-h-screen bg-cinchy-background-teal-50 pb-24">
      <MainContentBlogDetail params={params} />
    </div>
  );
};

export default PageDetailBlog;
