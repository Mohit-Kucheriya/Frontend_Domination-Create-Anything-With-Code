import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="mt-10 flex justify-center gap-5 text-zinc-700 text-lg font-snas">
            <NavLink
                // style={(e) => {
                //     return {
                //         color: e.isActive ? "purple" : "",
                //     };
                // }}
                className={(e) => {
                    return [e.isActive ? "text-purple-700" : ""].join(" ");
                }}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => {
                    return [e.isActive ? "text-orange-700" : ""].join(" ");
                }}
                to="/about"
            >
                About
            </NavLink>
            <NavLink
                className={(e) => {
                    return [e.isActive ? "text-green-700" : ""].join(" ");
                }}
                to="/user"
            >
                User
            </NavLink>
        </nav>
    );
}

export default Nav;
