import './../style/main.css';

import Navbar from '../components/navbar/Navbar';
import ComebackButton from '../components/comebackButton/ComebackButton';

import TSHCard from '../components/tshCard/TSHCard';
import { tshorts } from '../helpers/TSHList';

const ProductTSH = () => {
	return (
		<>
			<Navbar />
			<ComebackButton />
			<section className='product-tsh-section'>
				<div className='container'>
					<div className='tsh-wrapper'>
						<h2 className='title-2-product'>Футболки с кастомным принтом</h2>
						<ul className='tsh-list'>
							{tshorts.map(tshort => {
								return (
									<TSHCard
										key={tshort.id}
										link={tshort.link}
										img={tshort.img}
									/>
								);
							})}
						</ul>
					</div>
				</div>
			</section>
			;
		</>
	);
};

export default ProductTSH;
