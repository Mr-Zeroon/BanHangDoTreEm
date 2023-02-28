import React from 'react'
import {Link} from 'react-router-dom';


const Search = ({cartItem}) => {
    window.addEventListener("scroll", function () {
        const search = document.querySelector(".search")
        search.classList.toggle("active", window.scrollY > 100)
    })
  return (
    <section className="search">
        <div className="container">
            <div className="logo">
                <h3>Logo</h3>
            </div>

            <div className="search-box">
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Search..." />
                <span>All Category</span>
            </div>

            <div className="user-icon">
                <div className="user">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <i class="fa-solid fa-bag-shopping"></i>
                        <span>{cartItem.length === 0 ? "" : cartItem.length}</span>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Search