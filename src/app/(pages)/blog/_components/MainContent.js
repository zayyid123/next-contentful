"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

// contentful
import { createClient } from "contentful";

// components
import CardBlog from "@/components/CardBlog";

// convert page to skip value
const convertPageToSkip = (page, limiter) => {
  return (page - 1) * limiter;
};

const MainContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [dataBlog, setdataBlog] = useState([]);
  const [skip, setskip] = useState(
    convertPageToSkip(
      searchParams.get("page") ? searchParams.get("page") : 1,
      3
    )
  );
  const [limit, setlimit] = useState(3);
  const [total, settotal] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getDataBlogFirstAppear = async () => {
      setisLoading(true);
      const client = createClient({
        space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
        accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
      });

      const res = await client.getEntries({
        content_type: "blog",
        limit: limit,
        skip: skip,
      });

      setlimit(res.limit);
      setskip(res.skip);
      settotal(res.total);
      setdataBlog(res.items);
      setisLoading(false);
    };

    getDataBlogFirstAppear();
  }, []);

  const getDataBlog = async (skipper, limiter) => {
    setisLoading(true);
    const client = createClient({
      space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
      accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
    });

    const res = await client.getEntries({
      content_type: "blog",
      limit: limiter,
      skip: skipper,
    });

    setlimit(res.limit);
    setskip(res.skip);
    settotal(res.total);
    setdataBlog(res.items);
    setisLoading(false);
  };

  const handleNextPage = async () => {
    // check is skip more than limit
    if (skip > limit || Math.ceil(total/ limit) === 1) {
      alert("anda sudah berada di page terakhir");
      return null;
    }

    router.push(
      `/blog?page=${
        Number(searchParams.get("page") ? searchParams.get("page") : 1) + 1
      }`
    );

    // fetch api
    getDataBlog(skip + 3, limit);
  };

  const handlePrevPage = async () => {
    // check is skip less than limit
    if (skip < limit || Math.ceil(total/ limit) === 1) {
      alert("anda sudah berada di page paling awal");
      return null;
    }

    router.push(
      `/blog?page=${
        Number(searchParams.get("page") ? searchParams.get("page") : 1) - 1
      }`
    );

    // fetch api
    getDataBlog(skip - 3, limit);
  };

  const gotoPage = async (pageNumber) => {
    router.push(`/blog?page=${pageNumber}`);

    // fetch api
    getDataBlog(convertPageToSkip(pageNumber, limit), limit);
  };

  return (
    <>
      {/* content section */}
      <div className="flex justify-center">
        <div className="max-w-screen-2xl w-full my-10 flex justify-center items-start gap-5 flex-wrap">
          {isLoading ? (
            <>
              {[1, 2, 3, 4, 5, 6].map((res, index) => (
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

      {/* pagination */}
      <div className="flex justify-center items-center pt-5 pb-12">
        <ul className="flex items-center -space-x-px text-sm flex-wrap">
          {/* prev button */}
          <li>
            <div
              onClick={() => {
                if (skip < limit || Math.ceil(total/ limit) === 1) {
                  return null;
                }

                handlePrevPage();
              }}
              className={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 ${
                skip < limit || Math.ceil(total/ limit) === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white hover:bg-gray-100 hover:text-gray-700 cursor-pointer"
              } border border-e-0 border-gray-300 rounded-s-lg`}
            >
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </div>
          </li>

          {/* number */}

          {[...Array(Math.ceil(total / limit)).keys()].map((pageNumber) => (
            <li key={pageNumber + "numberbutton"}>
              <div
                onClick={() => gotoPage(pageNumber + 1)}
                className={`flex items-center justify-center px-4 h-10 leading-tight ${
                  Number(
                    searchParams.get("page") ? searchParams.get("page") : 1
                  ) ===
                  pageNumber + 1
                    ? "text-cinchy-secondary-green-500 bg-green-50"
                    : "text-gray-500 bg-white"
                } border border-gray-300 hover:bg-gray-100 hover:text-gray-700 cursor-pointer`}
              >
                {pageNumber + 1}
              </div>
            </li>
          ))}

          {/* next button */}
          <li>
            <div
              onClick={() => {
                if (skip > limit || Math.ceil(total/ limit) === 1) {
                  return null;
                }

                handleNextPage();
              }}
              className={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 ${
                skip > limit || Math.ceil(total/ limit) === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-white cursor-pointer hover:bg-gray-100 hover:text-gray-700"
              } border border-gray-300 rounded-e-lg`}
            >
              <svg
                className="w-2.5 h-2.5 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MainContent;
