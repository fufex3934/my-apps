import { Post } from "./[slug]/page";
import Link from "next/link";
export default async function Page() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id} className="p-4 max-w-2xl mx-auto">
          
          <Link href={`/blog/${post.id}`}>
            <h1 className="text-2xl font-semibold text-gray-600">{post.title}</h1>
          </Link>
        </li>
      ))}
    </ul>
  );
}
