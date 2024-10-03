import React from "react";
function Cards({ item }) {
    return (
        <>
        <div className="m-4 p-3"> {/* Added margin around the card */}
        <div className="card bg-base-100 w-80 h-96 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
        <figure className="h-48">
          <img src={item.image} alt="Product Image" className="w-full h-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
           {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p className="line-clamp-2">{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="cursor-pointer px-2 py-1 rounded-lg border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
          </div>
        </div>
      </div>
    </div>
        </>
    );
}
 
export default Cards;












// import React from "react";
// function Cards({ item }) {
//     return (
//         <>
//         <div className="mt-9 my-3 p-3">
//         <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 ">
//         <figure>
//           <img src={item.image} alt="Shoes" />
//         </figure>
//         <div className="card-body">
//           <h2 className="card-title">
//            {item.name}
//             <div className="badge badge-secondary">{item.category}</div>
//           </h2>
//           <p>{item.title}</p>
//           <div className="card-actions   
//    justify-between">
//             <div className="badge badge-outline">${item.price}</div>
//             <div className="cursor-pointer px-2 py-1 rounded-lg  border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
//           </div>
//         </div>
//       </div>
//     </div>
//         </>
      
//     );
//   }
  
//   export default Cards;   
  

// import React from 'react'

// function Cards({ item }) {
//     console.log(item);
//   return (
//     <>
//     <div>
//     <div className="card bg-base-100 w-96 shadow-xl">
//   <figure>
//     <img
//       src={item.image}
//       alt="Shoes" />
//   </figure>
//   <div className="card-body">
//     <h2 className="card-title">
//       Shoes!
//       <div className="badge badge-secondary">NEW</div>
//     </h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <div className="badge badge-outline">Fashion</div>
//       <div className="badge badge-outline">Products</div>
//     </div>
//   </div>
// </div>
//     </div>
//     </>
//   )
// }

// export default Cards
