import Navbar from './../components/navbar/Navbar';

import contactIco1 from './../img/contacts/location.svg';
import contactIco2 from './../img/contacts/telegram.svg';
import contactIco3 from './../img/contacts/whatsapp.svg';
import contactIco4 from './../img/contacts/email.svg';

const Contacts = () => {
	return (
		<>
			<Navbar />
			<section className='contacts'>
				<div className='container'>
					<div className='contacts-title'>
						<h1 className='title-1'>
							Мы <em>всегда</em> на связи!
						</h1>
					</div>
					<ul className='contact-list'>
						<li className='contact-list__item'>
							<img
								src={contactIco1}
								alt='contactIco1'
								className='contact-ico'
							/>
							<div className='contact-text'>
								<h4 className='title-4'>Краснодар,Россия</h4>
							</div>
						</li>
						<li className='contact-list__item'>
							<img
								src={contactIco2}
								alt='contactIco2'
								className='contact-ico'
							/>
							<div className='contact-text'>
								<h4 className='title-4'>+7 (999) 633-98-77</h4>
							</div>
						</li>
						<li className='contact-list__item'>
							<img
								src={contactIco3}
								alt='contactIco3'
								className='contact-ico'
							/>
							<div className='contact-text'>
								<h4 className='title-4'>+7 (999) 633-98-77</h4>
							</div>
						</li>
						<li className='contact-list__item'>
							<img
								src={contactIco4}
								alt='contactIco4'
								className='contact-ico'
							/>
							<div className='contact-text'>
								<h4 className='title-4'>mattakvvshi@yandex.ru</h4>
							</div>
						</li>
					</ul>
					{/* <ul className='contact-list'>
						<li className='contact-list__item'>
							<h2 className='title-2'>Location</h2>
							<p>Krasnodar,Russia</p>
						</li>
						<li className='contact-list__item'>
							<h2 className='title-2'>Telegram/WhatsApp</h2>
							<p>
								<a href='tel:+79996339877'>+7 (999) 633-98-77</a>
							</p>
						</li>
						<li className='contact-list__item'>
							<h2 className='title-2'>Email</h2>
							<p>
								<a href='mailto:mattakvvshi@yandex.ru'>mattakvvshi@yandex.ru</a>
							</p>
						</li>
					</ul> */}
				</div>
			</section>
		</>
	);
};

export default Contacts;
