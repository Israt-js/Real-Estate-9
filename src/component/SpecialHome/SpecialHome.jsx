import React from 'react';

const SpecialHome = () => {
  return (
    <div className="space-y-12 p-6 bg-gradient-to-r from-gray-50 to-gray-100">
      {/* Card 1 */}
      <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 duration-300">
        <div className="absolute top-0 left-0 bg-green-500 text-white text-xs px-3 py-1 rounded-br-lg">Featured</div>
        <figure className="w-full h-64 overflow-hidden">
          <img src="https://i.ibb.co/T2cVPFw/abby-rurenko-u-OYak90r4-L0-unsplash.jpg" alt="Beautiful black infront home" className="object-cover w-full h-full hover:scale-110 transition-transform duration-300" />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Beautiful Black Infront Home</h2>
          <p className="text-gray-700 mb-6">
            These campaigns can be initiated by leads interested in buying or selling homes but are not yet prepared to meet with you. They are also great for leads that have submitted a form on your site but aren’t quite ready to talk with someone just yet.
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 duration-300">
        <figure className="w-full h-64 overflow-hidden">
          <img src="https://i.ibb.co/GRFYZ03/vita-vilcina-Kt-Oid0-FLjq-U-unsplash.jpg" alt="Home with pool" className="object-cover w-full h-full hover:scale-110 transition-transform duration-300" />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">Home with Pool</h2>
          <p className="text-gray-700 mb-6">
            This remarkable 77-acre Covenant estate comprises 7 parcels and will transcend your expectations with multiple residences, state-of-the-art barns, riding arenas, pastures, trails, a bass-filled lake, tennis court, and ultimate privacy and seclusion.
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="relative max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg bg-white transition-transform transform hover:scale-105 duration-300">
        <div className="absolute top-0 left-0 bg-blue-500 text-white text-xs px-3 py-1 rounded-br-lg">Exclusive</div>
        <figure className="w-full h-64 overflow-hidden">
          <img src="https://i.ibb.co/rcFJ3Dd/lance-asper-nx-Rwke3-Mr7-Q-unsplash.jpg" alt="Beautiful view" className="object-cover w-full h-full hover:scale-110 transition-transform duration-300" />
        </figure>
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">A Beautiful View</h2>
          <p className="text-gray-700 mb-6">
            Take a look at the sleek Montserrat font, the dramatic visuals, the gray and white color scheme, the chef’s kitchen with the integrated refrigerator, and the double oven. The elements are high-end, and the overall effect here is a luxury home.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialHome;
