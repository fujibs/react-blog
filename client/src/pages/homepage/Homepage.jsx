import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();
  const [hasError, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function fetchDataAsync() {
      console.log("Fetch Data");
      try {
        const url = "http://localhost:8080/api/posts" + search;
        const res = await axios.get(url);
        setPosts(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }

    if (hasError) {
      return <p>Loading posts failed.</p>
    }

    if (mounted) fetchDataAsync();

    return () => {
      mounted = false;
    };
  }, [search]);

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
