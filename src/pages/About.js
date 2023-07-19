import Navbar from './../components/navbar/Navbar';

const About = () => {
	alert(
		'ДАННАЯ СТРАНИЦА НАХОДИТСЯ В СТАДИИ РАЗРАБОТКИ!!! ПОДДЕРЖИТЕ МОЛОДЫХ РАЗРАБОТЧИКОВ ПЖ: СБЕР - +7 (918) 284-28-48.'
	);
	return (
		<>
			<Navbar />
			<section className='about'></section>
		</>
	);
};

export default About;
