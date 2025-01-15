import React from 'react';

const NotificationCard = () => {
  return (
    <div className="flex items-center space-x-4 p-4 border rounded-lg shadow-md">
      {/* Image Section */}
      <div className="shrink-0">
        <img
          alt=""
          loading="lazy"
          width="100"
          height="100"
          decoding="async"
          data-nimg="1"
          className="w-12 h-12 object-contain rounded-[12px]"
          style={{ color: 'transparent' }}
          srcSet="/_next/static/media/macdo.4afa342d.png 1x, /_next/static/media/macdo.4afa342d.png 2x"
          src="/_next/static/media/macdo.4afa342d.png"
        />
      </div>

      {/* Text Content Section */}
      <div className="w-full">
        <div className="font-semibold text-gray-950">Your order just arrived!</div>
        <div className="font-normal text-gray-700 leading-tight">
          It's your 13th BigMama order this month! 🍔🍟🥤
        </div>
      </div>

      {/* Time Section */}
      <div>
        <p className="text-gray-600">now</p>
      </div>
    </div>
  );
};

export default NotificationCard;
