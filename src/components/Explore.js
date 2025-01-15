import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function Explore() {
const location = useLocation();
  return (
    <div>
      {location.pathname !== "/explore" ? (
        <>
          {/* Елементи за показване на началната страница */}
          <div>Welcome to the homepage!</div>
          <Link to="/explore">
            <button>Go to Explore</button>
          </Link>
        </>
      ) : (
        <>
          {/* Елементи за страницата на съобщенията */}
          <div>You are now on the Explore page.</div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Explore;