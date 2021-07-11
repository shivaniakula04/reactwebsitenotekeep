import React, { useState } from 'react';
import Header from "./Header";
const Footer = () => {
    
    const year=new Date().getFullYear();

    return (
    <>
        <footer>
            <p>copyright © {year}</p>
        </footer>
    </>
    );
   
            

};
export default Footer;