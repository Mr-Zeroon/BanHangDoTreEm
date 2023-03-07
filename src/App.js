import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/User/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ServicePage from './pages/ServicePage';
import FavoritePage from './pages/FavoritePage';
import ShoppingPage from './pages/ShoppingPage';
import Footer from './components/User/Footer';
import ProductAdmin from './components/Content/ProductAdmin/ProductAdmin';
import ProductAdd from './components/Content/ProductAdmin/ProducAdmin/ProductAdd';
import SellingAdmin from './components/Content/SellingAdmin/SellingAdmin';
import SellingAdd from './components/Content/SellingAdmin/SellingAdmin/SellingAdd';
import ProductEdit from './components/Content/ProductAdmin/ProductEdit/ProductEdit';
import SellingEdit from './components/Content/SellingAdmin/SellingEdit/SellingEdit';
import CustomerEdit from './components/Content/Customer/CustomerEdit/CustomerEdit';
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import Home from './components/Content/Home/Home';
import Customer from './components/Content/Customer/Customer';
import Customerbtn from './components/Content/Customer/Customerbtn/Customerbtn';
import HomeLayout from './layouts/UserLayout/HomeLayout/index'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LoginLayout from './layouts/UserLayout/LoginLayout';
function App() {
  return (
    <div >
      <Router>
            <Routes>
                <Route path='/admin' element={<AdminLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route  path='customer' element={<Customer/>}/>
                    <Route  path='customer/add' element={<Customerbtn/>}/>
                    <Route  path='customer/:editID' element={<CustomerEdit/>}/>

                    <Route  path='product' element={<ProductAdmin/>}/>
                    <Route  path='product/add' element={<ProductAdd/>}/>
                    <Route  path='product/:editID' element={<ProductEdit/>}/>

                    <Route  path='selling' element={<SellingAdmin/>}/>
                    <Route  path='selling/add' element={<SellingAdd/>}/>
                    <Route  path='selling/:editID' element={<SellingEdit/>}/>   
                </Route>
                <Route path='/' element={<HomeLayout/>}>
                    <Route  index element={<HomePage/>}/>
                    <Route  path='menu' element={<MenuPage/>}/>
                    <Route  path='about' element={<AboutPage/>}/>
                    <Route  path='service' element={<ServicePage/>}/>
                    <Route  path='favorite' element={<FavoritePage/>}/>
                    <Route  path='shopping' element={<ShoppingPage/>}/>
                </Route>
                <Route path="/login-layout" element={<LoginLayout />}>
                  <Route index element={<LoginPage />} />
                  <Route path="login" element={<LoginPage />} />
                  <Route path="register" element={<RegisterPage />} />
                </Route>
            </Routes>
      </Router>
      {/* <Header/>
      <HomePage/>
      <Footer /> */}
    </div>
  );
}

export default App;
