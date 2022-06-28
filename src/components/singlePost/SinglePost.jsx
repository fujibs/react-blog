import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
                className="singlePostImg"
                src="https://imgs.search.brave.com/n2C5NZ8bgiGZZZqjjR4_VhIV5xvektupjuN2k7XSldw/rs:fit:1024:819:1/g:ce/aHR0cDovL2ltYWdl/czUuZmFucG9wLmNv/bS9pbWFnZS9waG90/b3MvMjgwMDAwMDAv/cmFuZG9taXNlZC1y/YW5kb20tMjgwNjUx/NjUtMTAyNC04MTku/anBn" 
                alt="" 
            />
            <h1 className="singlePostTitle">
                Lorem
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <span className="singleEditText">Edit</span>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                    <span className="singleEditText">Delete</span>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Brandon Saltzman</b></span>
                <br></br>
                <span className="singlePostTimestamp">1 sec ago</span>
            </div>
            <p className="singlePostDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Laborum praesentium, ut placeat quod repudiandae vitae 
                nobis optio dicta, doloribus sit reprehenderit illum 
                eligendi commodi expedita ratione? Illo quidem quae alias!
            </p>
        </div>
    </div>
  )
}
