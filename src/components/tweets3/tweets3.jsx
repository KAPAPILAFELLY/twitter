import React, { useState } from "react";
import image3 from "../../images/image 1 (4).svg";

function Tweets3() {
   const [like, setLike] = useState(267)
   const [verify, setVerify] = useState(false)

   function addtweet() {
      if (verify!== false) {
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
      <div className="tweet">
         <div className="tweet-avatar">
            <img src={image3} alt="" />

         </div>
         <div className="tweet-content">
            <div className="tweet-body">
               <div className="tweet-title">
                  <h2 className="tweet-title-author">Twetter</h2>
                  <img src="src\images\Vector.png" alt="" />
                  <p className="tweet-title-details">@Twetter . oct 29</p>

               </div>
               <div className="tweet-text">
                  <p>BIG NEWs lol jk still Twetter</p>

               </div>
               <div className="tweet-actions">
                  <div className="tweet-action">
                     <img src="src\images\Reply.svg" alt="" />
                     <span>6.8K</span>
                  </div>
                  <div className="tweet-action">
                     <img src="src\images\Retweet.svg" alt="" />
                     <span>36.8K</span>
                  </div>
                  <div className="tweet-action">
                     <img src="src\images\React.svg" alt="" onClick={addtweet}/>
                     <span>{like}</span>
                  </div>
                  <div className="tweet-action">
                     <img src="src\images\Tweet-Replies.svg" alt="" />
                  </div>

               </div>


            </div>

         </div>
      </div>
   )
}
export default Tweets3