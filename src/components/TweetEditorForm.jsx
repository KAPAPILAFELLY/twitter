

export default function TweetEditorForm(){
    return(
        <div className="tweet-editor-form">
    <input className="tweet-editor-input" type="text" name="" id="" placeholder="what's happening?" />

    <div className="tweet-editor-buttons">

        <div className="tweet-editor-actions">
            <img src="src\images\Media.svg" alt="" className="" />
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