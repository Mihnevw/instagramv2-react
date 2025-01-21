import { NavLink } from 'react-router-dom';

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

import './LeftSide.css';


function LeftSide() {
  return (
    <div className='leftsidepart'>
      <NavLink to='/'>
        <div className="logopart">
          <img className='logoimg' src="https://www.pngkey.com/png/detail/2-28310_instagram-logo-black-and-ahite-instagram-word-logo.png" alt="Instagram Logo" />
        </div>
      </NavLink>
      <div className="navlinkpart">
        <NavLink to='/' className="navlink">
          <HomeIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Home</div>
        </NavLink>
        <NavLink to='/search' className="navlink">
          <SearchIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Search</div>
        </NavLink>
        <NavLink to='/explore' className="navlink">
          <ExploreIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Explore</div>
        </NavLink>
        <NavLink to='/reels' className="navlink">
          <ReelsIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Reels</div>
        </NavLink>
        <NavLink to='/message' className="navlink">
          <MessageIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Message</div>
        </NavLink>
        <NavLink to='/notifications' className="navlink">
          <FavoriteBorderIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Notifications</div>
        </NavLink>
        <NavLink to='/create' className="navlink">
          <CreateIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
          <div className="navname">Create</div>
        </NavLink>
        <NavLink to='/profile' className="navlink">
          <img className='profileimg' src={Profile} alt="profile" />
          <div className="navname">Profile</div>
        </NavLink>
        <div className="belowpart">
          <NavLink to='/threads' className="navlink">
            <ThreadsIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
            <div className="navname">Threads</div>
          </NavLink>
          <NavLink to='/more' className="navlink">
            <MoreIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
            <div className="navname">More</div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default LeftSide