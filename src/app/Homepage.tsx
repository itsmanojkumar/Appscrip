'use client';
import React from 'react'
import { useEffect,useRef,useState } from 'react';
import './Homepage.css'


function Homepage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event:MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
    <div className='header'>
      <img src="\images\Logo.png" className='logo'></img>
        <h1 className='logodisplay'>LOGO</h1>
        <img src="\images\Icons.png" alt='icons' className='icons'></img>
        <div className='navbar'>
            <nav className='list'>
              <ul>
                <p>SHOP</p>
                <p>SKILLS</p>
                <p>STORIES</p>
                <p>ABOUT</p>
                <p>CONTACT US</p>   
              </ul>   
            </nav>
        </div>
    </div>
    <div className='discover'>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h2>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>
    </div>
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>Filter</button>
      {isOpen && (
        <div className="dropdown-content">
          <a href="#">price</a>
          <a href="#">Option 2</a>
          <a href="#">Option 3</a>
        </div>)}
    </div>

    </>
  )
}

export default Homepage