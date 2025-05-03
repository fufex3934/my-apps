interface Post {
  id: string;
  title: string;
  body: string;
}

async function getPost(slug: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();
  return post;
}
export async function generateStaticParams() {
  const posts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (res) => res.json()
  );

  return posts.map((post: Post) => ({
    slug: post.id.toString(),
  }));
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
      <p className="text-lg">{post.body}</p>
    </div>
  )
}
