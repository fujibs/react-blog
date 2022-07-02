import { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts.jsx";
import Sidebar from "../../components/sidebar/Sidebar.jsx";
import "./homepage.css";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function Homepage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts/");
      setPosts(res.data);
    }
    fetchPosts();
  },[]);

  return (
    <>
      <Header />
      <div className="homepage">
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  )
}
