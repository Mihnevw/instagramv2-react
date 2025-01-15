import React from 'react';

const notifications = [
  {
    id: 1,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg', // Netflix logo
    title: 'Daily Average: 5h 36min',
    message: "Your startup won't grow by binge watching all day",
    time: '2d',
  },
  {
    id: 2,
    logo: 'https://randomuser.me/api/portraits/men/32.jpg', // Random profile picture
    title: 'Gym Chad',
    message: '6 months ago you said tomorrow. Still in couch?',
    time: '30d',
  },
  {
    id: 3,
    logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/X_logo_2023.svg', // X logo
    title: '0 likes on your last post',
    message: 'Consider a career shift',
    time: 'now',
  },
];

const NotificationCard = ({ logo, title, message, time }) => {
  return (
    <div className="flex items-center p-4 mb-2 bg-gray-100 rounded-lg shadow-sm">
      {/* Logo Section */}
      <div className="shrink-0">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 object-contain rounded-full"
        />
      </div>

      {/* Content Section */}
      <div className="flex-grow px-4">
        <div className="font-semibold text-gray-800">{title}</div>
        <div className="text-sm text-gray-600 leading-tight">{message}</div>
      </div>

      {/* Time Section */}
      <div className="text-gray-500 text-sm whitespace-nowrap">{time}</div>
    </div>
  );
};

const NotificationList = () => {
  return (
    <div className="max-w-md mx-auto">
      {notifications.map((notification) => (
        <NotificationCard key={notification.id} {...notification} />
      ))}
    </div>
  );
};

export default NotificationList;
