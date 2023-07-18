import './style/main.css';

import Header from './components/header/Header';
import Choice from './components/choice/Choice';
import Indicators from './components/indicators/Indicators';
import Benefits from './components/benefits/Benefits';
import Footer from './components/footer/Footer';
import Transfer from './components/transfer/Transfer';
import Preview from './components/preview/Preview';

function App() {
	return (
		<div className='App'>
			{/* <!----------------------------HEADER----------------------------------------> */}
			<Header />
			{/* <!----------------------------HEADER----------------------------------------> */}
			{/* <!-----------------------------MAIN-----------------------------------------> */}
			<Choice />
			<Indicators />
			<Preview />
			<Benefits />
			<Transfer />
			{/* <!-----------------------------MAIN-----------------------------------------> */}
			{/* <!----------------------------FOOTER----------------------------------------> */}
			<Footer />
			{/* <!----------------------------FOOTER----------------------------------------> */}
		</div>
	);
}

export default App;
