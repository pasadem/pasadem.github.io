import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/products";
import Header from "./components/header";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CreateNewPoduct from "./components/newProductForm";
import NewProductReductForm from "./components/newProductReductForm";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/newProduct" element={<CreateNewPoduct />} />
          <Route path="/reductNewProduct" element={<NewProductReductForm />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
