import React from 'react'
import girl from '../assets/girl.png';
import '../components/About.css'

const About = () => {
  return (
    <div className='w-full max-w-[70%] mx-auto mt-32  xl:px-44 xl:py-24 md:px-24 md:py-24 px-20 py-16  rounded-full container animate-fadeIn font-shafarik'>
      <h1 className='md:text-6xl text-5xl  font-semibold text-center md:ml-0 mb-7 '>About</h1>
        <div >
        
        <div className='flex md:flex-row  flex-col-reverse gap-6 main '>

                <div className='flex flex-col gap-5 items-center justify-center'>
                        <h1 className='font-semibold text-2xl text-white text-center'><span className='text-4xl text-sky-300'>✓</span> Your Journey to Mental Wellness Starts Here</h1>
                        <p className='font-medium text-gray-800 text-justify'>At MindCare, we believe that mental health is just as important as physical health. Our mission is to provide accessible, compassionate, and professional therapy services to help individuals lead happier, healthier lives.</p>

                        <div className='flex justify-center'>
                        <ul className='list-disc leading-10  mt-8  items-center md:text-lg'>
                            <li className='text-white'>Licensed & Certified Therapists</li>
                            <li className='text-white'>Personalized Therapy Sessions</li>
                            <li className='text-white'>100% Private & Secure</li>
                            <li className='text-white'>Online & In-Person Appointments</li>
                            <li className='text-white'>Affordable & Flexible Scheduling</li>
                        </ul>
                        </div>
                </div>



                <div className='relative'>
                    <img src={girl} alt="Image" className='rotate-2 flex-wrap' loading='lazy' />
                    <div className='absolute h-32 w-36 bottom-2 left-10 border-2 border-t-0 border-l-0  border-dashed rounded-full  -skew-y-10 -skew-x-10 '></div>
                </div>

        </div>


        </div>
      
    </div>
  )
}

export default About
