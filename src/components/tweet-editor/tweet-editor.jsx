import React from "react";
// import Profilephoto from "src\images\ profile-photo.png"
import TweetEditorForm from "../TweetEditorForm";


function Tweeteditor() {
    return (
        <>
            <div className="tweet-editor">
                <div className="avatar">
                    <img src="src/images/profile-photo.png" alt=" " className="avatar" />
                    {/* {Profilephoto} */}
                </div>

               <TweetEditorForm/>


            </div>

        </>
    )
}



export default Tweeteditor 