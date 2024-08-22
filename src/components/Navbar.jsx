import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { items } from "../data";
import { IoCartSharp, IoSearchOutline } from 'react-icons/io5';



const Navbar = ({setdata, cart }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const filterByCategory = (category) => {
    const element = items.filter((product) => product.category === category);
    setdata(element);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
    setSearchTerm("");
  };

  return (
    <header>
      <div className="nav-bar">
        
          <Link to={"/"} className="brand">
          <img className="pandaLogo" src="src/public/Images/truePandaLogo.jpg" alt="" />
            PANDA
          </Link>
          <Link to={"/cart"} className="cart-button">
            <IoCartSharp />
            {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
          </Link>
        
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">
            <IoSearchOutline />
          </button>
        </form>
      </div>

      {location.pathname === '/' && (
        <div className="nav-bar-wrapper">
          <div onClick={() => setdata(items)} className="items">All</div>
          <div onClick={() => filterByCategory("women")} className="items">Women</div>
          <div onClick={() => filterByCategory("men")} className="items">Men</div>
          <div onClick={() => filterByCategory("kids")} className="items">Kids</div>
          <div onClick={() => filterByCategory("beauty")} className="items">Beauty</div>
          <div onClick={() => filterByCategory("accessories")} className="items">Accessories</div>
          <div onClick={() => filterByCategory("mobiles")} className="items">Mobile Phone</div>
          <div onClick={() => filterByCategory("footwear")} className="items">Footwear</div>
          <div onClick={() => filterByCategory("laptops")} className="items">Laptops</div>
        </div>
      )}
    </header>
  );
};

export default Navbar;