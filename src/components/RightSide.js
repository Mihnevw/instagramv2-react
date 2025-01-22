
import { NavLink } from 'react-router-dom';

import { useAuth } from '../context/AuthContext';

import people from '../People.json';
import './RightSide.css'

function RightSide() {
    const { user } = useAuth();

    let guestNavigation = (
        <>
            <div className="together__buttons">
                <NavLink to="/login" className='login_button' >Login</NavLink>
                <NavLink to="/register" className='register_button' >Register</NavLink>
            </div>
        </>
    );

    let userNavigation = (
        <>
            <span>Welcome, {user.email}</span>

            <div className='rightsidehome'>
                <div className='topprofilerightbutton'>
                    <div className="imgrightside">
                        <img className='imgrightprofile' src="https://cinetown.s3.ap-south-1.amazonaws.com/people/profile_img/1712647543.jpeg" alt="jason" />
                    </div>
                    <div className="usernamenameblock">
                        <div className="usernamerightside">johns</div>
                        <div className="userfullname">john Smit</div>
                    </div>
                    <div className="switchbtn">
                        Switch
                    </div>
                </div>
            </div>
        </>
    )

    return (
        <div className="rightsidehome">
            <div className="topprofileright">
                <div className="leftrightprofile">
                    {/*<div className="imgrightside">
                        <img className='imgrightprofile' src="https://cinetown.s3.ap-south-1.amazonaws.com/people/profile_img/1712647543.jpeg" alt="jason" />
                    </div>*/}
                    {/* Тук трябва да се сложи навигация за да може като се логнеш да ти изписва името */}
                    <nav className="navbar">
                        <div className="user-info">
                            {user.email
                                ? userNavigation
                                : guestNavigation
                            }
                        </div>
                    </nav>

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