import { Transition } from '@headlessui/react';
import React, { useState } from 'react';

const properties = [
  {
    id: 1,
    title: 'Luxury Penthouse in Downtown',
    location: 'Downtown',
    price: '$1,200,000',
    description: 'A stunning penthouse with panoramic city views and top-notch amenities.',
    imageUrl: 'https://i.ibb.co/9YmK2Js/francesca-tosolini-t-Hk-JAMc-O3-QE-unsplash.jpg',
    mapUrl: 'https://www.google.com/maps?q=Downtown'
  },
  {
    id: 2,
    title: 'Cozy Suburban Home',
    location: 'Suburbs',
    price: '$350,000',
    description: 'A charming home with a spacious backyard, perfect for families.',
    imageUrl: 'https://i.ibb.co/zr4mr83/clay-banks-yqoz-Bsi5ioc-unsplash.jpg',
    mapUrl: 'https://www.google.com/maps?q=Suburbs'
  },
  {
    id: 3,
    title: 'Modern Condo by the Beach',
    location: 'Beachside',
    price: '$750,000',
    description: 'Enjoy beachside living with this modern condo featuring ocean views.',
    imageUrl: 'https://i.ibb.co/4gznqNd/dark-light2021-Wfx-GZRz0r-Uw-unsplash.jpg',
    mapUrl: 'https://www.google.com/maps?q=Beachside'
  },
];

const PropertyCard = () => {
  const [selectedProperty, setSelectedProperty] = useState(properties[0]);
  const [isDetailVisible, setIsDetailVisible] = useState(false);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div
              key={property.id}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group"
              onClick={() => {
                setSelectedProperty(property);
                setIsDetailVisible(true);
              }}
            >
              <img
                src={property.imageUrl}
                alt={property.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                  {property.title}
                </h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-lg font-bold text-gray-900 mb-2">{property.price}</p>
                <p className="text-gray-700">{property.description}</p>
              </div>
              <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold py-1 px-3 rounded-full transform -translate-x-1/2 -translate-y-1/2">
                New Listing
              </div>
            </div>
          ))}
        </div>

        <Transition
          show={isDetailVisible}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="mt-8 max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative">
              <img
                src={selectedProperty.imageUrl}
                alt={selectedProperty.title}
                className="w-full h-64 object-cover"
              />
              <button
                className="absolute top-4 right-4 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition"
                onClick={() => setIsDetailVisible(false)}
              >
                &#10005;
              </button>
            </div>
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-4">{selectedProperty.title}</h2>
              <p className="text-lg text-gray-600 mb-2">{selectedProperty.location}</p>
              <p className="text-2xl font-semibold text-gray-800 mb-2">{selectedProperty.price}</p>
              <p className="text-gray-700 mb-4">{selectedProperty.description}</p>
              <div className="relative w-full h-64 mb-4">
                <iframe
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedProperty.location)}&hl=en&z=14&output=embed`}
                  className="absolute inset-0 w-full h-full border-0 rounded-lg"
                  allowFullScreen
                  loading="lazy"
                  title="Property Location"
                ></iframe>
              </div>
              <a
                href={selectedProperty.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-700 transition"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
};

export default PropertyCard;
