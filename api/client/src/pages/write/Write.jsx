import {useState, useContext} from "react"
import { axiosInstance } from "../../config"
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
    }
    if(file){
      const data = new FormData()
      const filename = Date.now() + file.name
      data.append("name", filename)
      data.append("file", file)
      newPost.photo = filename;
      try{
        const res = await axiosInstance.post("/upload", data)
      } catch(error) {
        console.log(error)
      }
    }
  try {
<<<<<<< HEAD:api/client/src/pages/write/Write.jsx
      const res = await axiosInstance.post("/posts", newPost)
=======
      let url = "http://localhost:8080/api/posts"
      const res = await axios.post(url, newPost)
      let singleUrl = "http://localhost:3000/post/" + res.data_id
      window.location.replace(singleUrl)
>>>>>>> parent of 3072a70 (functionality finished mostly (small bugs)):client/src/pages/write/Write.jsx
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
