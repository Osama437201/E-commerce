import React, { useContext } from 'react'
import { CartContext } from '../../Components/context/CartContext'
import PageTransition from '../../Components/PageTransition'
import Product from '../../Components/slideproducts/Product'



function Favourites() {
    const {favourites} = useContext(CartContext)
  return (
   <PageTransition>
    <div className="category_products FavouritesPage">
        <div className="container">
            <div className="top_slide">
                <h2>Your Favourites</h2>
            </div>
            
              {favourites.length === 0 ? (
            <p>No Favourites Products</p>
        ) : (
            <div className="products">
                {favourites.map(item => (
                    <Product item={item} key={item.id}/>
                ))}
            </div>
        )}
        </div>
    </div>
   </PageTransition>
  )
}

export default Favourites