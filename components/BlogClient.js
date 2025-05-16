/** @format */

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

let categories = ["All" , "lorem" , "tech"]

export default function BlogsClient() {
  const searchParams = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get("category")?searchParams.get("category"):"All")
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    let getPosts = async () => {
    if(selectedCategory == "All"){
      let posts = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`,
    );
    
    let res = await posts.json();
    setBlogs(res.data);
    }else{
      let posts = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[category][${"$eq"}]=${selectedCategory}&populate=*`
    );
    let res = await posts.json();
    setBlogs(res.data);
    }
  };
    getPosts();
  }, [selectedCategory]);
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Explore our collection of articles, tutorials, and insights
        </p>
      </div>

      {/* Category Filters */}
      <div className="mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article
            key={blog.documentId}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200"
          >
            <div className="h-48 bg-gray-200">
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300"></div>
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

              <p className="text-gray-600 mb-4 line-clamp-2">{blog.excerpt}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  <span className="text-sm font-medium text-gray-900">
                    {blog.author.name}
                  </span>
                </div>
                <span className="text-sm text-gray-500">{blog.readTime} min read</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
