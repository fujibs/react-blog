import Post from "../post/Post.jsx";
import "./posts.css";

/**
 * Renders list of posts
 * 
 * https://reactjs.org/docs/lists-and-keys.html
 */
export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p._id} /> 
      ))}
    </div>
  );
}
