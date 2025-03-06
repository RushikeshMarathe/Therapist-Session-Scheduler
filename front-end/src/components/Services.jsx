import React from 'react'
import { FaPersonBooth } from 'react-icons/fa';
import { FaPeoplePulling } from 'react-icons/fa6';
import { GiRoad } from 'react-icons/gi';
import { SiEasyeda } from "react-icons/si";


const Services = () => {
  return (
    <div className='w-full max-w-[80%] mx-auto mt-32 animate-fadeIn font-shafarik'>
        <h1 className='text-center text-5xl'>Services</h1>
    <div className='grid 2xl:grid-cols-3 2xl:grid-rows-2 md:grid-cols-2 grid-cols-1 gap-8 place-items-center place-content-center mt-20'>
        <div className='flex flex-col gap-3 place-content-center place-items-center'>
            <SiEasyeda className='text-yellow-400 text-8xl'/>
            <h2 className='text-xl font-semibold'>Easy Appointment</h2>
            <p className='text-wrap text-gray-700'>One-on-one therapy to help you manage stress, anxiety, and personal challenges.</p>
        </div>

        <div className='flex flex-col gap-3 place-content-center place-items-center'>
            <FaPersonBooth className='text-green-400 text-8xl'/>
            <h2 className='text-xl font-semibold'>Individual Therapy</h2>
            <p className='text-wrap text-gray-700'>One-on-one therapy to help you manage stress, anxiety, and personal challenges.</p>
        </div>

        <div className='flex flex-col gap-3 place-content-center place-items-center'>
            <FaPeoplePulling className='text-blue-400 text-8xl'/>
            <h2 className='text-xl font-semibold'>Couple Therapy</h2>
            <p className='text-wrap text-gray-700'>Improve communication and relationships with professional guidance.</p>
        </div>

        <div className='flex flex-col gap-3 xl:col-span-3 place-content-center place-items-center'>
            <GiRoad className='text-gray-700 text-8xl'/>
            <h2 className='text-xl font-semibold'>Career & Life Coaching</h2>
            <p className='text-wrap text-gray-700'>Get guidance on career growth, life decisions, and self-improvement.</p>
        </div>
        
        </div>
    </div>
  )
}

export default Services
