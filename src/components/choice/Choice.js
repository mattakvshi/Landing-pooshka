import './choice.css';

import choiceIcon1 from './../../img/choice/choice-icon-1.png';
import choiceIcon2 from './../../img/choice/choice-icon-2.png';
import choiceIcon3 from './../../img/choice/choice-icon-3.png';

import headerImg from './../../img/header-img4.png';

const Choice = () => {
	return (
		<section className='section-choice'>
			<div className='container'>
				<div className='section-choice__title'>
					<h2 className='title-2'>
						Почему <em>потребители</em> выбирают нас?
					</h2>
				</div>
				<div className='choice-wrapper'>
					<ul className='benefits'>
						<li className='benefit'>
							<img src={choiceIcon1} alt='choiceIcon1' className='choiceIcon' />
							<div className='benefit-info'>
								<h3 className='title-3'>Собственное производство</h3>
								<p className='benefit-text'>
									Мы отвечаем за качество нашей продукции ведь делаем её сами.
								</p>
							</div>
						</li>
						<li className='benefit'>
							<img src={choiceIcon2} alt='choiceIcon2' className='choiceIcon' />
							<div className='benefit-info'>
								<h3 className='title-3'>Уникальный дизайн</h3>
								<p className='benefit-text'>
									Над дизайном продукции нашего бренда работают лучшие
									специалисты.
								</p>
							</div>
						</li>
						<li className='benefit'>
							<img src={choiceIcon3} alt='choiceIcon3' className='choiceIcon' />
							<div className='benefit-info'>
								<h3 className='title-3'>Быстрая доставка</h3>
								<p className='benefit-text'>
									Доставим аккуратно и быстро в любую точку России.
								</p>
							</div>
						</li>
					</ul>
					<div className='benefit-images'>
						<div className='benefit-img__img'>
							<img
								src={headerImg}
								alt='front-girl'
								className='front-girl'
								width='450px'
								height='600px'
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Choice;
