
import { Outlet } from "react-router-dom";
import Navber from "../navber/Navber";
import Footer from "../Footer/Footer";

const Roote = () => {
    return(
        <div className="">
       <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
        </div>
    )
}

export default Roote;
