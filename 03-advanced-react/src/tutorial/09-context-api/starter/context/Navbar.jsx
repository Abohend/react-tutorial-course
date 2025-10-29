import { createContext, useContext, useState } from "react";
import NavLinks from "./NavLinks";

const NavbarContext = new createContext();
export const useAppContext = () => {
    return useContext(NavbarContext);
}

const Navbar = () => {
    const [user, setUser] = useState({name: 'Mohamed'});
    const logout = () => {
        setUser(null);
    };
    
    return(
        <NavbarContext.Provider value = {{user, logout}}>
            <nav className="navbar">
                <h5>CONTEXT API</h5>
                <NavLinks/>
            </nav>
        </NavbarContext.Provider>
    );
}

export default Navbar;