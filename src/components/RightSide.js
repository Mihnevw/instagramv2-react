import React from 'react'
import './RightSide.css'

import people from '../People.json';

function RightSide() {
    return (
        <div className="rightsidehome">
            <div className="topprofileright">
                <div className="leftrightprofile">
                    <div className="imgrightside">
                        <img className='imgrightprofile' src="https://cinetown.s3.ap-south-1.amazonaws.com/people/profile_img/1712647543.jpeg" alt="jason" />
                    </div>
                    <div className="usernamenameblock">
                        <div className="usernamerightside">zsksk</div>
                        <div className="userfullname">john Smit</div>
                    </div>
                </div>
                <div className="switchbtn">
                    Switch
                </div>
            </div>
            <div className="buttonrightside">
                <div className="suggestedblock">
                    <div className="suggestedforyou">Suggested For You</div>
                    <div className="seeall">See All</div>
                </div>
                <div className="followrightside">
                    {
                        people.map((person, index) => {
                            return (
                                <div className="topprofilerightbutton" key={index}>
                                    <div className="leftrightprofile">
                                        <div className="imgrightside">
                                            <img className='imgrightprofile' src={person.img} alt="jason" />
                                        </div>
                                        <div className="usernamenameblock">
                                            <div className="usernamerightside">{person.name}</div>
                                            <div className="userfullname">New to Instagram</div>
                                        </div>
                                    </div>
                                    <div className="switchbtn">
                                        Follow
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RightSide