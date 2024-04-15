
import { Outlet } from "react-router-dom";
import Navber from "../navber/Navber";

const Roote = () => {
    return(
        <div className="">
       <Navber></Navber>
       <Outlet></Outlet>
        </div>
    )
}

export default Roote;
