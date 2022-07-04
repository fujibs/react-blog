import "./post.css"
import {Link} from "react-router-dom"

export default function Post({post}) {
  const publicFolder = "localhost:8080/images/"
  return (
    <div className="post">
        {post.photo && (
        <img className="postImg"
            src={publicFolder + post.photo}
            alt="" 
        />
        )}
        <div className="postInfo">
            <div className="postCategories">
                {post.categories.map((cat)=>(
                    <span className="postCat">{cat.name}</span>
                ))}
            </div>
            <Link to={`/post/${post._id}`} className="link">
                <span className="postTitle">{post.title}</span>
            </Link>
            <hr/>
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
        </div>
        <p className="postDescription">
            {post.description}
        </p>
        <hr/>
    </div>
  )
}
