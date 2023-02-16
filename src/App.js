import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import Home from './components/Content/Home/Home';
import QuanLyKhachHang from './components/Content/QuanLyKhachHang/QuanLyKhachHang';
import QuanLySanPham from './components/Content/QuanLySanPham/QuanLySanPham';
function App() {
  return (
    <div >
        <Router>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                    <Route index path='/' element={<Home/>}/>
                    <Route index path='/quanlikhachhang' element={<QuanLyKhachHang/>}/>
                    <Route index path='/quanlisanpham' element={<QuanLySanPham/>}/>
                </Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
