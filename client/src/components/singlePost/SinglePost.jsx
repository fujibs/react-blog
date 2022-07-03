import { useLocation } from "react-router-dom"
import "./singlePost.css"
import axios from "axios"
import { useEffect, useState } from "react";

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})

    useEffect(() => {
      let mounted = true;
      async function fetchDataAsync() {
        console.log("Fetch Data");
        try {
          const url = "http://localhost:8080/api/posts/" + path;
          const res = await axios.get(url);
          setPost(res.data);
          console.log(res.data);
        } catch (e) {
          console.log(e);
        }
      }
  
      if (mounted) fetchDataAsync();
  
      return () => {
        mounted = false;
      };
    }, [path]);

    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                {post.photo &&        
                    <img 
                        className="singlePostImg"
                        src={post.photo}
                        alt="" 
                    />
                }
                <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                        <span className="singleEditText">Edit</span>
                        <i className="singlePostIcon fa-solid fa-trash"></i>
                        <span className="singleEditText">Delete</span>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>{post.displayName}</b></span>
                    <br></br>
                    <span className="singlePostTimestamp">{new Date(post.createdAt).toDateString()}</span>
                </div>
                <p className="singlePostDesc">{post.description}</p>
            </div>
        </div>
    )
    }
