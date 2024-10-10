import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cards from './Cards';
import axios  from 'axios';


function   
 Freebook() {

  const [book, setBook] = useState([])
  useEffect(() =>{

    const getBook = async()=>{
      try{
           const res  = await axios.get("http://localhost:4001/book");

           const data = res.data.filter((data) => data.category === "Free");
           console.log(data);
           setBook(data);
           
          }
      catch (error){
        console.log(error);

      }
    }
    getBook();

  }, []);


  
  

  React.useEffect(() => {
    // Fetch data or use existing data (assuming it's already available)
    const fetchData = async () => {
      try {
        const response = await fetch('../../public/list.json'); // Adjust path if needed
        const data = await response.json();
        setFilteredData(data.filter((item) => item.category === 'Free'));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []); // Run effect only once

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      // Responsive settings
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>Lorem ipsum dolor ghjslf tuys aedv qwudf the blod thap rpmas gg e jfhdfws cv podteb.</p>
        </div>

        <div>
          {book.length > 0 ? ( // Check if data is available before rendering
            <Slider {...settings}>
              {book.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </Slider>
          ) : (
            <p>No free courses found.</p> // Display a message if no data is available
          )}
        </div>
      </div>
    </>
  );
}

export default Freebook;

// import React from 'react'
// import list from '../../public/list.json';
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Cards from './Cards';

// function Freebook() {
//     const filterData = list.filter((data)=>data.category === "Free");

//     var settings = {
//         dots: true,
//         infinite: false,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         initialSlide: 0,
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1
//             }
//           }
//         ]
//       };

//   return (
//     <>
//     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 '>
//         <div>
//         <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt debitis ab omnis natus facilis. Eum aspernatur quibusdam tempore quidem, quam quasi praesentium provident magni esse eos.</p>
//         </div>
    
//     <div>
//     <Slider {...settings}>
//         {filterData.map((item)=>{
//             //props = properties accessing the data from parent to the child Parent->Freebook and Child->Cards
//          <Cards item={item} key={item.id}></Cards>   
//         })}
//       </Slider>
//     </div>
//     </div>
//     </>
//   )
// }

// export default Freebook
