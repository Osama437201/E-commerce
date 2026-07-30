import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PageTransition from "../Components/PageTransition";
import Product from "../Components/slideproducts/Product";
import SlideProductLoading from "../Components/slideproducts/SlideProductLoading";

function SearchResults() {
  const [results, setResults] = useState([]);

  const query = new URLSearchParams(useLocation().search).get("query");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res = await fetch(
          `https://dummyjson.com/products/search?q=${query}`,
        );
        const data = await res.json();
        setResults(data.products || []);
      } catch (error) {
        console.error("search error :", error);
      } finally {
        setLoading(false);
      }
    };
    if (query) fetchResults();
  }, [query]);

return (
  <PageTransition key={query}>
    <div className="category_products">
      {loading ? (
        <SlideProductLoading />
      ) : results.length > 0 ? (
        <div className="container">
          <div className="top_slide">
            <h2>Results for: {query}</h2>
          </div>

          <div className="products">
            {results.map((item) => (
              <Product item={item} key={item.id} />
            ))}
          </div>
        </div>
      ) : (
        <div className="container">
          <p>No products found.</p>
        </div>
      )}
    </div>
  </PageTransition>
);
}

export default SearchResults;
