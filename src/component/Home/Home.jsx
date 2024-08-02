import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SpecialHome from "../SpecialHome/SpecialHome";

const Home = () => {
  const [residence, setResidence] = useState([]);

  useEffect(() => {
    fetch('residence.json')
      .then(res => res.json())
      .then(data => setResidence(data.residential_estates))
      .catch(error => console.error('Error fetching residence data:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <div className="col-span-1 lg:flex bg-gradient-to-r from-green-400 via-lime-400 to-pink-500 text-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
        <div className="pt-24 w-full lg:w-1/2 mx-auto lg:mx-0 lg:ml-[10%] h-96 flex items-center justify-center">
          <div className="text-center lg:text-left">
            <div className="max-w-md mx-auto lg:mx-0">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
                Redefining Your Standard of Living
              </h1>
              <p className="py-3 text-lg md:text-xl lg:text-2xl text-gray-100">
                Edison Group, established in 2009, aims to elevate everyday life through powerful brands, reliable products, and a broad spectrum of services.
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Estate Listings */}
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-green-400">Estate Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {residence.map((realE, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl duration-300">
              <img 
                src={realE.image} 
                alt={realE.segment_name} 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{realE.estate_title}</h3>
                <div className="flex justify-between items-center text-sm text-gray-700 mb-3">
                  <p><span className="font-semibold text-blue-700">Section:</span> {realE.segment_name}</p>
                  <p><span className="font-semibold text-blue-700">Status:</span> {realE.status}</p>
                </div>
                <p className="text-gray-700 mb-4 line-clamp-3">{realE.description}</p>
                <p className="text-sm font-medium text-gray-800 mb-2"><span className="font-bold">Location:</span> {realE.location}</p>
                <div className="border-t border-gray-200 mt-4 pt-4">
                  <p className="text-lg font-bold text-gray-800 mb-3">Facilities:</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {realE.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center mt-6">
                  <p className="text-base font-semibold text-emerald-600">Net Area: {realE.area}</p>
                  <p className="text-base font-semibold text-green-700">Price: {realE.price}</p>
                </div>
                <Link to={`/estate/${realE.id}`} className="block text-center mt-8">
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 transition duration-300">
                    View Property
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Homes Section */}
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-green-400">Special Homes Available</h1>
        <SpecialHome />
      </div>

      {/* Map Section */}
      <div className="container mx-auto py-12 px-4 md:px-8 lg:px-12">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-green-400">Our Locations</h2>
        <div className="w-full h-96 overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7498126.16960131!2d85.05446553552625!3d23.41734307029925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30adaaed80e18ba7%3A0xf2d28e0c4e1fc6b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1714189307818!5m2!1sen!2sbd"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          />
        </div>
      </div>

    </div>
  );
};

export default Home;
