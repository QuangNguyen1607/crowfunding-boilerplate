import React from 'react';

const Overlay = () => {
	return (
		<>
			<div className="overlay fixed inset-0 z-40 bg-black bg-opacity-10 pointer-events-none invisible"></div>
		</>
	);
};

export default Overlay;