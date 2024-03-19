export default function TweetTitle(props) {
    return (
        <div className="tweet-title">
            <h2 className="tweet-title-author">{props.titleAuthor}</h2>
           <img src={props.imagesVector} alt="" />
            <p className="tweet-title-details">{props.titleDetails}</p>
        </div>
    )
}
