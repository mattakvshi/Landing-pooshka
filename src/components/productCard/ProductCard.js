import './product-card.css';

const ProductCard = ({
	link,
	title,
	img,
	description,
	specifications,
	reviews,
}) => {
	return (
		<li className='product'>
			<a href={link}>
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
			</a>
		</li>
	);
};

export default ProductCard;
