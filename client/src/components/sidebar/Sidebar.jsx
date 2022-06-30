import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME </span>
            <img className="sidebarImg"
                src="https://i.imgur.com/9GNTYLW.jpg" 
                alt="Me" 
            />
            <p className="aboutMeDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Officia, tenetur itaque cum aliquam pariatur ut consequuntur harum magni est. 
                Repellendus quisquam nisi inventore aperiam qui, repellat itaque magnam eveniet quia?
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle"> CATEGORIES </span>
            <ul className="sidebarList">
                <li className="sidebarListItem"> Life </li>
                <li className="sidebarListItem"> Fashion </li>
                <li className="sidebarListItem"> Food </li>
                <li className="sidebarListItem"> Movies/TV </li>
                <li className="sidebarListItem"> Music </li>
                <li className="sidebarListItem"> Sports </li>
                <li className="sidebarListItem"> Technology </li>
                <li className="sidebarListItem"> Travel </li>
                <li className="sidebarListItem"> Video Games</li>
                <li className="sidebarListItem"> Random</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle"> FOLLOW ME </span>
            <div className="sidebarSocial">
                <i className="socialIcon fa-brands fa-facebook-square"></i>
                <i className="socialIcon fa-brands fa-instagram-square"></i>
                <i className="socialIcon fa-brands fa-pinterest-square"></i>
                <i className="socialIcon fa-brands fa-twitter-square"></i>
            </div>
        </div>
    </div>
  )
}
