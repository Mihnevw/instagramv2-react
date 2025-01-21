
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import LeftSide from './LeftSide';

import './Explore.css';

function Explore() {
  const [photos, setPhotos] = useState([]);
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus(); //Фокусира върху input полето
  }

  useEffect(() => {
    axios.get('https://api.pexels.com/v1/curated', {
      params: {
        per_page: 20
      },
      headers: {
        Authorization: 'kcCi7gA595DkpOFggtS7XAguOnRCBTN7tQNtyV4M9OG5rb7X9iFwWrge'
      }
    })
      .then((res) => {
        console.log(res.data)
        setPhotos(res.data.photos);
      })
      .catch((error) => {
        console.error(error);
      })
  }, []);

  return (
    <>
      <div className="leftside">
        <LeftSide />
      </div>
      <div className="explore-container">
        <div className="photo-grid">
          {photos && photos.length > 0 && photos.map((photo, index) => (
            <div key={index} className="photo-card">
              {photo.urls ? (
                <img src={photo.urls.small} alt={photo.alt_description || 'Photo'} />
              ) : (
                <p>Image not available</p> // Това ще се показва, ако няма URL за снимката
              )}
            </div>
          ))}
        </div>
      </div>
      <div>
        <input ref={inputRef} type="text" placeholder='type something' />
        <button onClick={handleClick}>Фокусирай</button>
      </div>
    </>
  );
}

export default Explore;
