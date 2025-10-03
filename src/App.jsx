import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import DetailsPage from "./pages/productPage/productPage";
import Products from './pages/Products/products';
import Layout from './layout/layout';
import About from './pages/About/About';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route  path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          {/* ✅ صفحة التفاصيل */}
          <Route path="/products/:id" element={<DetailsPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
