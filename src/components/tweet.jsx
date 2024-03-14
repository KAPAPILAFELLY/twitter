import TweetTitle from "./tweet-title"
import TweetAction from "./tweetAction"
import TweetImage from "./tweetImage"
import TweetText from "./tweetText"
import Avatar from "./avatar"


function Tweet(props) {

    return (
        <div className="tweet">
            <Avatar imagesAvatar={props.imagesAvatar} />
            <div className="tweet-content">
                <div className="tweet-body">
                    <TweetTitle titleAuthor={props.titleAuthor} imagesVector={props.imagesAuthor} titleDetails={props.titleDetails} />
                    <TweetText tweetText={props.tweetText} />
                    <TweetImage tweetImage={props.tweetImage} />
                    <TweetAction imagesReply="src\images\Reply.svg" reply={props.reply} imagesRetweet="src\images\Retweet.svg" retweet={props.retweet}  imagesLike="src\images\React.svg" like={props.like}  imagesTweet="src\images\Tweet-Replies.svg" tweet={props.tweet} />
                </div>
            </div>
        </div>
        
    )

}

export default Tweet