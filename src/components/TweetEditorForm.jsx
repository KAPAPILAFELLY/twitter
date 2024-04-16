import { useRef, useState } from "react"


export default function TweetEditorForm(){
    const [file, setFile] = useState();
    function handleChange(e) {
        // console.log(e.target.files);
        if(e.target.files[0]){
            setFile(URL.createObjectURL(e.target.files[0]));
        } else {
            setFile();
        }
    
        console.log(file);
    }

    return(
        <div className="tweet-editor-form">
    <input className="tweet-editor-input" type="text" name="" id="" placeholder="what's happening?" />
    { file ? 
        <img src={file} alt="" style={{width:"100%", height: "500px", objectFit: "contain"}} /> 
        : <img src={file} alt="" />}
    <div className="tweet-editor-buttons">

        <div className="tweet-editor-actions">
            <label htmlFor="image">
                <input type="file" id="image" onChange={handleChange} style={{display: "none"}} />
                <img src="src\images\Media.svg" alt="" className="" />
            </label>
            <img src="src\images\Gif.svg" alt="" className="" />
            <img src="src\images\Poll.svg" alt="" className="" />
            <img src="src\images\Group.svg" alt="" className="" />
            <img src="src\images\Schedule.svg" alt="" className="" />

        </div>

        <div className="button">
           <button className="button">Tweet</button>
        </div>

    </div>

</div>
    )
    
}