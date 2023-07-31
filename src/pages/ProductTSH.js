import './../style/main.css';

import Navbar from '../components/navbar/Navbar';
import ComebackButton from '../components/comebackButton/ComebackButton';

import TSHCard from '../components/tshCard/TSHCard';
import { tshorts } from '../helpers/TSHList';

import { products } from '../helpers/ProductList';

const ProductTSH = () => {
	const product = products[0];

	return (
		<>
			<Navbar />
			<ComebackButton />
			<section className='product-tsh-section'>
				<div className='container'>
					<div className='tsh-wrapper'>
						<h2 className='title-2-product'>Футболки с кастомным принтом</h2>
						<ul className='tsh-list'>
							{tshorts.map(tshort => {
								return (
									<TSHCard
										key={tshort.id}
										link={tshort.link}
										img={tshort.img}
									/>
								);
							})}
						</ul>
					</div>
					<div className='desc-wrapper'>
						<div className='desc-wrapper__column'>
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
						<div className='desc-wrapper__column-2'>
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
			;
		</>
	);
};

export default ProductTSH;
