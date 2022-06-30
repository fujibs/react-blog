import Sidebar from "../../components/sidebar/Sidebar"
import "./settings.css"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Settings</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label>Current Profile Picture</label>
                <div className="settingsProfilePicture">
                    <img 
                    src="https://i.imgur.com/IXdy7H3.jpg"
                    alt="" 
                    />
                </div>
                <label htmlFor="fileInput">
                    <i className="settingsPPIcon fa-solid fa-circle-user"><span className="updatePPText">Update your profile picture</span></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <label>Display Name</label>
                <input type="text" placeholder="Display Name"/>
                <label>Email</label>
                <input type="email" placeholder="email@email.com"/>
                <label>Password</label>
                <input type="password" placeholder="••••••"/>
                <button className="updateSettings">Update</button>
            </form>
        </div>
        <Sidebar />
    </div>
  )
}
