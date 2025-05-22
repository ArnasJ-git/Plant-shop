import { Routes, Route } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import HomePage from "./pages/HomePage";
import ProductsPage from './pages/ProductsPage';
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PageNotFound from "./pages/PageNotFound";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";
import Returns from './pages/Returns';
import CartPage from "./pages/CartPage";
import SingleProductPage from "./pages/SingleProductPage";



function App() {

  return (

    <Routes>

      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/returns" element={<Returns />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        
        
        
        <Route path="*" element={<PageNotFound />} />
      </Route>

    </Routes>

  )
}

export default App;
