import React from 'react';
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from './ErrorComponent';
import PropTypes from "prop-types";
const Heading = ({ children, className = '', number = null }) => {
	return (
		<h2 className={`text-lg font-semibold text-text1 ${className} mb-5`}>
			{children}
			{number && <span className='text-secondary'>{` (${number})`}</span>}
		</h2>
	);
};
Heading.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string,
	number: PropTypes.number,
}
export default withErrorBoundary(Heading, {
	FallbackComponent: ErrorComponent,
});