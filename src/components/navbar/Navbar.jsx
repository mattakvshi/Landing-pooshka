import './navbar.css';

import logoWhite from './../../img/headerNav/logo-Pooshka-white.png';
import logoBlack from './../../img/headerNav/logo_Pooshka_x-01.png';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLik = 'nav-list__link';

	const normalNav = 'nav';
	const otherNan = 'other-nav';
	var navClass;

	var navLogo;

	const activeURL = window.location.pathname;
	if (activeURL === '/') {
		navClass = normalNav;
		navLogo = logoWhite;
	} else {
		navClass = otherNan;
		navLogo = logoBlack;
	}

	return (
		<nav className={navClass}>
			<div className='container-nav'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<img src={navLogo} alt='logo' width='250px' height='60px' />
					</NavLink>
					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink
								to='/'
								className={({ isActive }) => {
									return isActive ? activeLink : normalLik;
								}}
							>
								Главная
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/products'
								className={({ isActive }) =>
									isActive ? activeLink : normalLik
								}
							>
								Товары
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/about'
								className={({ isActive }) =>
									isActive ? activeLink : normalLik
								}
							>
								О нас
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/contacts'
								className={({ isActive }) =>
									isActive ? activeLink : normalLik
								}
							>
								Контакты
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
