import { Chat, Person, Search, NotificationAdd } from "@mui/icons-material";
import "./topbar.css";


const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">Instaaaa</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Search for a friend,post or video" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>

       
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge"> <span className="notif">1</span></span>
          </div>

          <div className="topbarIconItem">
            < Chat />
            <span className="topbarIconBadge"> <span className="notif">2</span></span>
          </div>

          <div className="topbarIconItem">
            <NotificationAdd/>
            <span className="topbarIconBadge"><span className="notif">3</span></span>
          </div>
          </div>

          <img src="/../assets.gusta2.jpg" alt="" className="topbarImg"/>
       </div></div>

    </div>
  )
}

export default Topbar