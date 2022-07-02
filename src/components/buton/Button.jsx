import React from 'react';
import PropTypes from "prop-types";

const Button = ({ type, children, className = '', isloading = false }) => {
	const child = !!isloading ? (<div className="absolute w-8 h-8 rounded-full border-4 border-white  border-t-transparent border-b-transparent animate-spin"></div>) : children
	return (
		<button type={type} className={`py-4 text-base font-semibold text-white rounded-10px flex items-center justify-center ${className} relative h-[52px] ${isloading ? 'pointer-events-none opacity-60' : ''}`}>
			{child}
		</button>
	);
};
Button.propTypes = {
	// value: PropTypes.string
	type: PropTypes.string.isRequired,
	children: PropTypes.node,
	className: PropTypes.string,
	isloading: PropTypes.bool
};
export default Button;