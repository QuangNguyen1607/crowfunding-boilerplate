import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";

const Button = ({
	type = "button",
	children,
	className = "",
	isloading = false,
	...rest
}) => {
	const child = !!isloading ? (
		<div className="absolute w-8 h-8 rounded-full border-4 border-white  border-t-transparent border-b-transparent animate-spin"></div>
	) : (
		children
	);
	let defaultClassName =
		"flex items-center justify-center p-4 text-base font-semibold rounded-xl min-h-[56px]";
	switch (rest.kind) {
		case "primary":
			defaultClassName = defaultClassName + " bg-primary text-white";
			break;
		case "secondary":
			defaultClassName = defaultClassName + " bg-secondary text-white";
			break;
		case "ghost":
			defaultClassName =
				defaultClassName + " bg-secondary bg-opacity-20 text-secondary";
			break;
		default:
			break;
	}
	if (rest.href)
		return (
			<Link
				to={rest.href}
				className={classNames(defaultClassName, className)}>
				{children}
			</Link>
		);
	return (
		<button
			type={type}
			className={classNames(
				defaultClassName,
				className,
				!!isloading ? "pointer-events-none opacity-60" : ""
			)}>
			{child}
		</button>
	);
};
Button.propTypes = {
	// value: PropTypes.string
	type: PropTypes.string,
	children: PropTypes.node,
	className: PropTypes.string,
	isloading: PropTypes.bool,
	href: PropTypes.string,
	kind: PropTypes.oneOf(["primary", "secondary", "ghost"]),
};
export default Button;
