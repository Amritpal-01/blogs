// app/blogs/page.js
import { Suspense } from "react";
import BlogsClient from "@/components/BlogClient";

export default function BlogsPage() {
  return (
    <Suspense fallback={<div className="text-center p-10">Loading blogs...</div>}>
      <BlogsClient />
    </Suspense>
  );
}
