import { Link, useLocation } from "react-router-dom"
import "./singlePost.css"
import axios from "axios"
import { useContext, useEffect, useState } from "react";
// import { Context } from "../../context/Context"

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2]
    const [post, setPost] = useState({})
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [updateMode, setUpdateMode] = useState(false)
    const buttonVisibility = false
    // const {user} = useContext(Context)

    useEffect(() => {
      let mounted = true;
      async function fetchDataAsync() {
        console.log("Fetch Data");
        try {
          const url = "http://localhost:8080/api/posts/" + path;
          const res = await axios.get(url);
          setPost(res.data);
          setTitle(res.data.title);
          setDesc(res.data.desc);
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

    const handleDelete = async()=> {
      try{
        let url = "http://localhost:8080/api/posts/" + path
        await axios.delete(url)
        let homeUrl = "http://localhost:3000/"
        window.location.replace(homeUrl)
      } catch (error) {
        console.log(error)
      }
    }

  const handleUpdate = async() => {
    try{
      let url = "http://localhost:8080/api/posts/" + path
      await axios.put(url, {
        title,
        desc,
      });
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }


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
                {updateMode ? (
                  <input 
                    type="text" 
                    value={title} 
                    className="singlePostTitleInput"
                    autoFocus
                    onChange={(e) => setTitle(e.target.value)}
                  /> 
                  ) : (
                  <h1 className="singlePostTitle">
                    {post.title}
                    <div className="singlePostEdit">
                        <div className="editPost" onClick={() => setUpdateMode(true)}>
                          <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                          <span className="singleEditText">Edit</span>
                        </div>
                        <div className="deletePost" onClick={handleDelete}>
                          <i className="singlePostIcon fa-solid fa-trash"></i>
                          <span className="singleEditText">Delete</span>
                        </div>
                    </div>
                  </h1>
                )}
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                    Author:
                    <Link to={`/?user=${post.email}`}className = "link">
                      <b>{post.displayName}</b>
                    </Link>
                    </span>
                    <br></br>
                    <span className="singlePostTimestamp">{new Date(post.createdAt).toDateString()}</span>
                </div>
                {updateMode ? (
                <textarea 
                  className="singlePostDescInput"
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                />
                ) : (
                  <p className="singlePostDesc">{post.desc}</p>
                )}
                <button className="singlePostButton" onClick={handleUpdate}>Update Post</button>
            </div>
        </div>
    )
}
