import "./topbar.css"

export default function TopBar() {
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
                <li className="topListItem">HOME</li>
                <li className="topListItem">ABOUT</li>
                <li className="topListItem">CONTACT</li>
                <li className="topListItem">WRITE</li>
                <li className="topListItem">LOGOUT</li>
            </ul>
        </div>
        <div className="topRight">
        <img className="profilePicture"
            src="https://i.imgur.com/IXdy7H3.jpg"
            alt="Profile"
        />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
