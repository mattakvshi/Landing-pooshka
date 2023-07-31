import './wb-section.css';

import React from 'react';

import wbLogoBig from './../../img/wb-section/wb-logo-bg.png';
import wbLogoMin from './../../img/wb-section/wb-logo.png';

const WbSection = () => {
	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 940;
	let wbLogo;
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
		wbLogo = wbLogoBig;
	} else {
		wbLogo = wbLogoMin;
	}

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
					<img src={wbLogo} alt='wbLogoBig' className='wb-logo-img' />
				</a>
			</div>
		</div>
	);
};

export default WbSection;
