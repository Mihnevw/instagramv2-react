import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function Create() {
const location = useLocation();
  return (
    <div>
      {location.pathname !== "/create" ? (
        <>
          {/* Елементи за показване на началната страница */}
          <div>Welcome to the createpage!</div>
          <Link to="/create">
            <button>Go to Create</button>
          </Link>
        </>
      ) : (
        <>
          {/* Елементи за страницата на съобщенията */}
          <div>You are now on the Create page.</div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Create;