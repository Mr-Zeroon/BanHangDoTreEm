import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout/AdminLayout'
import Home from './components/Content/Home/Home';
import Customer from './components/Content/Customer/Customer';
import Customerbtn from './components/Content/Customer/Customerbtn/Customerbtn';
import Header from './components/User/Header';
import HomePage from './pages/HomePage';
import Footer from './components/User/Footer';
function App() {
  return (
    <div >
      <Router>
            <Routes>
                <Route path='/' element={<AdminLayout/>}>
                    <Route index path='/' element={<Home/>}/>
                    <Route  path='/customer' element={<Customer/>}/>
                    <Route  path='/customer/add' element={<Customerbtn/>}/>
                </Route>
            </Routes>
      </Router>
      <Header/>
      <HomePage/>
      <Footer />
    </div>
  );
}

export default App;
