import "./sidebar.css"
import {useState, useEffect} from "react"
import axios from "axios"

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        let mounted = true;
        async function fetchDataAsync() {
        console.log("Fetch Data");
        try {
            const url = "http://localhost:8080/api/categories/";
            const res = await axios.get(url);
            setCats(res.data);
            console.log(res.data);
        } catch (e) {
            console.log(e);
        }
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Officia, tenetur itaque cum aliquam pariatur ut consequuntur harum magni est. 
                    Repellendus quisquam nisi inventore aperiam qui, repellat itaque magnam eveniet quia?
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle"> CATEGORIES </span>
                <ul className="sidebarList">
                    {cats.map((c)=>(
                        <li className="sidebarListItem"> {c.name} </li>
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
