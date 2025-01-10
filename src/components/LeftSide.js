
import './LeftSide.css';
import Profile from '../assets/profile.jpg';
import ThreadsIcon from '@mui/icons-material/Gesture';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import MessageIcon from '@mui/icons-material/Telegram';
import ReelsIcon from '@mui/icons-material/Slideshow';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CreateIcon from '@mui/icons-material/AddCircleOutline';
import MoreIcon from '@mui/icons-material/Menu';


function LeftSide() {
  return (
    <div className='leftsidepart'>
      <div className="logopart">
        <img className='logoimg' src="https://www.pngkey.com/png/detail/2-28310_instagram-logo-black-and-ahite-instagram-word-logo.png" alt="Instagram Logo" />
      </div>
      <div className="navlinkpart">
        <div className="navlink">
          <HomeIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Home</div>
        </div>
        <div className="navlink">
          <SearchIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Search</div>
        </div>
        <div className="navlink">
          <ExploreIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Explore</div>
        </div>
        <div className="navlink">
          <ReelsIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Reels</div>
        </div>
        <div className="navlink">
          <MessageIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Message</div>
        </div>
        <div className="navlink">
          <FavoriteBorderIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Notifications</div>
        </div>
        <div className="navlink">
          <CreateIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Create</div>
        </div>
        <div className="navlink">
          <img className='profileimg' src={Profile} alt="profile" />
          <div className="navname">Profile</div>
        </div>
        <div className="belowpart">
          <div className="navlink">
            <ThreadsIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
            <div className="navname">Threads</div>
          </div>
          <div className="navlink">
            <MoreIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
            <div className="navname">More</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftSide