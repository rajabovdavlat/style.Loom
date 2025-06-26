import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import Basket from "./pages/Basket/Basket"
import Contacts from "./pages/Contacts/Contacts";

const App = () => {
  return (
    <Routes>
      {/* Главный layout */}
      <Route path='/' element={<MainLayout />}>
        {/* Вложенные страницы */}
        <Route path="/" element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path="basket" element={<Basket />} />
        <Route path='contacts' element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;
