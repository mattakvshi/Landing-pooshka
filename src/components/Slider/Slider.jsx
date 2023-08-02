import './slider.css';

import React from 'react';
import { useState } from 'react';

import ArrowButton from './../arrowButton/ArrowButton';

const Slider = ({ children }) => {
	const [activeId, setActiveId] = useState(0);

	const prev = () => {
		setActiveId(activeId => {
			if (activeId > 0) {
				return activeId - 1;
			}
			return activeId;
		});
	};

	const next = () => {
		setActiveId(activeId => {
			if (activeId < children.length - 1) {
				return activeId + 1;
			}
			return activeId;
		});
	};

	const [width, setWidth] = React.useState(window.innerWidth);
	const breakpoint = 700;
	React.useEffect(() => {
		const handleResizeWindow = () => setWidth(window.innerWidth);
		// subscribe to window resize event "onComponentDidMount"
		window.addEventListener('resize', handleResizeWindow);
		return () => {
			// unsubscribe "onComponentDestroy"
			window.removeEventListener('resize', handleResizeWindow);
		};
	}, []);
	if (width > breakpoint) {
		return (
			<div className='slider-wrapper'>
				<ArrowButton direction='left' onClick={prev} disable={activeId === 0} />
				<div className='slider-actions'>
					{children.map((slide, idx) => (
						<div
							key={idx}
							className={`slide${idx === activeId ? ' active' : ''}`}
						>
							{slide}
						</div>
					))}
				</div>
				<ArrowButton
					direction='right'
					onClick={next}
					disable={activeId === children.length - 1}
				/>
			</div>
		);
	} else {
		return (
			<div className='slider-wrapper'>
				<div className='slider-actions'>
					{children.map((slide, idx) => (
						<div
							key={idx}
							className={`slide${idx === activeId ? ' active' : ''}`}
						>
							{slide}
						</div>
					))}
				</div>
				<div className='slider-mbrow'>
					<ArrowButton
						direction='left'
						onClick={prev}
						disable={activeId === 0}
					/>
					<ArrowButton
						direction='right'
						onClick={next}
						disable={activeId === children.length - 1}
					/>
				</div>
			</div>
		);
	}
};

export default Slider;
