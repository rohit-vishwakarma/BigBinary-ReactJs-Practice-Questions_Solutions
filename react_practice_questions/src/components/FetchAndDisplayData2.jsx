
import { useEffect, useState } from 'react';
/**
 * Ques - 5.
 * Making a GET request to "https://jsonplaceholder.typicode.com/posts/<postId>"
 * will return the details of a random post
 *
 * On load, fetch the post with post id 1 and display
 * the post title and body
 *
 * When the user clicks "Fetch new post", fetch
 * the next post (sequentially) and display it
 * below the existing list of posts
 *
 * Note: The range of values for postId is
 * 1-100 (inclusive). Disable the button when
 * postId is 100.
 */

 export function FetchAndDisplayData2() {
    const [loading, setLoad] = useState(false);
    const [posts, setPost] = useState([]);
    const [id, setId] = useState(1);

    const handleNext = () => {
        if(id == 100) return;
        setId(id + 1);
    }
    // const handlePrev = () => {
    //     if(id == 1) return;
    //     setId(id - 1);
    // }
    useEffect(()=>{
        const fetching = async () =>{
            setLoad(true);
            const dataFetched = await fetch("https://jsonplaceholder.typicode.com/posts/" + id);
            const data = await dataFetched.json();
            setPost([...posts, data]);
            // console.log(data);
            setLoad(false);
        }
        fetching();
    },[id]);

    if(loading) return <h1>Loading...</h1>;
    return (
      <>
        {/* {id != 1 && <button onClick={handlePrev}>Prev</button>} */}
        {id != 100 && <button onClick={handleNext}>Next</button>}    
        {posts.map((post) => (
          <div key={post.id}>
            <h1>{post.id}.  {post.title}</h1>
            <span>{post.body}</span>
        </div>)
        )}
      </>
    );
  }
  