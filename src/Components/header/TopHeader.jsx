import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import "./header.css";
import { CartContext } from "../context/CartContext";
import SearchBox from "./SearchBox";

function TopHeader() {
  const { cartItems, favourites } = useContext(CartContext);

  return (
    <div className="top-header">
      <div className="container">
       <Link className="logo" to="/">
  <img src="/img/logo.png" alt="Logo" />
</Link>

        <SearchBox />

        <div className="header_icons">
          <div className="icons">
            <Link to="/favourites">
              <FaRegHeart />
              <span className="count">{favourites.length}</span>
            </Link>
          </div>
          <div className="icons">
            <Link to="/cart">
              <TiShoppingCart />
              <span className="count">{cartItems.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
