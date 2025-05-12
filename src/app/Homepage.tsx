'use client';
import React from 'react'
import { useEffect,useRef,useState } from 'react';
import './Homepage.css'
import Image from 'next/image';

function Homepage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
   const [filterlist, setfilterlist] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

   const toggleDropdownlist = () => {
    setfilterlist(!filterlist);
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
      <Image src="/images/Logo.png" className='logo' alt='Logo' width={30} height={30}/>
        <h1 className='logodisplay'>LOGO</h1>
        <Image src="/images/Icons.png" alt='icons' className='icons' width={210} height={30} />
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
            <nav className='listmobile'>
              <ul>
                <p>HOME</p>
                <p>SHOP</p>  
              </ul>   
            </nav>
        </div>
    </div>
    <div className='discover'>
        <p>DISCOVER OUR PRODUCTS</p>
        <h2>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</h2>
    </div>
    <div className='filtermobile'>
      <button>FILTER</button>
      <button>RECOMMENDED</button>
    </div>
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={toggleDropdown}>Filter</button>
      {isOpen && (
        <div className="dropdown-content">
          {/* <a href="#">price</a> */}
          {/* <a href="#">Option 2</a> */}
          {/* <a href="#">Option 3</a> */}
          <button onClick={toggleDropdownlist}>IDEAL FOR</button>
          {filterlist && (
            <div className='men'>
              <label >
                <input type="checkbox" name="idealFor" value="men"></input>
                Men
              </label>
              <label >
                <input type="checkbox" name="idealFor" value="men"></input>
                Women
              </label>
              <label >
                <input type="checkbox" name="idealFor" value="men"></input>
                BABY & KIDS
              </label>
            </div>

          )}
          <button>OCCASION</button>
          <button>WORK</button>
          <button>FABRIC</button>
          <button>SEGMENT</button>
          <button>SUITABLE FOR</button>
          <button>RAW MATERIALS</button>
          <button>PATTERN</button>
        </div>)}
    </div>

    </>
  )
}

export default Homepage