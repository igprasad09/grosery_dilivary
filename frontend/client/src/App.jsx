import {Routes, Route, Navigate} from 'react-router-dom';
import { SellerHome } from './pages/SellerHome';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Products from './pages/Products';
import ProductView from './pages/ProductView';
import Addtocart from './pages/Addtocart';
import { RecoilRoot } from 'recoil';

function App() {
  
  return (
    <>
       <Routes>
           <Route path='/home/seller' element={<RecoilRoot>
            <SellerHome/>
           </RecoilRoot>}/>
           <Route path='/home/seller/product-list' element={<RecoilRoot>
            <SellerHome/>
           </RecoilRoot>}/>
           <Route path='/home/seller/orders' element={<SellerHome/>}/>

           <Route path='/home' element={<RecoilRoot><Home/></RecoilRoot>}/>
           <Route path='/' element={<Navigate to='/home'/>}/>
           <Route path='/signup' element={<Signup/>}/>
           <Route path='/signin' element={<Signin/>}/>
           <Route path='/products' element={<RecoilRoot><Products/></RecoilRoot>}/>
           <Route path='/products/productview' element={<RecoilRoot><ProductView/></RecoilRoot>}/>
           <Route path='/cart' element={<RecoilRoot>
            <Addtocart/>
           </RecoilRoot>}/>
         </Routes>
    </>
  )
}

export default App
