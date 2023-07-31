import './tsh-card.css';

const TSHCard = ({ link, img }) => {
	return (
		<a href={link} target='_blank' rel='noreferrer'>
			<li className='tsh-item'>
				<img src={img} alt='tshImg' className='tsh-img' />
			</li>
		</a>
	);
};

export default TSHCard;
