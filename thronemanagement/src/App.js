import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home2 from "./Pages/Home2";
import { Routes, Route, Navigate } from 'react-router-dom';
import Programs from "./Pages/Programs";
import EachPrograms from "./Components/EachPrograms";
import Cart from "./Components/Cart";
import CartPage from "./Pages/Cart";
import { useEffect, useState } from "react";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import ProgramDetails from './Components/ProgramDetails';
import Articles from "./Pages/Articles";
import ArticlesDetails from "./Pages/ArticlesDetails";

function App() {

  const [openCart, setOpenCart] = useState(false)
  const [addedPrograms, setAddedPrograms] = useState([]);

  useEffect(() => {
    const fetchCartItems = () => {
      const stored = localStorage.getItem('programsData');
      if (!stored) return;

      try {
        const data = JSON.parse(stored);
        const categoryArray = Array.isArray(data) ? data : [data];
        const cartItems = [];

        categoryArray.forEach((cat) => {
          if (cat.addToCart) {
            cartItems.push({
              programLabel: cat.programName,
              programPrice: 0,
              programImg: cat.heroImg,
              projectPath: cat.path,
            });
          }

          cat.programDetails?.forEach((program) => {
            if (program.addToCart) {
              cartItems.push(program);
            }
          });
        });

        setAddedPrograms(cartItems);
      } catch (error) {
        console.error('Failed to parse or extract cart items:', error);
      }
    };

    // Load initially
    fetchCartItems();

    window.addEventListener('cartUpdated', fetchCartItems);
    return () => window.removeEventListener('cartUpdated', fetchCartItems);
  }, []);

  const suggestedPrograms = (() => {
    const stored = localStorage.getItem('programsData');
    const allPrograms = stored ? JSON.parse(stored) : ProgramDetails;

    const cartPaths = new Set(addedPrograms.map(p => p.projectPath));
    const cartNames = [...new Set(addedPrograms.map(p => p.programName))];

    const suggestions = [];
    const addedSuggestionPaths = new Set();

    // Step 1: 1 suggestion per cart programName
    for (const name of cartNames) {
      for (const category of allPrograms) {
        const program = category.programDetails.find(p =>
          p.programName === name && !cartPaths.has(p.projectPath) && !addedSuggestionPaths.has(p.projectPath)
        );
        if (program) {
          suggestions.push(program);
          addedSuggestionPaths.add(program.projectPath);
          break;
        }
      }
    }

    // Step 2: Add more from same categories to reach 3–5
    let i = 0;
    while (suggestions.length < 3 || (suggestions.length < 5 && cartNames.length > 1)) {
      const currentName = cartNames[i % cartNames.length];

      for (const category of allPrograms) {
        const extra = category.programDetails.find(p =>
          p.programName === currentName && !cartPaths.has(p.projectPath) && !addedSuggestionPaths.has(p.projectPath)
        );
        if (extra) {
          suggestions.push(extra);
          addedSuggestionPaths.add(extra.projectPath);
          break;
        }
      }

      i++;
      if (i > 10) break; // fallback to avoid infinite loops
    }

    return suggestions;
  })();

  useEffect(() => {
    if (openCart) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [openCart])

  return (
    <div className="App overflow-x-hidden">
      {openCart && (
        <div
          onClick={() => {
            if (openCart) {
              setOpenCart(false)
            }
          }}
          className="w-full h-[200%] bg-black/30 absolute z-50"></div>
      )}
      <div onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        <Navbar addedPrograms={addedPrograms} />
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:slug" element={<ArticlesDetails />} />
          <Route path="/:category" element={<Programs setOpenCart={setOpenCart} />} />
          <Route path="/:category/:slug" element={<EachPrograms setOpenCart={setOpenCart} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/cart" element={<CartPage suggestedPrograms={suggestedPrograms} setAddedPrograms={setAddedPrograms} addedPrograms={addedPrograms} />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </div>
      <Cart suggestedPrograms={suggestedPrograms} openCart={openCart} setOpenCart={setOpenCart} setAddedPrograms={setAddedPrograms} addedPrograms={addedPrograms} />
      <div onClick={() => {
        if (openCart) {
          setOpenCart(false)
        }
      }}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
