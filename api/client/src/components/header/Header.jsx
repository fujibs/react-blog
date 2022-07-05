import "./header.css"

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitle">
            <span className="headerTitleSm"> MERN Stack </span>
            <span className="headerTitleLg"> Blog </span>
        </div>
        <img className="banner"
            src="https://i.imgur.com/TcV259h.jpg"
            alt="Banner" 
        />
    </div>
  )
}
