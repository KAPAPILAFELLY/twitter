import Profil from "./components/Profil/Profil.jsx";
import Home from "./pages/home.jsx";
import Tweets5 from "./components/tweets5/tweets5.jsx";

import('./style/reset.css');
import('./style/App.css');
import { Routes, Route } from "react-router-dom"
import Profile5 from "./components/Profile/Profile5.jsx";


export default function App() {
  return (
      <Routes>
       <Route path="/" element={<Home />}/>
       <Route path="/profile" element={<Profil />}/>
       <Route path="/Profile3" element={<Profil />} />
       <Route path="/tweets6" element={<Tweets5 />} />
       <Route path="/Profile5" element={<Profile5 />} />
       </Routes>
        
      

  );
}
