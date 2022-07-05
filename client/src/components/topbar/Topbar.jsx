import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
  return (
    <div className="top">
        <div className="topLeft">
            <i className="socialIcon fa-brands fa-facebook-square"></i>
            <i className="socialIcon fa-brands fa-instagram-square"></i>
            <i className="socialIcon fa-brands fa-pinterest-square"></i>
            <i className="socialIcon fa-brands fa-twitter-square"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className="link">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link to="/" className="link">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link to="/" className="link">CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link to="/write" className="link">WRITE</Link>
                </li>
                <li className="topListItem">
                    <Link to="/login" className="link">{user && "LOGOUT"}</Link>
                </li>
            </ul>
        </div>
        <div className="topRight">
            {
                user ? (
                    <img className="profilePicture"
                        src="https://i.imgur.com/IXdy7H3.jpg"
                        alt="Profile Picture"
                    />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link to="/login" className="link">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link to="/register" className="link">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
