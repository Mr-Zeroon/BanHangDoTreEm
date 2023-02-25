import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import Home from './components/Content/Home/Home';
import Customer from './components/Content/Customer/Customer';
import Customerbtn from './components/Content/Customer/Customerbtn/Customerbtn';
import Header from './components/User/Header';
import HomePage from './pages/HomePage';
import Footer from './components/User/Footer';
import ProductAdmin from './components/Content/ProductAdmin/ProductAdmin';
import ProductAdd from './components/Content/ProductAdmin/ProducAdmin/ProductAdd';
import Admin from './components/Content/Admin/Admin';
import AdminAdd from './components/Content/Admin/AdminAdd/AdminAdd';
import SellingAdmin from './components/Content/SellingAdmin/SellingAdmin';
import SellingAdd from './components/Content/SellingAdmin/SellingAdmin/SellingAdd';
import ProductEdit from './components/Content/ProductAdmin/ProductEdit/ProductEdit';
import AdminEdit from './components/Content/Admin/AdminEdit/AdminEdit';
import SellingEdit from './components/Content/SellingAdmin/SellingEdit/SellingEdit';
import CustomerEdit from './components/Content/Customer/CustomerEdit/CustomerEdit';

function App() {
  return (
    <div >
      <Router>
            <Routes>
                <Route path='/' element={<AdminLayout/>}>
                    <Route index path='/' element={<Home/>}/>
                    <Route  path='/customer' element={<Customer/>}/>
                    <Route  path='/customer/add' element={<Customerbtn/>}/>
                    <Route  path='/customer/:editID' element={<CustomerEdit/>}/>

                    <Route  path='/product' element={<ProductAdmin/>}/>
                    <Route  path='/product/add' element={<ProductAdd/>}/>
                    <Route  path='/product/:editID' element={<ProductEdit/>}/>

                    <Route  path='/selling' element={<SellingAdmin/>}/>
                    <Route  path='/selling/add' element={<SellingAdd/>}/>
                    <Route  path='/selling/:editID' element={<SellingEdit/>}/>

                    <Route  path='/admin' element={<Admin/>}/>
                    <Route  path='/admin/add' element={<AdminAdd/>}/>
                    <Route  path='/admin/:editID' element={<AdminEdit/>}/>
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
