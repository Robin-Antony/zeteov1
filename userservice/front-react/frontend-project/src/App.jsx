
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './components/Layout'
import Home from './pages/Home';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import UserRegister from './pages/UserRegister';
import CollegeDetails from './pages/CollegeDetails';
import Search from './pages/Search';
import Order from './pages/Order';
import CourseDetails from './pages/CourseDetails';
import PrivateRoute from './utils/PrivateRoute';
import LoginUser from './pages/LoginUser';
import AccountRecovery from "./pages/AccountRecovery";
import CartDetail from "./pages/CartDetail";

function App() {


  return (
      <>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route element={<PrivateRoute/>}>
              <Route index element={<Home/>}></Route>
              <Route path='cart' element={<Cart/>}></Route>
              <Route path='profile' element={<Profile/>}></Route>
              <Route path='college/:id' element={<CollegeDetails/>}></Route>
              <Route path='search' element={<Search/>}></Route>
              <Route path='order' element={<Order/>}></Route>
              <Route path='course' element={<CourseDetails/>}></Route>
              <Route path='cart/details/:id' element={<CartDetail/>}></Route>
            </Route>

            <Route path='login' element={<LoginUser/>}></Route>
            <Route path='register' element={<UserRegister/>}></Route>
            <Route path='account-recovery' element={<AccountRecovery/>}></Route>
            
            
          </Route>
        </Routes>
        </BrowserRouter>
      </>
  )
}

export default App
