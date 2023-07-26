import './../style/main.css';

import { useParams } from 'react-router-dom';
import { products } from '../helpers/ProductList';

import Navbar from '../components/navbar/Navbar';

// function giveProduct(idToSearch) {
// 	return products.filter(item => {
// 		return item.id === idToSearch;
// 	});
// }

const Product = () => {
	const { id } = useParams();
	// const product = giveProduct(id);
	// const product = products[id];
	const product = products.reduce(
		(res, obj) => (obj.id === id ? obj : res),
		{}
	);

	return (
		<>
			<Navbar />
			<section className='product-section'>
				<div className='container'>
					<div className='product-wrapper'>
						<div className='product-wrapper__row'>
							<div className='product-wrapper__column'>
								<img
									src={product.img}
									alt={product.title}
									className='product-img'
								/>
							</div>
							<div className='product-wrapper__column'>
								<div className='product-wrapper__column__row'>
									<h2 className='title-2-product'>{product.title}</h2>
								</div>
								<div className='product-wrapper__column__row'>
									<div className='product-specifications'>
										<div className='product-specifications__title'>
											<h4 className='title-4'>Характеристики:</h4>
										</div>
										<div className='product-specifications__text'>
											<ul className='product-specifications__list'>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>
															Страна производитель
														</span>
													</div>
													<span className='item__cor'>{product.country}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Размер/рост</span>
													</div>
													<span className='item__cor'>{product.size}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Ширина упаковки</span>
													</div>
													<span className='item__cor'>{product.width}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Длинна упаковки</span>
													</div>
													<span className='item__cor'>{product.length}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Высота упаковки</span>
													</div>
													<span className='item__cor'>{product.height}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Материал</span>
													</div>
													<span className='item__cor'>{product.material}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Пол</span>
													</div>
													<span className='item__cor'>{product.gender}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Цвет</span>
													</div>
													<span className='item__cor'>{product.color}</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left-desc'>
														<span className='item__label'>Рисунок</span>
													</div>
													<span className='item__cor'>{product.drawing}</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='product-wrapper__column__row'>
									<div className='btn-wrapper-right'>
										<a
											href={product.link}
											target='_blank'
											rel='noreferrer'
											className='product-btn'
										>
											Заказать!
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className='product-wrapper__row'>
							<div className='product-description'>
								<div className='product-description__title'>
									<h4 className='title-4'>Описание:</h4>
								</div>
								<div className='product-description__text'>
									<p>{product.fullDescription}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Product;
