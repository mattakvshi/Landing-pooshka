import './preview.css';

import bollsUpImg from './../../img/preview/bolls-up-img.png';
import bollsDownImg from './../../img/preview/bolls-down-img.png';

const Preview = () => {
	return (
		<section className='preview'>
			<div className='container'>
				<div className='preview-wrapper'>
					<div className='preview-row'>
						<div className='preview-column-up'>
							<h2 className='title-2'>
								Спортивная <em>одежда</em> для гимнастики.
							</h2>
							<div className='preview-column__text'>
								<p>
									Почему наша спортивная одежда так востребована на Российском
									рынке? Всё очень просто! Интерес к нашей продукции вызван
									материалами, из которых она изготовлена. Благодаря им, одежда
									очень Приятна к телу, удобна в носке и проста в уходе!
								</p>
							</div>
						</div>
						<div className='preview-column-imgUp'>
							<img
								src={bollsUpImg}
								alt='bollsUpImg'
								className='bolls-up-img'
								width='600px'
								height='400px'
							/>
						</div>
					</div>
					<div className='preview-row'>
						<div className='preview-column-imgDown'>
							<img
								src={bollsDownImg}
								alt='bollsDownImg'
								className='bolls-down-img'
								width='600px'
								height='400px'
							/>
						</div>
						<div className='preview-column-down'>
							<h2 className='title-2'>
								Дизайнерские футболки с <em>кастомным</em> принтом.
							</h2>
							<div className='preview-column__text'>
								<p>
									Наши специалисты разработали множество уникальных дизайнов для
									ваших стильных образов. Современное оборудование позволяет
									получать печать наилучшего качества.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Preview;
