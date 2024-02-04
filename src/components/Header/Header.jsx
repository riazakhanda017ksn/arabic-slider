import React from 'react';
import './Header.scss'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='transform-navbar'>
            <Link to="/slide-11">Slide11</Link >
            <Link to="/slide-10">Slide10</Link >
            <Link to="/slide-9">Slide9</Link >
            <Link to="/slide-8">Slide8</Link >
            <Link to="/slide-7">Slide7</Link >
            <Link to="/slide-6">Slide6</Link >
            <Link to="/slide-5">Slide5</Link > 
            <Link to="/slide-4">Slide4</Link > 
            <Link to="/slide-3">Slide3</Link > 
            <Link to="/slide-2">Slide2</Link > 
            <Link to="/">Slide1</Link >

        </div>
    );
};

export default Header;