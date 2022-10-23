import { BrowserRouter as Router ,  Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Profile from './pages/Profile'
import Products from './pages/Products';
import ProductDetails from './components/productDetails';
import Post from './pages/Post';
import Search from './components/search'
import NewSignUp from './components/newSignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/product/:productId" exact element={<ProductDetails/>}/>
        <Route path="/" element={<SignUp/>} />
        <Route path="/newsignup" element={<NewSignUp/>} />
        <Route path="/login" element={<LogIn/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/post" element={<Post/>} />
        <Route path="/search" element={<Search/>} />
        <Route>404 not found!</Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
