import './style/main.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Product from './pages/Product';
import ProductTSH from './pages/ProductTSH';
import Contacts from './pages/Contacts';
import Footer from './components/footer/Footer';

function App() {
	return (
		<div className='App'>
			<Router>
				<ScrollToTop />
				{/* <!----------------------------PAGES----------------------------------------> */}
				<Routes>
					<Route path='/Landing-pooshka/' element={<Home />} />
					<Route path='/Landing-pooshka/about' element={<About />} />
					<Route path='/Landing-pooshka/products' element={<Products />} />
					<Route path='/Landing-pooshka/product/:id' element={<Product />} />
					<Route path='/Landing-pooshka/product/1' element={<ProductTSH />} />
					<Route path='/Landing-pooshka/contacts' element={<Contacts />} />
				</Routes>
				{/* <!----------------------------PAGES----------------------------------------> */}
				{/* <!----------------------------FOOTER----------------------------------------> */}
				<Footer />
				{/* <!----------------------------FOOTER----------------------------------------> */}
			</Router>
		</div>
	);
}

export default App;
