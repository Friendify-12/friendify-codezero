import React from 'react'
import Link from 'next/link'

const Landing = () => {
    return (
        <div className="flex h-screen justify-center items-center">
            <div>
                <div className="">
                    <div className="flex justify-center items-center font-bold text-2xl mb-5">About Us</div>
                    <div className='flex justify-center items-center'>
                        <div>A <span className='font-bold'>paragraph</span> of <span className='text-[red]'>text</span> with an <Link href='#' className='text-[blue] underline'>unassigned link.</Link></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>A <span className='italic'>second</span> <span className='underline'>row</span> of <span className='line-through'>text</span> with a <span className='text-[blue] underline'>web link</span></div>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div>An icon inline with text</div>
                    </div>
                    
                </div>
                <div className="flex justify-center items-center mt-5">
                    <Link href='/login' className='text-blue underline mr-2'>Login</Link>
                    <span className="text-gray-500">|</span>
                    <Link href='/register' className='text-blue underline ml-2'>Register</Link>
                </div>
            </div>
        </div>
    )
}

export default Landing
