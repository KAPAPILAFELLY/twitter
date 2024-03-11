import React from "react";
// import image7 from "../../images/image 1 (2).svg";
import tweet from "../../../images/tweet-profile-photo.png"
import profile from "../../../images/profile-photo.png"
import image from "../../../images/image 1 (4).svg"
import vector2 from "../../../images/Vector.png"
import vector8 from "../../../images/Vector.png"
import vector9 from "../../../images/Vector.png"
import { Link } from "react-router-dom";

export default function Profile3() {
    return (
        <div>
            <div className="">
                <h2 className="tweet-title-lists">Who to follow</h2>
                <div className="flex gap-4 my-8">
                            <div className="tweet-avatar">
                                <Link><img src={image} alt="" /></Link>
                            </div>

                            <div className="flex flex-col items-start content-center">
                                <div className="flex">
                                    <Link><h2 className="tweet-title-author">The New York Times</h2></Link>
                                    <Link><img src={vector2} alt="" className="w-5 h-5"/></Link>
                                </div>
                                <Link>
                                <p className="tweet-title-details">@nytimess</p>
                                <p>Habari | Elimu | Burudani | Maoni ya wasomaji si maoni ya Swahili J... </p>
                                </Link>
                                
                            </div>

                            <button className="buttonTrends">Follow</button>    
                                        
                        </div>
                        <div className="flex gap-4 my-2">
                            <div className="tweet-avatar">
                                <Link><img src={tweet} alt="" className="w-12 h-12" /></Link>
                            </div>

                            <div className="flex flex-col items-start mr-14">
                                <div className="flex">
                                    <Link><h2 className="tweet-title-author">CNN</h2></Link>
                                    <Link><img src={vector8} alt="" className="w-5 h-5"/></Link>
                                    
                                </div>
                                <Link><p className="tweet-title-details">@CNN</p></Link>
                                <Link><p>Official EastAfricaTV (EATV) Twitter Email: habari@eatv.tv</p></Link>
                            </div>

                            <button className="buttonTrends">Follow</button>    
                                        
                        </div>
                        <div className="flex gap-4 my-2">
                            <div className="tweet-avatar">
                                <Link><img src={profile} alt="" className="w-12 h-12" /></Link>
                            </div>

                            <div className="flex flex-col items-start mr-10">
                                <div className="flex">
                                    <Link><h2 className="tweet-title-author">Twitter</h2></Link>
                                    <Link><img src={vector9} alt="" className="w-5 h-5"/></Link>
                                </div>
                                <Link>
                                <p className="tweet-title-details">@Twitter</p>
                                <p>Don't overpay on Amazon again! You're welcome.</p>
                                </Link>
                               
                            </div>

                            <button className="buttonTrends">Follow</button>    
                                        
                        </div>


                    

                        <div className="style-text">
                            <Link><p>Show more</p></Link>
                        </div>

            </div>
        </div>
    )
}