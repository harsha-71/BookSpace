// import React from 'react'
// import { Link } from 'react-router-dom'
// import Login from './Login'
// import { useForm } from "react-hook-form"


// const Signup = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
// } = useForm()

// const onSubmit = (data) => {
//     console.log(data) // This will log the form data to the console
// }
//   return (
//     <>
//     <div className='flex h-screen items-center justify-center'>
//     <div  className="w-[600px]">
//   <div className="modal-box">
//     <form  onSubmit={handleSubmit(onSubmit)}  method="dailog">
//       {/* if there is a button in form, it will close the modal */}
//       <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
   
//     <h3 className="font-bold text-lg">Signup</h3>


// {/* Name */}

//     <div className='mt-4 space-y-2'>
//         <span>Name</span>
//         <br></br>
//         <input type='text' placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'
//         {...register("name", { required: true })}></input>
//         <br></br>
//         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//     </div>

// {/* email */}

//     <div className='mt-4 space-y-2'>
//         <span>Email</span>
//         <br></br>
//         <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
//         {...register("email", { required: true })}></input>
//         <br></br>
//         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//     </div>

//     {/* password */}
//     <div className='mt-4 space-y-2'>
//         <span>Password</span>
//         <br></br>
//         <input type='text' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
//         {...register("password", { required: true })}></input>
//         <br></br>
//         {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
//     </div>

//     {/* Button */}
//      <div className='flex justify-around mt-4'>
//      <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'
//     >Signup</button>
//     <p className='text-xl'>
//         Have account? {" "}
//         <button 
//          className='underline text-blue-500 cursor-pointer'
//          onClick={() =>{
//           document.getElementById("my_modal_3").showModal()
//          }}
//          >Login
//             </button> {" "}
//             <Login/>
//     </p>



//      </div>
//      </form>
//   </div>
// </div>
//     </div>

//     </>
//   )
// }

// export default Signup



import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"

const Signup = () => {
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
      <div
        className="flex h-screen items-center justify-center">
        <div
          style={{
            backgroundImage: `url('https://img.freepik.com/free-vector/flat-design-book-club-illustration_23-2149310527.jpg?t=st=1727753372~exp=1727756972~hmac=0217bb153c93c5c45df81f7665f9d584bf11decc0b386f1acefeba13527c1d43&w=740')`, // Replace with your image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            filter: 'blur(2px)', // Blurs the background
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: -1, // Places it behind the form
          }}
        ></div>
      
        <div className="w-[600px] shadow-lg">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button */}
              <Link to={"/"} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

              <h3 className="font-bold text-lg">Signup</h3>

              {/* Name */}
              <div className='mt-4 space-y-2'>
                <span>Name</span>
                <br />
                <input type='text' placeholder='Enter your name' className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("name", { required: true })} />
                <br />
                {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Email */}
              <div className='mt-4 space-y-2'>
                <span>Email</span>
                <br />
                <input type='text' placeholder='Enter your email' className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("email", { required: true })} />
                <br />
                {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Password */}
              <div className='mt-4 space-y-2'>
                <span>Password</span>
                <br />
                <input type='password' placeholder='Enter your password' className='w-80 px-3 py-1 border rounded-md outline-none'
                  {...register("password", { required: true })} />
                <br />
                {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
              </div>

              {/* Button */}
              <div className='flex justify-around mt-4'>
                <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                  Signup
                </button>
                <p className='text-xl'>
                  Have an account?{" "}
                  <button
                    className='underline text-blue-500 cursor-pointer'
                    onClick={() => {
                      document.getElementById("my_modal_3").showModal()
                    }}>
                    Login
                  </button>{" "}
                  <Login />
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup

