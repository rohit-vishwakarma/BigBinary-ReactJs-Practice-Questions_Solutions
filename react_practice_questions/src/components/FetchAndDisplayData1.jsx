import { useState, useEffect } from "react";
/**
 * Ques - 4.
 * Using `fetch` api fetch posts listed at
 * "https://jsonplaceholder.typicode.com/posts/"
 *
 * While the request is in progress, display
 * the text "Loading"
 *
 * Once the posts are fetched, display the
 * title and body
 */

export function FetchAndDisplayData1() {
  const [loading, setLoad] = useState(false);
  const [posts, setPost] = useState([]);

  useEffect(() => {
    const fetchedData = async () => {
      setLoad(true);
      const res = await fetch("https://jsonplaceholder.typicode.com/posts/");
      const data = await res.json();
      setPost(data);
      // console.log(data);
      setLoad(false);
    };
    fetchedData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <span>{post.body}</span>
        </div>
      ))}
    </>
  );
}
