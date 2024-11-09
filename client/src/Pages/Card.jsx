import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ name, img, }) => {

    const navigate = useNavigate();


  return (
    <div className="max-w-sm w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <div className="flex items-center justify-between p-4">
        <h2 className="text-lg font-semibold">{name}</h2>
        <button onClick={(e) => navigate(`/edit?url=${img}`)}
          className="text-blue-500 hover:text-blue-700 focus:outline-none"
        >
          ✏️ Edit
        </button>
      </div>
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt={`${name}`}
      />
    </div>
  );
};

export default Card;
