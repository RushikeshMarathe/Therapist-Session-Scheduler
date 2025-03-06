import React from 'react'
import { CgProfile } from "react-icons/cg";


const TherapistCards = () => {
    return (
        <div className='w-full max-w-[80%] mx-auto  mt-32 transition-all duration-75 font-shafarik'>

            <h1 className='text-center text-5xl font-semibold'>Our Therapist</h1>
            <div className='flex  gap-5 flex-wrap justify-center items-center    place-items-center'>

                <div class="flex flex-col bg-red-100 shadow-sm border border-slate-200 rounded-lg my-6 w-96">
                    <div class="m-2.5 overflow-hidden rounded-md h-60 flex justify-center items-center">
                        <CgProfile className='text-9xl' />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-1 text-xl font-semibold text-slate-800">
                            Natalie Paisley
                        </h4>
                        <p
                            class="text-sm font-semibold text-slate-500 uppercase">
                            Mind Therapy
                        </p>
                        <p class="text-base text-slate-600 mt-4 font-light ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque, ipsam explicabo suscipit perferendis maiores fugiat repudiandae, autem inventore quibusdam, unde incidunt labore sit eligendi obcaecati perspiciatis eius. Ducimus, necessitatibus.
                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <button class="min-w-32  rounded-md bg-red-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Follow
                        </button>
                    </div>
                </div>

                <div class="flex flex-col bg-red-100 shadow-sm border border-slate-200 rounded-lg my-6 w-96">
                    <div class="m-2.5 overflow-hidden rounded-md h-60 flex justify-center items-center">
                        <CgProfile className='text-9xl' />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-1 text-xl font-semibold text-slate-800">
                            Natalie Paisley
                        </h4>
                        <p
                            class="text-sm font-semibold text-slate-500 uppercase">
                            Mind Therapy
                        </p>
                        <p class="text-base text-slate-600 mt-4 font-light ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque, ipsam explicabo suscipit perferendis maiores fugiat repudiandae, autem inventore quibusdam, unde incidunt labore sit eligendi obcaecati perspiciatis eius. Ducimus, necessitatibus.
                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <button class="min-w-32  rounded-md bg-red-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Follow
                        </button>
                    </div>
                </div>

                <div class="flex flex-col bg-red-100 shadow-sm border border-slate-200 rounded-lg my-6 w-96">
                    <div class="m-2.5 overflow-hidden rounded-md h-60 flex justify-center items-center">
                        <CgProfile className='text-9xl' />
                    </div>
                    <div class="p-6 text-center">
                        <h4 class="mb-1 text-xl font-semibold text-slate-800">
                            Natalie Paisley
                        </h4>
                        <p
                            class="text-sm font-semibold text-slate-500 uppercase">
                            Mind Therapy
                        </p>
                        <p class="text-base text-slate-600 mt-4 font-light ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque neque, ipsam explicabo suscipit perferendis maiores fugiat repudiandae, autem inventore quibusdam, unde incidunt labore sit eligendi obcaecati perspiciatis eius. Ducimus, necessitatibus.
                        </p>
                    </div>
                    <div class="flex justify-center p-6 pt-2 gap-7">
                        <button class="min-w-32  rounded-md bg-red-400 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button">
                            Follow
                        </button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default TherapistCards
