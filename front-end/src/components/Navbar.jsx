import React, { useState } from 'react'
import logo from '../assets/weblogo.png';
import '../components/Navbar.css';
import { IoMoonOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCallback } from 'react';
import clsx from 'clsx';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const [activeSession, setActiceSession] = useState("home");
    const navigate = useNavigate();

    const sections = [
        { name: "Home", id: "home" },
        { name: "Therapist", id: "therapist" },
        { name: "Services", id: "services" },
        { name: "About", id: "about" },
        { name: "Contact Us", id: "contact" },
    ];

    const scrollToSection = useCallback((id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({ top: element.offsetTop - 100, behavior: "smooth" });
            setActiceSession(id);
        }
    }, []);


    return (
        <div className='fixed w-full left-0 top-0  border border-l-0 border-r-0 border-t-0 border-b-2  bg-white font-shafarik z-40 '>
            
            <div className='w-full 2xl:max-w-[70%]  mx-auto'>
                <nav className='  flex p-5 justify-around items-center w-full '>
                    {/* Navigation container */}

                    <div className='flex items-center '>
                        {/* website icon section */}
                        <div className='flex items-center gap-1'>
                            <img src={logo} alt="logo" className='md:h-14 h-10 w-auto object-contain' />

                            <span className='md:text-3xl text-sm font-semibold'>MindCare.</span>
                        </div>
                    </div>

                    <div>
                        <ul className='gap-11 hidden linked-list'>
                            {sections.map(({ name, id }) => (
                                <li
                                    key={id}
                                    className={clsx(`text-gray-400  hover:text-red-400 hover:font-semibold cursor-pointer  text-lg
                                                    ${activeSession === id ? "text-red-400 font-bold" : ""}`)}
                                    onClick={() => scrollToSection(id)}
                                >
                                    {name}
                                </li>
                            ))}

                            {/* <li className='text-gray-400 hover:text-red-400 hover:font-semibold' onClick={() => scrollToSection("hero")}>Home</li>
                            <li className='text-gray-400 hover:text-red-400 hover:font-semibold' onClick={() => scrollToSection("therapist")}>Therapist</li>
                            <li className='text-gray-400 hover:text-red-400 hover:font-semibold' onClick={() => scrollToSection("services")}>Services</li>
                            <li className='text-gray-400 hover:text-red-400 hover:font-semibold' onClick={() => scrollToSection("about")}>About</li>
                            <li className='text-gray-400 hover:text-red-400 hover:font-semibold' onClick={() => scrollToSection("contact")}>Contact Us</li> */}
                        </ul>
                    </div>


                    <div className='flex items-center gap-4 '>
                        <div className='signup flex items-center gap-4'>
                            <Link to='/signup'>
                                <button
                                    type='button' className='font-semibold py-3 px-5 bg-red-400 rounded-xl text-white hover:text-red-400 hover:bg-white hover:outline'>
                                    Sign Up
                                </button>
                            </Link>

                            <Link to='/login'>

                                <button type='button' className='font-semibold py-3 px-5 bg-red-400 rounded-xl text-white hover:text-red-400 hover:bg-white hover:outline'>
                                    Log In
                                </button>
                            </Link>


                            <IoMoonOutline className=' text-2xl' />
                        </div>


                        <div className='hamburger'>
                            <GiHamburgerMenu className='text-2xl' />
                        </div>
                    </div>



                </nav>
            </div>
        </div>
    )
}

export default Navbar
