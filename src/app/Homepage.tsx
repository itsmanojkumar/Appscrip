'use client';
import React from 'react'
import { useEffect,useRef,useState } from 'react';


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
    <div>
      <img src="\images\Logo.png"></img>
        <h1>LOGO</h1>
        <img src="\images\Icons.png" alt='iconss'></img>
        <div>
            <nav>
                <li>SHOP</li>
                <li>SKILLS</li>
                <li>STORIES</li>
                <li>ABOUT</li>
                <li></li>      
            </nav>
        </div>
    </div>
    <div>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <h1>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h1>
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