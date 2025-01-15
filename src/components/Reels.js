import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function Reels() {
const location = useLocation();
  return (
    <div>
      {location.pathname !== "/reels" ? (
        <>
          {/* Елементи за показване на началната страница */}
          <div>Welcome to the reelspage!</div>
          <Link to="/reels">
            <button>Go to Explore</button>
          </Link>
        </>
      ) : (
        <>
          {/* Елементи за страницата на съобщенията */}
          <div>You are now on the Reels page.</div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Reels;