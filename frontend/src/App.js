import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import men_banner from "./Components/Assets/banner_men.png";
import women_banner from "./Components/Assets/banner_women.png";
import kid_banner from "./Components/Assets/banner_kids.png";
import BasicLayout from "./Components/Layouts/BasicLayout";
import LatestCollection from "./Pages/LatestCollection";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
              <BasicLayout>
                <Shop />
              </BasicLayout>
          }/>
          <Route path="/men" element={
              <BasicLayout>
                <ShopCategory banner={men_banner} category="men" />
              </BasicLayout>
          }/>
          <Route path="/women" element={
              <BasicLayout>
                <ShopCategory banner={women_banner} category="women" />
              </BasicLayout>
          }/>
          <Route path="/kid" element={
              <BasicLayout>
                <ShopCategory banner={kid_banner} category="kid" />
              </BasicLayout>
          }/>
          <Route path="/latest-collection" element={
                <BasicLayout>
                  <LatestCollection banner={men_banner}/>
                </BasicLayout>
          }/>
          <Route path="/product" element={
              <BasicLayout>
                <Product />
              </BasicLayout>
          }>
          <Route path=":productId" element={
                <BasicLayout>
                  <Product />
                </BasicLayout>
          }/>
        </Route>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/login" element={
              <BasicLayout>
                <LoginSignup />
              </BasicLayout>
        }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;