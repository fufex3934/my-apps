import Link from "next/link";
import { getPost } from "@/app/lib/action";
export interface Post {
  id: string;
  title: string;
  content: string;
}



export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
 
  const { slug } = await params;
  const post = await getPost(slug);
  
  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-500 mb-6">Post ID: {post.id}</p>
      <p className="text-lg">{post.content}</p>
      <Link href={'/blog'}><span className="bg-blue-500 text-white px-2 py-1 rounded">Blog</span></Link>
    </div>
  );
}
