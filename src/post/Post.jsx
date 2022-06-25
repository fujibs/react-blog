import "./post.css"

export default function post() {
  return (
    <div className="post">
        <img className="postImg"
            src="" 
            alt="" 
        />
        <div className="postInfo">
            <div className="postCategories">
                <span className="postCat"> Life </span>
                <span className="postCat"> Music </span>
            </div>
            <span className="postTitle">
                Lorem
            </span>
            <hr/>
            <span className="postDate">1 sec ago</span>
        </div>
    </div>
  )
}
