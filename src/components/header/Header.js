import './header.css';

import logo from './../../img/logo_Pooshka_124.png';

import frontGirl from './../../img/products/front-girl.png';
import rightGirl from './../../img/products/right-girl.png';

const Header = () => {
	return (
		<div className='hederNav-wrapper'>
			{/* <!------------------------------NAV-----------------------------------------> */}
			<nav className='nav'>
				<div className='container-nav'>
					<div className='nav-row'>
						<a href='/index.html' className='logo'>
							<img src={logo} alt='logo' width='517px' height='124px' />
						</a>
						<ul className='nav-list'>
							<li className='nav-list__item'>
								<a
									href='./index.html'
									className='nav-list__link nav-list__link--active'
								>
									Главная
								</a>
							</li>
							<li className='nav-list__item'>
								<a href='./skills.html' className='nav-list__link'>
									Товары
								</a>
							</li>
							<li className='nav-list__item'>
								<a href='./contacts.html' className='nav-list__link'>
									О нас
								</a>
							</li>
							<li className='nav-list__item'>
								<a href='./contacts.html' className='nav-list__link'>
									Контакты
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
			{/* <!------------------------------NAV-----------------------------------------> */}
			{/* <!----------------------------HEADER----------------------------------------> */}
			<header className='header'>
				<div className='container'>
					<div className='header-row'>
						<div className='header-column'>
							<h1 className='header__title'>
								<strong>
									Магазин <br />
									<em>спортивной </em>
									<br />
									одежды
								</strong>
							</h1>
							<div className='header__text'>
								<p>
									Pooshka - это современный отечественный бренд одежды. <br />
									Выбирая нас вы получаете комфортную, стильную, <br />
									и качественную одежду по очень приятным ценам. <br />
								</p>
							</div>
							<a href='#!' className='btn'>
								Заказать!
							</a>
						</div>
						<div className='header-row__ins'>
							<img
								src={frontGirl}
								alt='front-girl'
								className='front-girl'
								width='175px'
								height='700px'
							/>
							<img
								src={rightGirl}
								alt='right-girl'
								className='right-girl'
								width='175px'
								height='700px'
							/>
							<img src='' alt='' className='left-girl' />
						</div>
					</div>
				</div>
			</header>
			{/* <!----------------------------HEADER----------------------------------------> */}
		</div>
	);
};

export default Header;
