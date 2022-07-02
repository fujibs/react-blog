import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  // holds all blog posts
  const [posts, setPosts] = useState([]);

  /**
   * Fetch all blogs on component is loaded
   */
  useEffect(() => {
    let mounted = true;

    /**
     * Makes API request for journal data
     * and sets data in state
     *
     * we type 'async' in front of 'function'
     * so that we can use 'await' within the scope of the function
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function
     */
    async function fetchDataAsync() {
      console.log("go");
      /**
       * We use try/catch to handle our promise results
       * or errors.
       * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch
       */
      try {
        const url = "http://localhost:8080/api/posts";
        const res = await axios.get(url); // fetch data
        setPosts(res.data);
        console.log(res.data);
      } catch (e) {
        // handle your errors here
        console.log(e);
      }
    }

    if (mounted) fetchDataAsync();

    return () => {
      mounted = false;
    };
  }, []);

  /**
   * Old code
   */
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("/posts/");
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // }, []);

  return (
    <>
      <Header />
      <div className="homepage">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </>
  );
}
