// import React, {useState, useEffect} from 'react'
// import {AiFillStar} from 'react-icons/ai'
// import Skeleton from 'react-loading-skeleton';
// import { NavLink } from 'react-router-dom';

// const Products = () => {

//     const [data, setData] = useState([]);
//     const [filter, setFilter] = useState(data);
//     const [loading, setLoading] = useState(false);
//     let componentMounted = true;


//     useEffect(() => {
//         const getProducts = async() => {
//             setLoading(true);
//             const response = await fetch(`http://localhost:4000/products`);
//             if(componentMounted){
//                 setData(await response.clone().json());
//                 setFilter(await response.json());
//                 setLoading(false);
//                 console.log(filter)
//             }
//             return () => {
//                 componentMounted = false;
//             }
//         }
//         getProducts();
//     }, []);

//     const Loading = () => {
//         return(
//             <>
//                 <div className='col-md-3'>
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className='col-md-3'>
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className='col-md-3'>
//                     <Skeleton height={350}/>
//                 </div>
//                 <div className='col-md-3'>
//                     <Skeleton height={350}/>
//                 </div>
//             </>
//         )
//     }

//     const filterProduct = (cat) => {
//         const updatedList = data.filter((x) => x.category === cat);
//         setFilter(updatedList);
//     }

//     const ShowProducts = () => {
//         return(
//             <>
//             <div id="featured-product">
//                 <div className="product-container">
//                     <button className="product" 
//                     onClick={() => setFilter(data)}>
//                         <div className="product-des">
//                             <h5>All</h5>                     
//                         </div>
//                     </button>
//                     <button className="product spring"
//                     onClick={() => filterProduct("spring")}>
//                         <div className="product-des">
//                             <h5>spring dress</h5>                     
//                         </div>
//                     </button>
//                     <button className="product summer"
//                     onClick={() => filterProduct("summer")}>
//                         <div className="product-des">
//                             <h5>summer outfit</h5>                     
//                         </div>
//                     </button>
//                     <button className="product autumn"
//                     onClick={() => filterProduct("autumn")}>
//                         <div className="product-des">
//                             <h5>Autumn dress</h5>                     
//                         </div>
//                     </button>
//                     <button className="product winter"
//                     onClick={() => filterProduct("winter")}>
//                         <div className="product-des">
//                             <h5>Winter outfit</h5>                     
//                         </div>
//                     </button>
//                 </div>
//             </div>
//             <div className="w-full flex items-center justify-between">
//                 <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-56 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
//                 Suggested outfits according to the season
//                 </p>
//             </div>
//             {filter.map((product) => {
//                 return(
//                     <>
//                         <div id="featured-product" className='col-md-3 mb-4'>
//                             <div className="card w-1/4 h-100 text-center p-4">
//                                 <div className="product" key={product.id}>
//                                     <img className='w-40 mt-2 ml-2' src={product.image} alt={product.name}/>
//                                     <div className="product-desc">
//                                     <h5>{product.name}</h5>
//                                     <div className="rate">
//                                         <AiFillStar className='text-amber-400'/>
//                                         <AiFillStar className='text-amber-400'/>
//                                         <AiFillStar className='text-amber-400'/>
//                                         <AiFillStar className='text-amber-400'/>
//                                         <AiFillStar className='text-amber-400'/>
//                                     </div>
//                                     <h4>${product.price}</h4>
//                                     <div className='flex justify-end'>
//                                         <NavLink to={`/products/${product.id}`}>Buy Now</NavLink>
//                                     </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </>
//                  )
//             })}
//         </>
//         );
//     }
//   return (
//     <div>
//         <div className='container_products my-5 py-5'>
//             <div className='row-auto'>
//                 <div className='col-span-12 mb-5'>
//                     <h1 className='text-center text-2xl font-semibold'>Latest Products</h1>
//                     <hr/>
//                 </div>
//             </div>
//             <div className='row content-center'>
//                 {loading ? <Loading/> : <ShowProducts/>}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Products