import { useState } from "react"

export default function TweetAction(props) {
    const [like, setLike] = useState(10)
    const [verify, setVerify] = useState(false)

    function addtweet() {
          if (verify!==false) {
            setLike(like-1)
            setVerify(false)
            console.log('false')           
          }else{
            setLike(like+1)
            setVerify(true)
            console.log('true')
          }
    }
    return (
        <div className="tweet-actions">
            <div className="tweet-action">
                <img src={props.imagesReply} alt="" />
                <span>{props.reply}</span>
            </div>
            <div className="tweet-action">
                <img src={props.imagesRetweet} alt="" />
                <span>{props.retweet}</span>
            </div>
            <div className="tweet-action " onClick={addtweet}>
                <img src={props.imagesLike} alt="" />
                <span>{like}</span>
            </div>
            <div className="tweet-action">
                <img src={props.imagesTweet} alt="" />
                <span>{props.tweet}</span>
            </div>

        </div>

    )
}