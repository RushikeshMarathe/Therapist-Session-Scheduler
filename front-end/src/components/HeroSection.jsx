import React from 'react'
import hero from '../assets/hero.svg';
import '../components/HeroSection.css';

const HeroSection = () => {
    return (
        <div className='font-shafarik md:flex hero w-full max-w-[89%] mx-auto mt-24 justify-between items-center bg-red-50 p-14 py-36 rounded-3xl animate-fadeIn'>

            <div className=''>

                <span className='text-red-500 md:text-8xl text-3xl font-semibold '>Therapist , </span>

                <div className='relative  '>
                    <span className='absolute top-2 left-2 md:text-9xl text-6xl text-red-500 '>S</span>

                    <h1 className='md:text-4xl text-sm  md:ml-20 ml-11 text-red-400'>
                        <br />
                        ession <br />hcheduler</h1>
                </div>

                <div className='flex flex-col gap-5'>
                    <p className=' mt-7 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                    <button type='button' className='md:mx-40  text-xl border border-red-500 bg-white text-red-400 py-1 px-4 rounded-full font-semibold hover:bg-red-400 hover:text-white'>Explore</button>

                </div>

            </div>

            <div>
                <img src={hero} alt="Image" className='h-96' loading='lazy'/>
            </div>


        </div>
    )
}

export default HeroSection
