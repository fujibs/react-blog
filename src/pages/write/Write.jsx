import "./write.css"

export default function Write() {
  return (
    <div className="write">
        <img 
            className="writeImg"
            src="https://imgs.search.brave.com/n8ht-0kEn2KDwVoZDHKZT05OJ-NLZqkv916jcJ6ssVo/rs:fit:1080:720:1/g:ce/aHR0cHM6Ly9zcGly/aXR1YWxpdHloZWFs/dGguY29tL2Fzc2V0/cy9pbWFnZXMvQmxv/Z3MvX2FydGljbGVT/dW1tYXJ5SW1hZ2Uv/am91cm5hbHMuanBn"
            alt="Your upload" 
        />
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fa-solid fa-file-circle-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display: "none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea
                    className="writeInput writeText"
                    type="text"
                    placeholder="Tell me a tale..."
                ></textarea>
            </div>
        </form>
        <button className="writeSubmit">Publish</button>
    </div>
  )
}
