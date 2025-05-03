
import Posts from "../components/Posts";
export default  function Page() {
  const postsPromise =   fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json());
  

  return (
   <div>
    <Posts posts={postsPromise}/>
   </div>
  );
}
