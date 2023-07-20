import './../style/main.css';

import Navbar from './../components/navbar/Navbar';
import productImg1 from './../img/header-img1.png';
import productImg2 from './../img/header-img2.png';
import productImg3 from './../img/header-img3.png';

const Products = () => {
	return (
		<>
			<Navbar />
			<section className='products-section'>
				<div class='container'>
					<h2 class='title-1'>Projects</h2>
					<ul class='products'>
						<li class='product'>
							<a href='./project-page1.html'>
								<img src={productImg1} alt='product-1' class='product__img' />
								<div className='product__description'>
									<h3 class='product__title'>Название товара</h3>
									<div className='product__text'>
										<p>
											Это краткое описание для каждого товара, подробнее будем
											писать уже на отдельной страничке товара.
										</p>
									</div>
								</div>
							</a>
						</li>
						<li class='product'>
							<a href='./project-page2.html'>
								<img src={productImg2} alt='product-2' class='product__img' />
								<div className='product__description'>
									<h3 class='product__title'>Название товара</h3>
									<div className='product__text'>
										<p>
											Это краткое описание для каждого товара, подробнее будем
											писать уже на отдельной страничке товара.
										</p>
									</div>
								</div>
							</a>
						</li>
						<li class='product'>
							<a href='./project-page3.html'>
								<img src={productImg3} alt='product-3' class='product__img' />
								<div className='product__description'>
									<h3 class='product__title'>Название товара</h3>
									<div className='product__text'>
										<p>
											Это краткое описание для каждого товара, подробнее будем
											писать уже на отдельной страничке товара.
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
