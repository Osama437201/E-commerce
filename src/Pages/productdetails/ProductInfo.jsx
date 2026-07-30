import React, { useContext } from "react";
import { FaRegHeart, FaShare, FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { TiShoppingCart } from "react-icons/ti";
import { CartContext } from "../../Components/context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProductInfo({ product }) {
    
  const {cartItems , addToCart , addToFavourites, favourites, removeFromFavourites} = useContext(CartContext)
    const isInCart = cartItems.some(i => i.id === product.id);


    const navigate = useNavigate()


   const handleAddToCart = () => {
    addToCart(product)

    toast.success(
      <div className="toast_wrapper">
        <img src={product.images[0]} alt=""  className="toast_img"/>

      <div className="toast_content">
        <strong>{product.title}</strong>
        added to cart
        <div>
          <button className="btn" onClick={() => navigate('/cart')}>View Cart</button>
        </div>
      </div>

      </div>

      ,{duration : 3500}

    )

  }

    // favourites 
    const isInFav= favourites.some(i => i.id === product.id);

const handleAddToFavourites = () => {
  if (isInFav) {
    removeFromFavourites(product.id);
    toast.error(`${product.title} Removed From Favourites`);
  } else {
    addToFavourites(product);
    toast.success(`${product.title} Added To Favourites`);
  }
};



  return (
    <div className="details_item">
      <h1 className="name">{product.title}</h1>
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
      </div>
      <p className="price">$ {product.price}</p>
      <h5>
        Availability: <span>{product.availabilityStatus}</span>
      </h5>
      <h5>
        Brand: <span>{product.brand}</span>
      </h5>
      <p className="desc">{product.description}</p>
      <h5 className="stock">
        <span>Hurry Up! Only</span>{" "}
        <span>
          {product.stock} <span>products left in stock.</span>
        </span>
      </h5>
      <button onClick={handleAddToCart} className={`btn ${isInCart ? 'in_cart' : ''} `} >
        {isInCart ? "item in cart" : "Add To Cart"}
        <TiShoppingCart />
      </button>

      <div className="icons">
        <span className={`${isInFav ? "in_fav" : ""}`} onClick={handleAddToFavourites}>
          <FaRegHeart />
        </span>
        <span>
          <FaShare />
        </span>
      </div>
    </div>
  );
}

export default ProductInfo;
