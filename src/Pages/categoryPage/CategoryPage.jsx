import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router-dom'
import Product from '../../Components/slideproducts/Product'
import './categorypage.css'
import PageTransition from '../../Components/PageTransition'

function CategoryPage() {

    const {category} = useParams()

    const [categoryProducts , setCategoryProducts] = useState ([])

useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${category}`)
        .then((res) => res.json())
        .then((data) => {
            setCategoryProducts(data.products);
        });
}, [category]);

  return (
  <PageTransition key={category}>
      <div className="category_products">
        <div className="container">
             <div className="top_slide">
          <h2>{category}</h2>
          <p>Add bestselling products to weekly line up</p>
        </div>
            <div className="products">
                {categoryProducts.map((item, index) => (
                    <Product item={item} key={index}/>
                ))}
            </div>
        </div>
    </div>
  </PageTransition>
  )
}

export default CategoryPage