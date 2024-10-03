import React from 'react';
import list from "../../public/list.json"
import Cards from './Cards';
import {Link} from "react-router-dom"


function Course() {
  return (
    <>
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
      <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
          We're delighted to have you{" "}
          <span className='text-pink-500'> Here! :)</span>
          </h1> 
      <p className='mt-12'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, harum atque dolorum odit officia ut nesciunt eveniet neque earum non esse culpa et ea! Excepturi explicabo reiciendis ipsam minus consectetur?
        Maxime totam maiores odit quo magnam iste incidunt tempora odio dicta, eius consectetur voluptates. Aliquid, quaerat pariatur esse iure obcaecati ipsa eius et accusamus, qui tenetur mollitia ea assumenda possimus.
        Eos ipsam quisquam quod voluptatum deserunt, libero ratione asperiores voluptate odio facilis magni, doloremque magnam at omnis. Illum animi deleniti provident quo, quod repellendus iste officiis, vitae recusandae voluptatum.
        </p> 
        
      </div>

      {/* importing data from console */}

      <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {
          list.map((item)=>(
            <Cards key={item.id} item={item} />
          )) 
          
        }
      </div>
      <div>
   <div className="flex justify-center">
      <Link to="/">
        <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer justify-center mb-10">
          Back
        </button>
      </Link>
    </div>

  </div>
      
       
    </div>
    </>
  );
}

export default Course