import React from 'react'
import { GrFavorite } from 'react-icons/gr'
import  './favorite.scss'

const FavoritePage = () => {
  return (
    <div className='w-full box-border block'>
        <div className='w-full'>
            <div className='text-center mb-8 block'>
                <h1  className='text-center font-bold text-2xl'> My Favorites</h1>
                <p className='text-sm'>Here you can collect all your favorite items. Print out a wish list or add the items to the shopping cart If you want to save your favorites</p>
            </div>
            <div className='box-border'>
                <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-96 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-black to-black-console.error(first) transition-all ease-in-out duration-100">
                    My favorite
                </p>
                <div className='text-center mt-5 block box-border scroll-pt-7 w-full'>
                    <GrFavorite className='favoritee'/>
                    <p>You haven't saved any favorites yet.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FavoritePage