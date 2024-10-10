import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

const ContactUs = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    
    const onSubmit = (data) => {
        console.log(data) // This will log the form data to the console
    }

    return (
        <>
            <div className="flex h-screen items-center justify-center relative">
                {/* Blurred background image */}
                <div
                    style={{
                        backgroundImage: `url('https://img.freepik.com/free-vector/contact-background-with-hand-drawn-elements_23-2147609277.jpg?t=st=1727755927~exp=1727759527~hmac=ee1f9c11f469eebd10806fe46a70b2e1d960a333faa26eea4d8dbcbef812e5ca&w=740')`, // Replace with your image URL
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        filter: 'blur(6px)', // Increased blur for better focus on form
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        zIndex: -1, // Places it behind the form
                    }}
                ></div>
                
                {/* Contact Form */}
                <div className="relative w-[600px] bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Close button */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</Link>

                        <h3 className="font-bold text-2xl mb-4 text-black">Contact Us</h3>

                        {/* Name */}
                        <div className='mt-4 space-y-2'>
                            <span className="text-md font-semibold text-black">Name</span>
                            <input 
                                type='text' 
                                placeholder='Enter your name' 
                                className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400'
                                {...register("name", { required: true })}
                            />
                            {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <span className="text-md font-semibold text-black">Email</span>
                            <input 
                                type='email' 
                                placeholder='Enter your email' 
                                className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400'
                                {...register("email", { required: true })}
                            />
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Message */}
                        <div className='mt-4 space-y-2'>
                            <span className="text-md font-semibold text-black">Message</span>
                            <textarea 
                                placeholder='Enter your message...' 
                                className='w-full px-3 py-2 border rounded-md outline-none focus:ring-2 focus:ring-pink-400'
                                {...register("message", { required: true })}
                            />
                            {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Button */}
                        <div className='flex justify-between items-center mt-6'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-4 py-2 hover:bg-pink-600 transition duration-200'>
                                Send Message
                            </button>
                            <p className='text-sm text-gray-600'>
                                Want to return? {" "}
                                <Link to="/" className='underline text-blue-500 cursor-pointer'>
                                    Go back to Home
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default ContactUs
