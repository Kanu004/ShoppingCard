import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import {Navbar} from './components/navbar';
import {Shop} from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ShopcontextProvider } from './context/shopcontext';

function App() {
  return (
    <div className='App'>
      <ShopcontextProvider> 
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
      </ShopcontextProvider>
    </div>
  );
}

export default App;
