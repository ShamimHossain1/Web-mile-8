import { useState } from "react";
import Links from "./Links/Links";
import { RiMenu2Line } from "react-icons/ri";
import { AiTwotoneCloseSquare } from "react-icons/ai";

const NavBar = () => {

    const [Open, setOpen] = useState(false);

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About Us" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/users", name: "Users" }
    ];

    return (
        <div className="mt-5 ">
           <button className="md:hidden text-3xl " onClick={()=>setOpen(!Open)}> 
        {
            Open === true ? <AiTwotoneCloseSquare /> : <RiMenu2Line/>

        }
            
            </button>

            
            <ul className={`md:flex md:justify-center md:space-x-5 text-lg font-bold absolute bg-gray-700 md:bg-transparent rounded-md md:static ${Open ? "top-12 left-0 w-full p-4" : "hidden"}`}>

                {
                    routes.map(route => <Links key={route.id} route={route}></Links>)
                    
                }
            </ul>

        </div>
    );
};

export default NavBar;