export default function TweetImage(props){
    return(
        <div className="tweet-image"> 
            {props.tweetImage&& <img src={props.tweetImage} alt=""/>}
        </div>
    )
}