// import React, { useState, useEffect } from 'react'
// import { Link, useParams} from 'react-router-dom'
// import Skeleton from 'react-loading-skeleton';
// import { AiFillStar } from 'react-icons/ai'
// import { MdFavorite, MdShoppingBasket } from 'react-icons/md'

// const Product = () => {

//   const { id } = useParams();
//   const [product, setProduct] = useState([]);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     const getProduct = async () => {
//       setLoading(true);
//       const response = await fetch(`http://localhost:4000/products/${id}`);
//       setProduct(await response.json());
//       setLoading(false);
//     };
//     getProduct();
//   }, []);

//   const Loading = () => {
//     return (
//       <>
//         <div className="col-md-6">
//           <Skeleton height={400} />
//         </div>
//         <div className="col-md-6" style={{ lineHeight: 2 }}>
//           <Skeleton height={50} width={300} />
//           <Skeleton height={75} />
//           <Skeleton height={25} width={150} />
//           <Skeleton height={150} />
//           <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
//         </div>
//       </>
//     );
//   };

//   const ShowProduct = () => {
//     return (
//       <>
//       <div className="container_product">
//         <div>
//             <div>
//                 <img className='img_product' src={product.image} alt={product.name}/>
//             </div>
//             <div>
//                 <h2>{product.name}</h2>
//                 <h4>{product.category}</h4>
//                 <span>
//                     Rating: {product.rating && product.rating.rate}
//                     <i><AiFillStar/></i>
//                 </span>
//                 <span>
//                     <small>PRICE:</small>
//                     <b>$ {product.price}</b>
//                 </span>
//                 <p>{product.description}</p>
//                 <button>
//                     <img className='img_product' src="./Image/tote.png" alt=""/>
//                     <MdFavorite className="text-red-300 text-2xl  cursor-pointer" />
//                     ADD TO FAVORITE
//                 </button>
//                 <button className="buy-now-btn">
//                     <MdShoppingBasket href='shopping' className="text-orange-400 text-2xl ml-5 cursor-pointer" />
//                     ADD TO CARD
//                 </button>
//             </div>
//         </div>
//       </div>
//       </>
//     )
//   }

//   return (
//     <div>
//         <div className='container_products my-5 py-5'>
//             <div className='row content-center'>
//                 {loading ? <Loading/> : <ShowProduct/>}
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Product