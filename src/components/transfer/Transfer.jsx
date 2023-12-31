import './transfer.css';

import transferBgDownLeft from './../../img/transfer/transfer-bg-down-left.png';
import transferBgDownRight from './../../img/transfer/transfer-bg-down-right.png';
import transferBgUpRight from './../../img/transfer/transfer-bg-up-right.png';
import transferBgUpLeft from './../../img/transfer/transfer-bg-up-left.png';

import downGalka from './../../img/transfer/down-galka.png';

const Transfer = () => {
	return (
		<section className='transfer'>
			<div className='container'>
				<div className='transfer-wrapper'>
					<div className='transfer-column'>
						<div className='transfer-column__title'>
							<h2 className='title-2'>
								Как мне <em>купить</em> ваши товары?
							</h2>
						</div>
						<div className='transfer-column__text'>
							<p>
								Всё очень просто! Весь ассортимент нашей продукции представлен
								на страничке магазина на Wildberries:
							</p>
						</div>
						<div className='alter-btn'>
							<a
								href='https://www.wildberries.ru/seller/1202796#c148101751'
								target='_blank'
								rel='noreferrer'
								className='alter-btn__btn'
							>
								Мы на Wildberries!
							</a>
							<img
								src={downGalka}
								alt='downGalka'
								className='down-galka'
								width='24px'
								height='24px'
							/>
						</div>
					</div>
				</div>
			</div>
			<img
				src={transferBgDownLeft}
				alt='transferBgDownLeft'
				className='transfer-bg-down-left'
			/>
			<img
				src={transferBgDownRight}
				alt='transferBgDownRight'
				className='transfer-bg-down-right'
			/>
			<img
				src={transferBgUpRight}
				alt='transferBgUpRight'
				className='transfer-bg-up-right'
			/>
			<img
				src={transferBgUpLeft}
				alt='transferBgUpLeft'
				className='transfer-bg-up-left'
			/>
		</section>
	);
};

export default Transfer;
