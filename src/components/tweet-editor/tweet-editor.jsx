import React from "react";
// import Profilephoto from "src\images\ profile-photo.png"
import TweetEditorForm from "../TweetEditorForm";
import { Link } from "react-router-dom";


function Tweeteditor() {
    return (
        <>
            <div className="tweet-editor">
                <div className="avatar">
                    <Link to="/Profile"><img src="src/images/profile-photo.png" alt=" " className="avatar" /></Link>
                    {/* {Profilephoto} */}
                </div>

               <TweetEditorForm/>


            </div>

        </>
    )
}



export default Tweeteditor 