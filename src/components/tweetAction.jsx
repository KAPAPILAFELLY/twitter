export default function TweetAction(props) {
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
            <div className="tweet-action">
                <img src={props.imagesLike} alt="" />
                <span>{props.like}</span>
            </div>
            <div className="tweet-action">
                <img src={props.imagesTweet} alt="" />
                <span>{props.tweet}</span>
            </div>

        </div>

    )
}