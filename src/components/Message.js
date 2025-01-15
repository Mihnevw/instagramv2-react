import { Link, useLocation } from "react-router-dom";

import "./Message.css";
import people from '../People.json';
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';


function Message() {
  const location = useLocation(); // Проверяваме текущия път
  return (
    <>
      <div className="leftside">
        <LeftSide />
      </div>
      <div className="message-page">
        <div className="storymessageleftside">
          <div className="story-header">
            <div className="storypartymessage">
              <div className="imgdivmessage">
                <img
                  className="imgidmessage"
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="Jonh"
                />
              </div>
              <div className="textdivmessage">

                <div className="note-container">
                  <span className="paragrapgh">mihnevw</span>
                </div>
                <div className="text-message">
                  <h2>Your Note</h2>
                </div>
              </div>
            </div>
            <div className="message-actions">
              <div className="iconmessage">
                <RateReviewOutlinedIcon sx={{ fontSize: "30px", margin: "0 1px 0 0" }} />
              </div>
              {location.pathname !== "/message" ? (
                <Link to="/message">
                  <button className="action-button">Go to Message</button>
                </Link>
              ) : null}
            </div>
          </div>
          <div className="rightsidehome">
            <div className="topprofileright">
              <div className="leftrightprofile">
                <h1 className="message-people">Message</h1>
              </div>
              <div className="h2">Request</div>
            </div>
            <div className="buttonrightside">
              <div className="followrightside">

                {
                  people.map((story, index) => {
                    return (
                      <div className="storyparty" key={index}>
                        <div className="imgdiv">
                          <img className='imgid' src={story.img} alt="Jonh" />
                        </div>
                        <div className="profilename">{story.name}</div>
                      </div>
                    )
                  })
                }

              </div>
            </div>
          </div>

        </div>
        <div className="rightside">
          <div className="message-content">
            <p className="message-info">
              Изпратете лични снимки и съобщения на приятели
            </p>
            <button className="send-message-button">Изпращане на съобщение</button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Message;
