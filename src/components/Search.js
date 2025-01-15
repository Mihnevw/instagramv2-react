import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function Search() {
const location = useLocation();
  return (
    <div>
      {location.pathname !== "/search" ? (
        <>
          {/* Елементи за показване на началната страница */}
          <div>Welcome to the searchpage!</div>
          <Link to="/search">
            <button>Go to Explore</button>
          </Link>
        </>
      ) : (
        <>
          {/* Елементи за страницата на съобщенията */}
          <div>You are now on the Search page.</div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Search;