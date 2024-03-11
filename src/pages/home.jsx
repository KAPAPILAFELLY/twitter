import React from 'react';
import Header from '../components/header/header';
import Tweeteditor from '../components/tweet-editor/tweet-editor';
import Tweets from '../components/tweets/tweets';
import Sidebar from '../components/Sidebar/Sidebar';
import Trends from '../components/Trends/Trends';
import Profil from '../components/Profil/Profil';
// import Profile5 from '../components/Profile/Profile5';
function Home() {
  return ( 
    <>
    <Sidebar/>
    

    <main className="timeline">
      <Header />
      <Tweeteditor />
      <Tweets/>
     
      {/* <Tweets2/> */}
      
    </main>
    <Trends/>
    </>
    
  );
}

export default Home;