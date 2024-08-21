import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "./data";
import { IoCartSharp } from 'react-icons/io5';


const Navbar = ({setdata, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setsearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setdata(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setsearchTerm("");
  };

  return (
    <>
      <header className="sticky-top">
        <div className="nav-bar">
          <Link to={"/"} className="brand">
            <img  className="pandaLogo" src="src\Images\truePandaLogo.jpg" alt="" /> 
            PANDA
          </Link>

          <form onSubmit={handleSubmit} className="search-bar">
            <input
              value={searchTerm}
              onChange={(e) => setsearchTerm(e.target.value)}
              type="text"
              placeholder="Search Products"
            />
          </form>

          <Link to={"/cart"} className="cart">
          <button type="button" className="btn btn-primary position-relative">
  <IoCartSharp style={{fontSize:'1.5rem'}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
          </Link>
        </div>

        {
          location.pathname == '/' && (

            <div className="nav-bar-wrapper">
            <div onClick={() => setdata(items)} className="items">
              All
            </div>
            <div onClick={() => filterByCategory("women")} className="items">
              Women
            </div>
            <div onClick={() => filterByCategory("men")} className="items">
              Men
            </div>
            <div onClick={() => filterByCategory("kids")} className="items">
              Kids
            </div>
            <div onClick={() => filterByCategory("beauty")} className="items">
              Beauty
            </div>
            <div
              onClick={() => filterByCategory("accessories")}
              className="items"
            >
              Accessories
            </div>
            <div onClick={() => filterByCategory("mobiles")} className="items">
              Mobile Phone
            </div>
            <div onClick={() => filterByCategory("footwear")} className="items">
              Footwear
            </div>
            <div onClick={() => filterByCategory("laptops")} className="items">
              Laptops
            </div>
          </div>
          )
        }

      </header>
    </>
  );
};

export default Navbar;
