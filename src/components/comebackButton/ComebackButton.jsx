import './comeback-button.css';

import { NavLink } from 'react-router-dom';

import comebackImg from './../../img/comeback-button/left-arrow-svgrepo-com.svg';

const ComebackButton = () => {
	return (
		<section className='comeback-button-section'>
			<div className='container'>
				<div className='comeback-button-wrapper'>
					<NavLink to='/products'>
						<div className='comeback-button'>
							<img
								src={comebackImg}
								alt='comebackImg'
								className='comeback-img'
							/>
							<p>Назад</p>
						</div>
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default ComebackButton;
