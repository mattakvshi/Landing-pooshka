import './wb-section.css';

import wbLogoBig from './../../img/wb-section/wb-logo-bg.png';

const WbSection = () => {
	return (
		<div className='wb-section'>
			<div className='wb-section__column'>
				<div className='wb-section__title'>Переходи на страницу магазина</div>
				<div className='wb-section__text'>
					<p>и покупай прямо сейчас по лучшей цене!</p>
				</div>
			</div>
			<div className='wb-section__column'>
				<a
					href='https://www.wildberries.ru/seller/1202796#c148101751'
					target='_blank'
					rel='noreferrer'
					className='btn-wb'
				>
					Перейти
				</a>
			</div>
			<div className='wb-section__column'>
				<a
					href='https://www.wildberries.ru/seller/1202796#c148101751'
					target='_blank'
					rel='noreferrer'
				>
					<img src={wbLogoBig} alt='wbLogoBig' className='wb-logo-img' />
				</a>
			</div>
		</div>
	);
};

export default WbSection;
