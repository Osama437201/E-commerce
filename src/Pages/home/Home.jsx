import React, { useEffect, useState } from "react";
import HeroSlider from "../../Components/header/HeroSlider";

import "./home.css";
import SlideProduct from "../../Components/slideproducts/SlideProduct";
import SlideProductLoading from "../../Components/slideproducts/SlideProductLoading";
import PageTransition from "../../Components/PageTransition";

const categories = [
  "smartphones",
  "mobile-accessories",
  "laptops",
  "mens-watches",
  "tablets",
  "sports-accessories",
];

function Home() {
  const [products, setProducts] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const results = await Promise.all(
          categories.map(async (category) => {
            const res = await fetch(
              `https://dummyjson.com/products/category/${category}`,
            );
            const data = await res.json();
            return { [category]: data.products };
          }),
        );

        const productsData = Object.assign({}, ...results);
        setProducts(productsData);
      } catch (error) {
        console.error("Erorr Fetching , error");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  return (
    <PageTransition>
      <div>
        <HeroSlider />
        {loading
          ? categories.map((category) => <SlideProductLoading key={category} />)
          : categories.map((category) => (
              <SlideProduct
                key={category}
                data={products[category]}
                title={category.replace("-", " ")}
              />
            ))}
      </div>
    </PageTransition>
  );
}

export default Home;
