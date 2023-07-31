import './arrowButton.css';

const ArrowButton = ({ direction, disable, onClick }) => {
	let cls = 'arrow-button';

	if (direction === 'left') cls += ' left';
	if (direction === 'right') cls += ' right';
	if (disable) cls += ' disable';

	return <div className={cls} onClick={onClick} />;
};
export default ArrowButton;
