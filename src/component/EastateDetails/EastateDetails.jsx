import { useLoaderData, useParams } from "react-router-dom";

const EstateDetails = () => {
    const data = useLoaderData() || { residential_estates: [] };
    const { residential_estates } = data;
    const { id } = useParams();
    const eastate = residential_estates.find(item => item.id === parseInt(id));

    return (
        <div className="">
            {eastate && (
                <div className="lg:flex rounded-md md:m-3 lg:m-8 bg-base-200">
                    <img src={eastate.image} alt={eastate.segment_name} className=" lg:w-[50%] w-full rounded-md h-80 md:ml-6 mt-5 mb-5 object-cover" />
                    <div className="">
                        <h3 className="text-left md:text-lg lg:text-2xl md:font-bold lg:font-bold  lg:pl-6 font-bold  md:pl-6  pl-6">{eastate.estate_title}</h3>
                        <p className="text-left font-semibold pt-2 pl-6 w-96 lg:font-semibold lg:pt-2 lg:pl-6 lg:w-96 md:font-medium md:pl-6 md:w-80">{eastate.description}</p>
                        <div className="flex">
                <p className="pt-3 pb-3 pl-14 text-base font-medium md:pl-6">Section : {eastate.segment_name}</p>
                <p className="pt-3 pb-3 pl-10 text-base font-medium">status : {eastate.status}</p>
              </div>
                        <p className="mt-2 text-left text-lg pl-14 font-bold md:pl-6">Facilities :</p>
              <ul className="list-disc mt-4 mb-3 font-semibold pl-14 md:pl-6">
                {eastate.facilities.map((facilities, index) => (
                    <li className="text-left" key={index}>{facilities}</li>
                ))}
              </ul>
              <div className="flex">
                <p className="pt-1 pb-3 pl-14 text-base font-bold md:pl-6">Net Area : {eastate.area}</p>
                <p className="pt-1 pb-3 pl-4 text-base font-bold md:pl-6 text-green-600">Price : {eastate.price}</p>
              </div>
              <p className="pt-1 pb-3 pl-14 text-left text-sm font-bold md:pl-6"><span className="text-left text-lg font-bold" >Location :</span>{eastate.location}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EstateDetails;

