
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Fashion from './components/Fashion';
import Electronic from './components/Electronic'
import Jewellery from './components/Jewellery';
import ProductDetail from './components/ProductDetail';
import ListCart from './components/ListCart';



function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/fashion' element={<Fashion/>}></Route>
      <Route path='/electronic' element={<Electronic/>}></Route>
      <Route path='/jewellery' element={<Jewellery/>}></Route> 
      <Route path='/productDetail' element={<ProductDetail/>}></Route> 
      <Route path='/cart' element={<ListCart/>}></Route>
      {/* <Route path='/signin' element={<SignIn/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>     */}
    </Routes>

    </div>
  );
}

export default App;
