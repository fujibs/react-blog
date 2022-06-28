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
            src="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/246852096_405277907770335_6546772943409642390_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=hj3WFleyB6YAX8sbBju&_nc_oc=AQlJaigwwAtuTUQfSqbHPVsW2YYlgGdUOVEz15b6zhOqLSMC-n79_ZhE2qq7BKU67mRGHwoHUe1ItYnn3FaQT0CF&_nc_ht=scontent-atl3-1.xx&oh=00_AT_UPIkPBuA9iXP9gSV-aHqz2tsVQyskb14cJU_5OQ3TdQ&oe=62BB1643"
            alt="Profile"
        />
        <i className="searchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}
