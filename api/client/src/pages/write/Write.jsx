import axios from "axios"
import {useState, useContext} from "react"
import { Context } from "../../context/Context"
import "./write.css"

export default function Write() {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [file, setFile] = useState(null)
  const {user} = useContext(Context)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      title,
      desc,
      // email: user.email,
    }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename;
      try{
        let url = "https://bsalty-react-blog.herokuapp.com//api/upload"
        const res = await axios.post(url, data)
      } catch(error) {
        console.log(error)
      }
    }
  try {
      let url = "https://bsalty-react-blog.herokuapp.com/api/posts"
      const res = await axios.post(url, newPost)
      let singleUrl = "https://bsalty-react-blog.herokuapp.com/client/post/" + res.data_id
      window.location.replace(singleUrl)
    } catch(error) {
      console.log(error)
    }
  }
  return (
    <div className="write">
      {file &&
      <img 
        className="writeImg"
        src={URL.createObjectURL(file)}
        alt="Your upload" 
      />
      }
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-file-circle-plus"></i>
          </label>
            <input 
              type="file" 
              id="fileInput" 
              style={{display: "none"}} 
              onChange={e=>setFile(e.target.files[0])}
            />
            <input 
              type="text" 
              placeholder="Title" 
              className="writeInput" 
              autoFocus={true}
              onChange={e=>setTitle(e.target.value)}
            />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            type="text"
            placeholder="Tell me a tale..."
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">Publish</button>
      </form>
    </div>
  )
}
