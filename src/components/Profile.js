import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function Profile() {
const location = useLocation();
  return (
    <div>
      {location.pathname !== "/profile" ? (
        <>
          {/* Елементи за показване на началната страница */}
          <div>Welcome to the profilepage!</div>
          <Link to="/profile">
            <button>Go to Explore</button>
          </Link>
        </>
      ) : (
        <>
          {/* Елементи за страницата на съобщенията */}
          <div>You are now on the Profile page.</div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Profile;