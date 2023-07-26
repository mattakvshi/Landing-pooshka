import './../style/main.css';

import Navbar from '../components/navbar/Navbar';

import img from './../img/new-products/product-combez.png';

const Product = () => {
	return (
		<>
			<Navbar />
			<section className='product-section'>
				<div className='container'>
					<div className='product-wrapper'>
						<div className='product-wrapper__row'>
							<div className='product-wrapper__column'>
								<img src={img} alt='img' className='product-img' />
							</div>
							<div className='product-wrapper__column'>
								<div className='product-wrapper__column__row'>
									<h2 className='title-2-product'>Комбинезон спортивный</h2>
								</div>
								<div className='product-wrapper__column__row'>
									<div className='product-specifications'>
										<div className='product-specifications__title'>
											<h4 className='title-4'>Характеристики:</h4>
										</div>
										<div className='product-specifications__text'>
											<ul className='product-specifications__list'>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>
															Страна производитель
														</span>
													</div>
													<span className='item__cor'>Россия</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Размер/рост</span>
													</div>
													<span className='item__cor'>28 - 36 размер</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Ширина упаковки</span>
													</div>
													<span className='item__cor'>20 см</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Длинна упаковки</span>
													</div>
													<span className='item__cor'>15 см</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Высота упаковки</span>
													</div>
													<span className='item__cor'>5 см</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Материал</span>
													</div>
													<span className='item__cor'>Лайкра 100%</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Пол</span>
													</div>
													<span className='item__cor'>Девочки</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Цвет</span>
													</div>
													<span className='item__cor'>Чёрный</span>
												</li>
												<li className='product-specifications__item'>
													<div className='left'>
														<span className='item__label'>Рисунок</span>
													</div>
													<span className='item__cor'>Без рисунка</span>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className='product-wrapper__column__row'>
									<div className='btn-wrapper-right'>
										<a
											href='https://www.wildberries.ru/catalog/151591102/detail.aspx'
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
									<p>
										Классический комбинезон спортивный - универсальный и
										распространенный вариант одежды для тренировок, гимнастики,
										танцев, акробатики. Гимнастический костюм для танцев
										является аналогом купальника , боди гимнастического с
										коротким рукавом. Верхняя часть с вырезом на спине , а
										нижняя часть выполнена из укороченных шорт. При пошиве
										гимнастического комбинезона используется современная ткань,
										выводящая влагу с поверхности кожи и сохраняющая сухость и
										тепло тела, за счёт чего он идеально подходит для тренировок
										и выступлений. Лайкра (бифлекс) - гарантирует коже
										комфортные ощущения, эластичность, несминаемость и высокую
										устойчивость к стиранию. Комбинезон подходит для занятий
										спортом- спортивных танцев, фигурного катания, легкой
										атлетики, ритмики, йоги, хореографии, воздушной акробатики,
										эквилибристики. Отлично садится по фигуре и не сковывает
										движения. Комфортный, износостойкий и долговечный материал -
										бифлекс . Также подходит для купания, занятием другими
										видами спорта Ваша юная спортсменка будет в нем неотразима!
										Комбинезон спортивный черный для гинмастики комбинезон для
										воздушной гимнастики комбинезон для хореографии верхняя
										часть купальника комбинезон гимнастический для девочки
										комбинезон для гимнастика девочки блестящий комбинезон
										комбинезон блестящий комбинезон для гимнастики детский
										гимнастический комбинезон комбинезон гимнастический.
									</p>
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
