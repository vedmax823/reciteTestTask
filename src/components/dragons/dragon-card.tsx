import React from 'react';
import { Dragon } from '../../../types';
import { Link } from 'react-router-dom';
import { DRAGONS_ROUTE } from '../../utils/constants';

interface DragonCardProps {
    dragon : Dragon
}

const DragonCard = ({ dragon } : DragonCardProps) => {
    return (
      <Link to ={`${DRAGONS_ROUTE}/${dragon.id}`}>
        <div className="w-90  border-2 border-orange-400 rounded-xl overflow-hidden">
          <div className="w-full h-48 overflow-hidden bg-gray-200 ">
            <img
              src={dragon.flickr_images[0]}
              alt={dragon.name}
              className="w-full h-full object-fill"
            />
          </div>
          <div className="mt-4">
            <div>
              <p className="mt-1 text-sm text-gray-700 font-medium">name : {dragon.name}</p>
              <p className="mt-1 text-sm text-gray-500">type : {dragon.type}</p>
              <p className="text-sm  text-gray-500">first fly : {dragon.first_flight}</p>
            </div>
            
          </div>
        </div>
        </Link>
      );
};

export default DragonCard;