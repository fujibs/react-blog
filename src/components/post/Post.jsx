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
        <p className="postDescription">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            Distinctio cum doloribus dolorum nam eius aspernatur deleniti excepturi sed at dolorem! 
            Laudantium facere tenetur cumque itaque sequi? 
            Hic dignissimos dolorum voluptatum.
        </p>
        <hr/>
    </div>
  )
}
