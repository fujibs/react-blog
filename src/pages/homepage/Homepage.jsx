import Header from "../../header/Header"
import Posts from "../../posts/Posts.jsx"
import Sidebar from "../../sidebar/Sidebar.jsx"
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
