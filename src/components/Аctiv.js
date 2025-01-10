import { useState } from 'react';
import Story from '../Story.json';
import MiddleSide from './MiddleSide';

function Activ() {
    console.log(Story);
    const [stories, setStories] = useState(Story.story);  // Вземате масива от Story.json, който е под ключ "story"
    console.log(Story.story);  
    return (
        <div>Activ
            {stories?.map((story, index) => (
                <MiddleSide
                    key={index}
                    img={story.img}
                    name={story.name}
                />
            ))}
        </div>
    )
}

export default Activ;
