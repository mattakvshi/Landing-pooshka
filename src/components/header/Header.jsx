import './header.css';

import Navbar from '../navbar/Navbar';

const Header = () => {
	return (
		<div className='hederNav-wrapper'>
			{/* <!------------------------------NAV-----------------------------------------> */}
			<Navbar />
			{/* <!------------------------------NAV-----------------------------------------> */}
			{/* <!----------------------------HEADER----------------------------------------> */}
			<header className='header'>
				<div className='container'>
					<div className='header-row'>
						<div className='header-column'>
							<h1 className='header__title'>
								<strong>
									Магазин <em>дизайнерской </em>
									<br />
									одежды
								</strong>
							</h1>
							<div className='header__text'>
								<p>
									Pooshka - это современный отечественный бренд одежды. <br />
									Выбирая нас, вы получаете комфортную, стильную, <br />
									и качественную одежду по очень приятным ценам. <br />
								</p>
							</div>
							<a href='#!' className='btn'>
								Заказать!
							</a>
						</div>
					</div>
				</div>
			</header>
			{/* <!----------------------------HEADER----------------------------------------> */}
		</div>
	);
};

export default Header;
