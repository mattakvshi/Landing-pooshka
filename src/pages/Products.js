import './../style/main.css';

import Navbar from './../components/navbar/Navbar';
import WbSection from '../components/wb-section/WbSection';
import ProductCard from '../components/productCard/ProductCard';

import { products } from '../helpers/ProductList';

const Products = () => {
	return (
		<>
			<Navbar />
			<section className='products-section'>
				<div className='container'>
					<WbSection />
					<h2 className='title-1'>
						Ассортимент продукции <em>нашего</em> бренда:
					</h2>
					<ul className='products'>
						{products.map(product => {
							return (
								<ProductCard
									key={product.id}
									link={product.link}
									title={product.title}
									img={product.img}
									description={product.description}
									specifications={product.specifications}
									reviews={product.reviews}
									id={product.id}
								/>
							);
						})}
					</ul>
				</div>
			</section>
		</>
	);
};

export default Products;
