
import Posts from "../components/Posts";
export default function Page() {
  const postsPromise = fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json());
    
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <Posts posts={postsPromise} />
    </div>
  );
}