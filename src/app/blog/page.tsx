import Posts from "../components/Posts";
import { BlogListSkeleton } from "../components/BlogListSkeleton";
import { Suspense } from "react";
export default function Page() {
  const postsPromise = fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

      <p className="text-2xl font-bold mb-2">Read the latest posts below.</p>
      <Suspense fallback={<BlogListSkeleton/>}>
      <Posts posts={postsPromise} />
      </Suspense>
    </div>
  );
}
