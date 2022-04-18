
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About.jsx';
import Checkout from './Pages/Checkout/Checkout.jsx';
import Contact from './Pages/Contact/Contact.jsx';
import Home from './Pages/Home/Home.jsx';
import Login from './Pages/Login/Login/Login.jsx';
import Register from './Pages/Login/Register/Register.jsx';
import Services from './Pages/Services/Services.jsx';
import Footer from './Pages/Shared/Footer/Footer.jsx';
import Header from './Pages/Shared/Header/Header.jsx';
import NotFound from './Pages/Shared/NotFound/NotFound.jsx';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
