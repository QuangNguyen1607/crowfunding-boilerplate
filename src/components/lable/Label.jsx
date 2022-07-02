import React from 'react';
import PropTypes from "prop-types";

const Label = ({children, className, htmlFor}) => {
	return (
		<label htmlFor={htmlFor} className={`text-text2 font-medium text-sm inline-block cursor-pointer ${className}`}>{children}</label>
	);
};
Label.propTypes = {
	// value: PropTypes.string
	children: PropTypes.node,
	htmlFor: PropTypes.string,
	className: PropTypes.string,
};
export default Label;