import React from 'react'
import './MiddleSide.css'

import Story from '../Story.json';
import Post from './Posts/Post';

import people from '../People.json';


function MiddleSide() {
    const storys = Story.story;
    return (
        <div className='middlesidehome'>
            <div className="story">
                {
                    storys.map((story, index) => {
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

            <div className="postsection">
                {
                    people.map((person, index) => (
                        <Post
                            key={index}
                            img={person.img}
                            name={person.name}
                            timing="20min" // Тук може да сложите динамично време, ако е необходимо
                        />
                    ))
                }
            </div>
            
        </div>
    )
}

export default MiddleSide