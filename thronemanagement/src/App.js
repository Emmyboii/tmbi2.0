import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home2 from "./Pages/Home2";
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Programs from "./Pages/Programs";
import EachPrograms from "./Components/EachPrograms";
import Cart from "./Components/Cart";
import CartPage from "./Pages/Cart";
import { useEffect, useMemo, useState } from "react";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import Articles from "./Pages/Articles";
import ArticlesDetails from "./Pages/ArticlesDetails";
import { getStoredPrograms, extractCartItems, buildSuggestedPrograms } from "./utils/programs";

function App() {

  const [openCart, setOpenCart] = useState(false)
  const [addedPrograms, setAddedPrograms] = useState([]);
  const location = useLocation()

  useEffect(() => {
    const fetchCartItems = () => {
      setAddedPrograms(extractCartItems(getStoredPrograms()));
    };

    // Load initially
    fetchCartItems();

    window.addEventListener('cartUpdated', fetchCartItems);
    return () => window.removeEventListener('cartUpdated', fetchCartItems);
  }, []);

  const suggestedPrograms = useMemo(
    () => buildSuggestedPrograms(getStoredPrograms(), addedPrograms),
    [addedPrograms]
  );

  const hideNavbarAndFooter = location.pathname === '/404'

  useEffect(() => {
    document.body.style.overflow = openCart ? 'hidden' : 'auto';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openCart])

  return (
    <div className="w-full min-h-screen flex flex-col">
      {openCart && (
        <div
          onClick={() => {
            if (openCart) {
              setOpenCart(false)
            }
          }}
          className="w-full h-[200%] bg-black/30 absolute z-50"></div>
      )}
      <div className="w-full flex-1" onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        {!hideNavbarAndFooter && (
          <Navbar addedPrograms={addedPrograms} />
        )}
        <div className="w-full overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home2 />} />
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/articles/:slug" element={<ArticlesDetails />} />
            <Route path="/:category" element={<Programs setOpenCart={setOpenCart} />} />
            <Route path="/:category/:slug" element={<EachPrograms suggestedPrograms={suggestedPrograms} setAddedPrograms={setAddedPrograms} addedPrograms={addedPrograms} setOpenCart={setOpenCart} />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/cart" element={<CartPage suggestedPrograms={suggestedPrograms} setAddedPrograms={setAddedPrograms} addedPrograms={addedPrograms} />} />
            <Route path="*" element={<Navigate to="/404" />} />
          </Routes>
        </div>
      </div>
      <Cart suggestedPrograms={suggestedPrograms} openCart={openCart} setOpenCart={setOpenCart} setAddedPrograms={setAddedPrograms} addedPrograms={addedPrograms} />
      <div className="w-full overflow-x-hidden" onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        {!hideNavbarAndFooter && (
          <Footer />
        )}
      </div>
    </div>
  );
}

export default App;
