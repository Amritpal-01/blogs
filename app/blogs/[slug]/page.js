/** @format */

"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

export default function BlogPost() {
  const [blog, setBlog] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    let getData = async () => {
    let data = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][${"$eq"}]=${slug}&populate=*`
    );
    let res = await data.json();
    setBlog(res.data[0]);
  };
    getData();
  }, [slug]);

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(42);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-4 mb-6">
          <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            {blog.category ? blog.category : " "}
          </span>
          <span className="text-sm text-gray-500">
            {blog.daat ? blog.date : " "}
          </span>
          <span className="text-sm text-gray-500">
            {blog.readTime ? blog.readTime : " "} min
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          {blog.title ? blog.title : " "}
        </h1>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
            <Image
              className="w-auto h-auto"
              alt="profile"
              width={48}
              height={48}
              src="/logo.jpg"
            />
          </div>
          <div>
            <p className="font-medium text-gray-900">
              {blog.author ? blog.author.name : " "}
            </p>
            <p className="text-sm text-gray-500">
              {blog.author ? blog.author.role : " "}
            </p>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden bg-gray-200 mb-12">
        <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300">
          {blog.headImage && <Image width={1280} height={720} alt="Featured Image" src={`http://localhost:1337${blog.headImage.url}`}/>}
        </div>
      </div>

      {/* Content */}

      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2
              style={{ color: "blue", fontSize: "24px", padding: "20px 0" }}
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p style={{ lineHeight: "1.6em" }} {...props} />
          ),
          strong: ({ node, ...props }) => (
            <strong style={{ fontWeight: "bold" }} {...props} />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              style={{
                borderLeft: "4px solid #ccc",
                paddingLeft: "1em",
                margin: "20px 0",
                fontStyle: "italic",
              }}
              {...props}
            />
          ),
        }}
      >
        {blog.content ? blog.content : " "}
      </ReactMarkdown>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-12">
        {blog.tags?.map((tag) => (
          <Link
            key={tag}
            href={`/blogs?tag=${tag.toLowerCase().replace(" ", "-")}`}
            className="px-3 py-1 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            #{tag}
          </Link>
        ))}
      </div>

      {/* Like Button */}
      <div className="flex items-center gap-4 mb-12">
        <button
          onClick={handleLike}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors duration-200 ${
            isLiked
              ? "bg-red-100 text-red-600 hover:bg-red-200"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          <svg
            className="w-5 h-5"
            fill={isLiked ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <span>{likes} likes</span>
        </button>
      </div>

      {/* Author Bio */}
      <div className="bg-gray-50 rounded-xl p-8 mb-12">
        <div className="flex items-start gap-6">
          <div className="w-16 aspect-square rounded-full bg-gray-200 overflow-hidden">
            <Image
              className="w-auto h-auto"
              alt="profile"
              width={64}
              height={64}
              src="/logo.jpg"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              About {blog.author ? blog.author.name : " "}
            </h3>
            <p className="text-gray-600 mb-4">
              {blog.author ? blog.author.bio : " "}
            </p>
            <div className="flex gap-4">
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link
                href="https://github.com"
                className="text-gray-400 hover:text-gray-600"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
