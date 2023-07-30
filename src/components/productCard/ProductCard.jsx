import './product-card.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

const ProductCard = ({
	title,
	img,
	description,
	specifications,
	reviews,
	id,
}) => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 700;
	React.useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		// subscribe to window resize event "onComponentDidMount"
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			// unsubscribe "onComponentDestroy"
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);
	if (width > breakpoint) {
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
	}
	return (
		<li className='product-mobile'>
			<NavLink to={`/Landing-pooshka/product/${id}`}>
				<img src={img} alt={title} className='product__img-mobile' />
				<div className='product__description-mobile'>
					<h3 className='product__title-mobile'>{title}</h3>
					<div className='product__text-mobile'>
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
