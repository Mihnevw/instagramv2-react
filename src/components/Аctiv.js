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


//Код за taiwand.css
//<h1 className='lg:backdrop:-mb-4 group'>
        //Turn visitors into

        //<span className='relative mr-2 lg:backdrop:mr-3'>
          //<span>customers</span>
          //<span className='absolute top-0 -translate-y-1/3 translate-x-1/2 right-0 drop-shadow-md scale-75 saturate-[0] group-hover:rotate-6 group-hover:saturate-100 group-hover:scale-[0.9] duration-150'>🤑</span>
        //</span>
        //with
        //<span className='border-b-8 border-dashed border-primary/50 whitespace-nowrap duration-200 group-hover:border-accent'>wake-up call</span>
        //popups
      //</h1>