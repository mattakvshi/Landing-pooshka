import './../style/main.css';

import Navbar from './../components/navbar/Navbar';

import productImg1 from './../img/new-products/product-combez.png';
import productImg2 from './../img/new-products/product-leggenci.png';
import productImg3 from './../img/new-products/product-yubka.png';

import wbLogoBig from './../img/wb-section/wb-logo-bg.png';

const Products = () => {
	return (
		<>
			<Navbar />
			<section className='products-section'>
				<div className='container'>
					<div className='wb-section'>
						<div className='wb-section__column'>
							<div className='wb-section__title'>
								Переходи на страницу магазина
							</div>
							<div className='wb-section__text'>
								<p>и покупай прямо сейчас по лучшей цене!</p>
							</div>
						</div>
						<div className='wb-section__column'>
							<a href='#!' className='btn-wb'>
								Перейти
							</a>
						</div>
						<div className='wb-section__column'>
							<a href='#!'>
								<img src={wbLogoBig} alt='wbLogoBig' className='wb-logo-img' />
							</a>
						</div>
					</div>
					<h2 className='title-1'>
						Ассортимент продукции <em>нашего</em> бренда:
					</h2>
					<ul className='products'>
						<li className='product'>
							<a href='./project-page1.html'>
								<img
									src={productImg1}
									alt='product-1'
									className='product__img'
								/>
								<div className='product__description'>
									<h3 className='product__title'>Комбинезон спортивный</h3>
									<div className='product__text'>
										<p>
											Это краткое описание для каждого товара, подробнее будем
											писать уже на отдельной страничке товара.
										</p>
										<p>
											Характеристики: здесь / будут / указаны / основные /
											характеристики
										</p>
										<p>
											<em>4.8 &#9734;</em>
										</p>
									</div>
								</div>
							</a>
						</li>
						<li className='product'>
							<a href='./project-page2.html'>
								<img
									src={productImg2}
									alt='product-2'
									className='product__img'
								/>
								<div className='product__description'>
									<h3 className='product__title'>Леггинсы спортивные</h3>
									<div className='product__text'>
										<p>
											Это краткое описание для каждого товара, подробнее будем
											писать уже на отдельной страничке товара.
										</p>
										<p>
											Характеристики: здесь / будут / указаны / основные /
											характеристики
										</p>
										<p>
											<em>4.8 &#9734;</em>
										</p>
									</div>
								</div>
							</a>
						</li>
						<li className='product'>
							<a href='./project-page3.html'>
								<img
									src={productImg3}
									alt='product-3'
									className='product__img'
								/>
								<div className='product__description'>
									<h3 className='product__title'>Шифоновая юбка</h3>
									<div className='product__text'>
										<p>
											Это краткое описание для каждого товара, подробнее будем
											писать уже на отдельной страничке товара.
										</p>
										<p>
											Характеристики: здесь / будут / указаны / основные /
											характеристики
										</p>
										<p>
											<em>4.8 &#9734;</em>
										</p>
									</div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</section>
		</>
	);
};

export default Products;
