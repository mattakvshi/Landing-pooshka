import './product-card.css';

import { NavLink } from 'react-router-dom';

const ProductCard = ({
	title,
	img,
	description,
	specifications,
	reviews,
	id,
}) => {
	return (
		<li className='product'>
			<NavLink to={`/Landing-pooshka/product/${id}`}>
				<img src={img} alt={title} className='product__img' />
				<div className='product__description'>
					<h3 className='product__title'>{title}</h3>
					<div className='product__text'>
						<p>{description}</p>
						<p>{specifications}</p>
						<p>
							<em>{reviews} &#9734;</em>
						</p>
					</div>
				</div>
			</NavLink>
		</li>
	);
};

export default ProductCard;
