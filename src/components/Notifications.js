import React from 'react'
import { useLocation, Link } from 'react-router-dom';

function Notifications() {
const location = useLocation();
  return (
    <div>
      {location.pathname !== "/notifications" ? (
        <>
          {/* Елементи за показване на началната страница */}
          <div>Welcome to the notificationspage!</div>
          <Link to="/notifications">
            <button>Go to Create</button>
          </Link>
        </>
      ) : (
        <>
          {/* Елементи за страницата на съобщенията */}
          <div>You are now on the Notifications page.</div>
          <Link to="/">
            <button>Back to Home</button>
          </Link>
        </>
      )}
    </div>
  )
}

export default Notifications;