/** @format */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const FeaturedBlogs = () => {
  

  useEffect(() => {
    let getPosts = async () => {
    let posts = await fetch(
      "http://localhost:1337/api/blogs??pagination[limit]=6&populate=*"
    );
    let res = await posts.json();
    setFeaturedBlogs(res.data);
  };
    getPosts();
  }, []);

  const [featuredBlogs, setFeaturedBlogs] = useState([]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
          Featured Articles
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBlogs.map((blog, i) => {
            if (i == 0) {
              return;
            } else {
              return (
                <article
                  key={blog.documentId}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
                >
                  <div className="h-48 bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                      <Image
                        key={i}
                        width={700}
                        height={192}
                        alt="thumbnail Image"
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${blog.thumbnail.url}`}
                      />
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-sm text-gray-500">{blog.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      <Link
                        href={`/blogs/${blog.slug}`}
                        className="hover:text-blue-600 transition-colors duration-200"
                      >
                        {blog.title}
                      </Link>
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <span className="text-sm font-medium text-gray-900">
                          {blog.author.name}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">
                        {blog.readTime} min
                      </span>
                    </div>
                  </div>
                </article>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBlogs;
