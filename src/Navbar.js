import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div className={`navbar ${show && "navbar__black"}`}>
            <img
                className="navbar__logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
                alt="Netflix Logo"
            />
            <img
                className="navbar__avatar"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTOrQpQ_xH-h3H8_K-maor_cyVdAYOOOoXrYA&usqp=CAU"
                alt="Netflix Logo"
            />
        </div>
    );
};

export default Navbar;
