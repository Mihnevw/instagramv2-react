import MoreHorizItem from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';


function Post({ img, name, timing }) {
    return (
        <div className="post">
            <div className="postinfo">
                <img className='postinfoimg' src={img} alt="" />
                <div className="postinfousername">{name}</div>
                <div className="timing">{timing}</div>
            </div>
            {/*<div className="postinfo">
                <img className='postinfoimg' src="https://deadline.com/wp-content/uploads/2023/03/Keanu-Reeves-john-wick-4.jpg?w=1024" alt="" />
                <div className="postinfousername">John</div>
                <div className="timing">• 20min</div>
            </div>*/}
            <div className="postimg">
                {/* Трябва да се добави MoreHorizItem и да се css-не */}
                <img className='img' src={img} alt="err" />
            </div>
            <div className="iconsblock">
                <div className="lefticon">
                    <FavoriteBorderIcon sx={{ fontSize: "25px" }} />
                    <ChatBubbleOutlineIcon sx={{ fontSize: "25px" }} />
                    <TelegramIcon sx={{ fontSize: "25px" }} />
                </div>
                <div>
                    <BookmarkBorderIcon />
                </div>
            </div>
            <div className="likesection">
                <div className="imglikes">
                    <img className='likeimg' src="https://www.telegram.com/gcdn/authoring/authoring-images/2024/08/01/NPAL/74636138007-getty-images-2061736566.jpg?width=1733&height=2600&fit=crop&format=pjpg&auto=webp" alt="error" />
                    <img className='likeimg2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6r6uKjknYrAT57mGNiNmJDXyZqOP_DD6n0g&s" alt="fix" />
                </div>
                <div className="numberlikes">112,098 likes</div>
            </div>
            <div className="aboutpost">
                <div className="postaboutname">John</div>
                <div className="infocomment">Happy to see you John!</div>
            </div>
            <div className="numberofcomments">View All 300 Comments</div>
            <div className="addcomment">Add a comment</div>
        </div>
    )
}

export default Post