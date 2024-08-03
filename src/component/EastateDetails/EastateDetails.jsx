// src/EstateDetails.jsx
import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const EstateDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const estate = data.residential_estates.find(item => item.id === parseInt(id));

  return (
    <div className="py-8 px-4 md:px-8 lg:px-16">
      {estate ? (
        <div className="lg:flex lg:space-x-8 bg-white rounded-lg shadow-lg overflow-hidden">
          <img 
            src={estate.image} 
            alt={estate.estate_title} 
            className="lg:w-1/2 w-full h-64 lg:h-auto object-cover rounded-t-lg lg:rounded-l-lg"
          />
          <div className="p-6 lg:p-8 flex flex-col justify-between">
            <h1 className="text-2xl font-semibold mb-4">{estate.estate_title}</h1>
            <p className="text-lg font-medium mb-4">{estate.description}</p>
            <div className="flex flex-wrap gap-4 mb-4">
              <p className="text-base font-medium">Section: <span className="font-normal">{estate.segment_name}</span></p>
              <p className="text-base font-medium">Status: <span className="font-normal">{estate.status}</span></p>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold mb-2">Facilities:</p>
              <ul className="list-disc list-inside pl-4">
                {estate.facilities.map((facility, index) => (
                  <li key={index} className="text-base font-normal mb-1">{facility}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 mb-4">
              <p className="text-base font-bold">Net Area: <span className="font-normal">{estate.area} sq ft</span></p>
              <p className="text-base font-bold text-green-600">Price: <span className="font-normal">${estate.price}</span></p>
            </div>
            <p className="text-base font-bold">Location: <span className="font-normal">{estate.location}</span></p>
          </div>
        </div>
      ) : (
        <div className="text-center text-lg font-semibold">
          <p>Estate details not found.</p>
        </div>
      )}
    </div>
  );
};

export default EstateDetails;
