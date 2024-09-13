import './App.css';
import Products from './pages/products';
import Header from './components/header';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CreateNewPoduct from './components/newProductForm'
import MainPage from './pages/mainPage';


function App() {
  return (
    <>
      <Header />
      <Products />
      <CreateNewPoduct />

      {/* <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/> } />
          <Route path="products" element={<Products />} />
          <Route path="newProduct" element={<CreateNewPoduct />} />
      </Routes>
    </BrowserRouter> */}
    </>
  );
}

export default App;
