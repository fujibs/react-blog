import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts.jsx"
import Sidebar from "../../components/sidebar/Sidebar.jsx"
import "./homepage.css"

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="homepage">
        <Posts />
        <Sidebar />
      </div>
    </>
  )
}
