/** @format */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FullWidthBlog = () => {
  let getPosts = async () => {
    let posts = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs??pagination[limit]=1&populate=*`
    );
    let res = await posts.json();
    setFeaturedBlogs(res.data[0]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const [featuredBlogs, setFeaturedBlogs] = useState({});
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 h-[400px] rounded-xl overflow-hidden bg-gray-200">
            <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
              {featuredBlogs.thumbnail && (
                <Image
                  width={1200}
                  height={192}
                  alt="thumbnail Image"
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${featuredBlogs.thumbnail.url}`}
                />
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-4 mb-4">
              <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                {featuredBlogs.category ? featuredBlogs.category : " "}
              </span>
              <span className="text-sm text-gray-500">March 15, 2024</span>
              <span className="text-sm text-gray-500">10 min read</span>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <Link
                href="/blogs/the-evolution-of-web-development"
                className="hover:text-blue-600 transition-colors duration-200"
              >
                {featuredBlogs.title ? featuredBlogs.title : " "}
              </Link>
            </h2>

            <p className="text-lg text-gray-600 mb-6">
              {featuredBlogs.excerpt ? featuredBlogs.excerpt : " "}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                <span className="font-medium text-gray-900">
                  {featuredBlogs.author ? featuredBlogs.author.name : " "}
                </span>
              </div>
              <Link
                href={`/blogs/${featuredBlogs.slug ? featuredBlogs.slug : ""}`}
                className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200"
              >
                Read full article →
              </Link>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default FullWidthBlog;
