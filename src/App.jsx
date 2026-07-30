import { Route, Routes } from "react-router-dom";
import BtmHeader from "./Components/header/BtmHeader";
import TopHeader from "./Components/header/TopHeader";
import Home from "./Pages/home/Home";
import ProductDetails from "./Pages/productdetails/ProductDetails";
import Cart from "./Pages/cart/Cart";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
import CategoryPage from "./Pages/categoryPage/CategoryPage";
import SearchResults from "./Pages/SearchResults";
import Favourites from "./Pages/favourites/Favourites";

function App() {
  return (
    <>
      <header>
        <TopHeader />
        <BtmHeader />
      </header>

      <Toaster  position="bottom-right" toastOptions={{
        style:{
          background:'#e9e9e9',
          borderRadius:'5px',
          padding:'14px'

        }

        
      }}/>
    <ScrollToTop/>
    <AnimatePresence mode="wait">
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/category/:category" element={<CategoryPage />} />
      </Routes>
    </AnimatePresence>
     
    </>
  );
}

export default App;
