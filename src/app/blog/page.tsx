import Posts from "../components/Posts";

import { getPosts } from "../lib/action";
export default async function Page() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>

      <p className="text-2xl font-bold mb-2">Read the latest posts below.</p>
      <Posts posts={posts} />
    </div>
  );
}
