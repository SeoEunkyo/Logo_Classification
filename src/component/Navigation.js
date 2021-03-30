import React, { Component } from "react";
import "./style/navigation.css";


function Navigation() {
    //const links = {"Home" : '/' , "Google TeachableMacine" : 'https://teachablemachine.withgoogle.com/', "Git" : 'https://github.com/SeoEunkyo'};
    const navLinks = <ul>
        <li key={1}>
                 <a href={"/"}>Home</a>
        </li>
        <li key={2}>
                 <a href={"https://teachablemachine.withgoogle.com/"}>TeachableMacine</a>
        </li>
        <li key={3}>
                 <a href={"https://github.com/SeoEunkyo" }>Git</a>
        </li>

    </ul>


    return (
        <div>
            <nav>
                <h2 className="logo">Logo Classification</h2>
                <ul>{navLinks}</ul>
            </nav>
        </div>
    );
}

export default Navigation;
