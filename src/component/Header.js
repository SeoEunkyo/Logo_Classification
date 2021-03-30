import React, { Component } from "react";
import Background from "../img/shop.jpg";
import "./style/header.css"


const Header = () => {
    const heroStyles = {
        backgroundImage: `url( ${Background} )`,
        backgroundSize: "cover"
    };
    const jumbotron = {
        padding: '30px', /* fills out the jumbotron */
        backgroundColor: 'rgb(255 240 240)',
        opacity: '0.95',
        width : '70%',
        margin : 'auto',
        paddingBottom: '4rem',
        borderRadius : '1.25rem'
    }
    const space = {
        height : '6rem'
    }
    const scrollToTop = (event) =>{
        // document.getElementById('root').scrollTo(0,0)
        window.scrollTo(1000,1000);
    }

    return (
        <div>
            <header style={heroStyles}>
                <div style={space}> </div>
                <div style={jumbotron}> 
                    <h1>{'TeachableMachine + React '}</h1>
                    <p>Through Google's learningable machine, I learned 20 different logos and turned a simple serviceable page with React. Press the button below to go to the service.</p>
                    {/* <a href="#button">{'Button'}</a> */}
                    <a onClick={scrollToTop}> Move to Service </a>
                </div>
            </header>
        </div>
    );
}

export default Header;
