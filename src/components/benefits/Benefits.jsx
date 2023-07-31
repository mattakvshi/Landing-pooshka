import './benefits.css';

import benefitIcon1 from './../../img/benefits/benefits-icon-1.png';
import benefitIcon2 from './../../img/benefits/benefits-icon-2.png';
import benefitIcon3 from './../../img/benefits/benefits-icon-3.png';
import benefitIcon4 from './../../img/benefits/benefits-icon-4.png';
import benefitIcon5 from './../../img/benefits/benefits-icon-5.png';
import benefitIcon6 from './../../img/benefits/benefits-icon-6.png';

const Benefits = () => {
	return (
		<section className='section-benefits'>
			<div className='container'>
				<div className='benefits-wrapper'>
					<div className='benefits-title'>
						<h2 className='title-2'>
							Да это же просто <em>пушка!</em>
						</h2>
					</div>

					<ul className='benefits-row'>
						<li className='benefits-card'>
							<img
								className='card-img'
								src={benefitIcon1}
								alt='benefitsIcon1'
							></img>
							<div className='card-info'>
								<h3 className='title-3'>Качество</h3>
								<p className='card-text'>
									Инновационные материалы и современные методы обработки.
								</p>
							</div>
						</li>
						<li className='benefits-card'>
							<img
								className='card-img'
								src={benefitIcon2}
								alt='benefitsIcon2'
							></img>
							<div className='card-info'>
								<h3 className='title-3'>Доставка</h3>
								<p className='card-text'>
									Доставим куда нужно, и ответим на все вопросы по доставке.
								</p>
							</div>
						</li>
						<li className='benefits-card'>
							<img
								className='card-img'
								src={benefitIcon3}
								alt='benefitsIcon3'
							></img>
							<div className='card-info'>
								<h3 className='title-3'>Доступность</h3>
								<p className='card-text'>
									Приятные цены за отличное качество, это ли не счастье?
								</p>
							</div>
						</li>
						<li className='benefits-card'>
							<img
								className='card-img'
								src={benefitIcon4}
								alt='benefitsIcon4'
							></img>
							<div className='card-info'>
								<h3 className='title-3'>Открытость</h3>
								<p className='card-text'>
									Наше важное качество это открытость перед потребителями.
								</p>
							</div>
						</li>
						<li className='benefits-card'>
							<img
								className='card-img'
								src={benefitIcon5}
								alt='benefitsIcon5'
							></img>
							<div className='card-info'>
								<h3 className='title-3'>Скидки</h3>
								<p className='card-text'>
									Мы рады побаловать клиентов, и всегда информируем о новых
									скидках.
								</p>
							</div>
						</li>
						<li className='benefits-card'>
							<img
								className='card-img'
								src={benefitIcon6}
								alt='benefitsIcon6'
							></img>
							<div className='card-info'>
								<h3 className='title-3'>Поддержка</h3>
								<p className='card-text'>
									Решим любые возникшие проблемы и ответим на все вопросы.
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Benefits;
