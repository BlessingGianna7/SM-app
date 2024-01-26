import { Rightbar } from "../../components/rightbar/Rightbar"
import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import Sidebar from "../../components/topbar/sidebar/Sidebar"
import "./home.css"
const Home = () => {
  return (
    <div>
    
      <Topbar/>
      <div className="homeContainer">
        <Sidebar/>
        
        <Feed/>
        
        <Rightbar/>
        </div>  
         
    </div>
  )
}

export default Home