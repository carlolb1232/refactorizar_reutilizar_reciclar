import logo from './logo.svg';
import './App.css';
import Main from './Views/Main';
import CreateProduct from './Views/CreateProduct';
import UpdateProduct from './Views/UpdateProduct';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import ProductDetail from './Views/ProductDetail';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>PRODUCTS</Link>
          </li>
          <li>
            <Link to={"/product/create"}>CREAR PRODUCT</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/product/:id' element={<ProductDetail />}/>
        <Route path='/product/create' element={<CreateProduct />} />
        <Route path='/product/update/:id' element={<UpdateProduct />}/>
      </Routes>
    </div>
  );
}

export default App;
