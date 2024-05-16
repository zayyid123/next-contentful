"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import CardBlog from "@/components/CardBlog";

const PageListBlog = () => {
  const [dataBlog, setdataBlog] = useState([]);

  useEffect(() => {
    const getDataBlog = async () => {
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
      });

      const res = await client.getEntries({
        content_type: "blog",
      });

      setdataBlog(res.items);
    };

    getDataBlog();
  }, []);

  return (
    <div className="bg-cinchy-primary-neutral-800 p-10 flex">
      {dataBlog.map((res, index) => (
        <CardBlog key={res.sys.id} data={res} />
      ))}
    </div>
  );
};

export default PageListBlog;
