// import React from 'react'
// import { Link } from 'react-router-dom'

// const AboutUs = () => {
//   return (
//     <div>
//       <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-white min-h-screen">
   
//       {/* Left Side: About Us Information */}
//       <div className="lg:w-1/2 space-y-6">
//         <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
//         <p className="text-lg text-gray-700">
//           Welcome to <strong>Book Haven</strong>, your one-stop destination for all book lovers. 
//           We offer a wide variety of books in different categories such as Science, Math, GK, Recipes, Songs, 
//           Biography, Computer Fundamentals, English Grammar, and many more.
//         </p>
//         <p className="text-lg text-gray-700">
//           Our platform allows users to explore a range of free books, while a simple sign-up process unlocks even more exciting 
//           content. Whether you're looking to expand your knowledge in Science or cook up something new from our recipe collection, 
//           Book Haven is here to enrich your reading journey.
//         </p>
//         <p className="text-lg text-gray-700">
//           We believe in making knowledge accessible to everyone, which is why we've created a platform where you can find books 
//           that suit all tastes and preferences. Join us today and dive into a world of learning and discovery!
//         </p>
//       </div>

//       {/* Right Side: Image */}
//       <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
//         <img
//           src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-18752.jpg?t=st=1727760960~exp=1727764560~hmac=ff008d89cf1d04247e106ebee40c4906183fcd4ca79c018c1c6b31257bba909c&w=740"
//           alt="Books"
//           className="w-full lg:w-3/4 rounded-lg shadow-lg"
//         />
//       </div>
      
//     </div>
//     <div className="flex justify-center">
//       <Link to="/">
//         <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer justify-center mb-10">
//           Back
//         </button>
//       </Link>
//     </div> 
//     </div>
//   )
// }

// export default AboutUs


import React from 'react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  return (
    <div
     
      className="min-h-screen bg-fixed"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-16 bg-white bg-opacity-80 min-h-screen">
        {/* Left Side: About Us Information */}
        <div className="lg:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-700">
            Welcome to <strong>Book Haven</strong>, your one-stop destination for all book lovers. 
            We offer a wide variety of books in different categories such as Science, Math, GK, Recipes, Songs, 
            Biography, Computer Fundamentals, English Grammar, and many more.
          </p>
          <p className="text-lg text-gray-700">
            Our platform allows users to explore a range of free books, while a simple sign-up process unlocks even more exciting 
            content. Whether you're looking to expand your knowledge in Science or cook up something new from our recipe collection, 
            Book Haven is here to enrich your reading journey.
          </p>
          <p className="text-lg text-gray-700">
            We believe in making knowledge accessible to everyone, which is why we've created a platform where you can find books 
            that suit all tastes and preferences. Join us today and dive into a world of learning and discovery!
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/teamwork-concept-landing-page_52683-18752.jpg?t=st=1727760960~exp=1727764560~hmac=ff008d89cf1d04247e106ebee40c4906183fcd4ca79c018c1c6b31257bba909c&w=740"
            alt="Books"
            className="w-full lg:w-3/4 rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer justify-center mb-10">
            Back
          </button>
        </Link>
      </div>
    </div>
  )
}

export default AboutUs

