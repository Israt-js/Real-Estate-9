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
    <div className="">
      <div className="col-span-1 lg:flex bg-base-200">
        <div className="pt-24 w-[50%] ml-[25%] md:ml-[25%] h-96">
          <div className="md:text-center lg:text-left">
            <div className="max-w-md">
              <h1 className="text-1xl md:text-2xl lg:text-3xl font-bold">REDEFINING YOUR STANDARD OF LIVING</h1>
              <p className="py-3 text-inherit">Edison Group was founded in 2009 with the aim to enhance aspects of life for people by providing powerful brands, reliable products and a wide range of services.</p>
            </div>
          </div>
        </div>

<div className="carousel w-full md:w-[45%] lg:w-[50%] rounded-md">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/89rz8P5/one.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/rZkLdXk/two.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/TkKbChj/three.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/Jr8D2cc/dillon-kydd-2ke-CPb73a-QY-unsplash.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

      </div>

      <div className="">
      <h1 className="text-4xl font-extrabold mt-5 text-center">Estate</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-full mt-12">
        {residence.map((realE, index) => (
          <div key={index} className="rounded-md m-3 bg-base-200">
              <img src={realE.image} alt={realE.segment_name}  className="w-full rounded-md h-56 object-cover" />
              <div className="">
              <h3 className="text-center text-1xl font-bold">{realE.estate_title}</h3>
              <div className="flex">
                <p className="pt-3 pb-3 pl-8 text-base font-medium">Section : {realE.segment_name}</p>
                <p className="pt-3 pb-3 pl-12 text-base font-medium">status : {realE.status}</p>
              </div>
              <p className="text-left font-semibold pl-8">{realE.description}</p>
              <p className="pt-3 pb-3 pl-8 text-left text-sm font-medium"><span className="text-left text-lg font-medium" >Location :</span>{realE.location}</p>
              <p className="mt-2 text-left text-lg pl-8 font-bold">Facilities :</p>
              <ul className="list-disc m-3 font-semibold pl-8">
                {realE.facilities.map((facilities, index) => (
                    <li className="text-left" key={index}>{facilities}</li>
                ))}
              </ul>
              <div className="flex">
                <p className="pt-3 pb-3 pl-8 text-base font-medium text-emerald-500">Net Area : {realE.area}</p>
                <p className="pt-3 pb-3 pl-12 text-base font-medium text-green-700">Price : {realE.price}</p>
              </div>
              <Link to={`/eastate/${realE.id}`} key={index} className="">
              <button className="bg-green-500 p-2 m-4 text-white rounded-md border-none" onClick={() => (realE)}>View Property</button>
              </Link>
              </div>
          </div>
        ))}
      </div>
      </div>
      <div className="">
      <h1 className="text-4xl font-extrabold mt-5 text-center">Special Home Available</h1>
      <SpecialHome/>
      </div>
    </div>
  )
}

export default Home;
