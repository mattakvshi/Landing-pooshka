import Navbar from './../components/navbar/Navbar';
import WbSection from '../components/wb-section/WbSection';

import Slider from './../components/Slider/Slider';
import slider1 from './../img/about-gallery/gallery1.jpg';
import slider2 from './../img/about-gallery/gallery2.jpg';
import slider3 from './../img/about-gallery/gallery3.jpg';
import slider4 from './../img/about-gallery/gallery4.jpg';
import slider5 from './../img/about-gallery/gallery5.jpg';
import slider6 from './../img/about-gallery/gallery6.jpg';

const About = () => {
	return (
		<>
			<Navbar />
			<section className='section-about-info'>
				<div className='container'>
					<WbSection />
					<div className='info-wrapper'>
						<h1 className='title-1'>
							Давайте <em>познакомимся</em>
						</h1>
						<div className='about-text'>
							<p>
								Lorem Ipsum - это текст-"рыба", часто используемый в печати и
								вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
								текстов на латинице с начала XVI века. В то время некий
								безымянный печатник создал большую коллекцию размеров и форм
								шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem
								Ipsum не только успешно пережил без заметных изменений пять
								веков, но и перешагнул в электронный дизайн. Его популяризации в
								новое время послужили публикация листов Letraset с образцами
								Lorem Ipsum в 60-х годах и, в более недавнее время, программы
								электронной вёрстки типа Aldus PageMaker, в шаблонах которых
								используется Lorem Ipsum.
							</p>
							<p>
								Давно выяснено, что при оценке дизайна и композиции читаемый
								текст мешает сосредоточиться. Lorem Ipsum используют потому, что
								тот обеспечивает более или менее стандартное заполнение шаблона,
								а также реальное распределение букв и пробелов в абзацах,
								которое не получается при простой дубликации "Здесь ваш текст..
								Здесь ваш текст.. Здесь ваш текст.." Многие программы
								электронной вёрстки и редакторы HTML используют Lorem Ipsum в
								качестве текста по умолчанию, так что поиск по ключевым словам
								"lorem ipsum" сразу показывает, как много веб-страниц всё ещё
								дожидаются своего настоящего рождения. За прошедшие годы текст
								Lorem Ipsum получил много версий. Некоторые версии появились по
								ошибке, некоторые - намеренно (например, юмористические
								варианты).
							</p>
							<p>
								Есть много вариантов Lorem Ipsum, но большинство из них имеет не
								всегда приемлемые модификации, например, юмористические вставки
								или слова, которые даже отдалённо не напоминают латынь. Если вам
								нужен Lorem Ipsum для серьёзного проекта, вы наверняка не хотите
								какой-нибудь шутки, скрытой в середине абзаца. Также все другие
								известные генераторы Lorem Ipsum используют один и тот же текст,
								который они просто повторяют, пока не достигнут нужный объём.
								Это делает предлагаемый здесь генератор единственным настоящим
								Lorem Ipsum генератором. Он использует словарь из более чем 200
								латинских слов, а также набор моделей предложений. В результате
								сгенерированный Lorem Ipsum выглядит правдоподобно, не имеет
								повторяющихся абзацей или "невозможных" слов.
							</p>
						</div>
					</div>
					<div className='gallery-wrapper'>
						<div className='about-gallery-title'>
							<h2 className='title-3-about'>
								Выставка дизайнерского потенциала
							</h2>
						</div>
						<div className='gallery'>
							<Slider>
								<img src={slider1} alt='sliderImage1' />
								<img src={slider2} alt='sliderImage2' />
								<img src={slider3} alt='sliderImage3' />
								<img src={slider4} alt='sliderImage4' />
								<img src={slider5} alt='sliderImage5' />
								<img src={slider6} alt='sliderImage6' />
							</Slider>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default About;
