import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form"

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data) // This will log the form data to the console
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Login</h3>

                    {/* Form start */}
                    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                        {/* Email */}
                        <div className='mt-4 space-y-2'>
                            <label>Email</label>
                            <br />
                            <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' 
                                {...register("email", { required: true })} />
                                <br></br>
                            {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
                        </div>

                        {/* Password */}
                        <div className='mt-4 space-y-2'>
                            <label>Password</label>
                            <br />
                            <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' 
                                {...register("password", { required: true })} />
                                <br></br>
                            {errors.password && <span className='text-sm text-red-500'>Tthis field is required</span>}
                        </div>

                        {/* Buttons */}
                        <div className='flex justify-around mt-4'>
                            <button type="submit" className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                                Login
                            </button>

                            <p>
                                Not registered? {" "}
                                <Link to={"/signup"} className='underline text-blue-500 cursor-pointer'>Signup</Link>
                            </p>
                        </div>

                        {/* Close button */}
                        <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    </form>
                    {/* Form end */}
                </div>
            </dialog>
        </div>
    )
}

export default Login



// import React from 'react'
// import { Link } from 'react-router-dom'
// import { useForm } from "react-hook-form"

// function Login ()  {
//     const {
//       register,
//       handleSubmit,
//       formState: { errors },
//     } = useForm()
  
//     const onSubmit = (data) => console.log(data)

//   return (
//     <div>
//       <dialog id="my_modal_3" className="modal">
//   <div className="modal-box">
//     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link  to={"/"}className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//     </form>
//     <h3 className="font-bold text-lg">Login</h3>


// {/* email */}
//     <div className='mt-4 space-y-2'>
//         <span>Email</span>
//         <br></br>
//         <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("email", { required: true })}></input>
//         {errors.email && <span>This field is required</span>}
//     </div>

//     {/* password */}
//     <div className='mt-4 space-y-2'>
//         <span>Password</span>
//         <br></br>
//         <input type='text' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none' {...register("password", { required: true })}></input>
//         {errors.password && <span>This field is required</span>}
//     </div>

//     {/* Button */}
//      <div className='flex justify-around mt-4'>
//      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
//     >Login</button>
//     <p>
//         Not registred? {" "}
//         <Link 
//         to={"/signup"}
//          className='underline text-blue-500 cursor-pointer'>Signup
//             </Link> {" "}
//     </p>



//      </div>
    
//   </div>
// </dialog>
//     </div>
//   )
// }

// export default Login
