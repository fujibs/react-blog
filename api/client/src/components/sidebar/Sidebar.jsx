import "./sidebar.css"
import {useState, useEffect} from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { axiosInstance } from "../../config";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const [hasError, setError] = useState(false);

  useEffect(() => {
    let mounted = true;
    async function fetchDataAsync() {
      console.log("Fetch Data");
      try {
        const url = "http://localhost:8080/api/categories/";
        const res = await axiosInstance.get(url);
        setCats(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    }
    
  if (hasError) {
    return <p>Loading categories failed.</p>
  }

    if (mounted) fetchDataAsync();
      return () => {
        mounted = false;
      };
    }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle"> ABOUT ME </span>
        <img className="sidebarImg"
          src="https://i.imgur.com/9GNTYLW.jpg" 
          alt="Me" 
        />
        <p className="aboutMeDesc">
          This is me.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES </span>
        <ul className="sidebarList">
          {cats.map((c)=>(
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem"> {c.name} </li>
            </Link>
          ))}
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
