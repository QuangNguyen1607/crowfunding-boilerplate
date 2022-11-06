import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'utils/classNames';

const CampTitle = ({children, className='mb-1 font-semibold'}) => {
	return (
		<>
			<h2
				className={classNames(
					"transition-all text-text1 hover:text-primary",
					className
				)}>
				<Link to="/">{children}</Link>
			</h2>
		</>
	);
};

export default CampTitle;