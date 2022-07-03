import React, { Children } from "react";
import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import classNames from "utils/classNames";

const Input = props => {
	const {
		control,
		name,
		type,
		error = "",
		placeholder,
		children,
		...rest
	} = props;
	const { field } = useController({
		control,
		name,
		defaultValue: "",
	});
	return (
		<div className="relative">
			<input
				type={type}
				id={name}
				className={classNames(
					"text-text1 w-full border border-strock-color rounded-10px text-sm font-medium h-[52px] px-6 placeholder:text-text4 dark:bg-transparent dark:text-white dark:focus:border-white transition-all dark:border-dark-stroke dark:placeholder:text-text2",
					error.length > 0 ? "border-error text-error" : "",
					children ? "pr-16" : ""
				)}
				{...field}
				{...rest}
				placeholder={error.length > 0 ? "" : placeholder}
			/>
			{error.length > 0 ? (
				<span
					className={classNames(
						"pointer-events-none text-xs lg:text-sm font-medium text-error absolute top-1/2 -translate-y-1/2 right-6",
						children ? "right-14" : ""
					)}>
					{error}
				</span>
			) : (
				""
			)}
			{children && (
				<div className="absolute right-6  top-1/2 -translate-y-1/2 inline-flex">
					{children}
				</div>
			)}
		</div>
	);
};
Input.propTypes = {
	// value: PropTypes.string
	control: PropTypes.any.isRequired,
	name: PropTypes.string,
	error: PropTypes.string,
	type: PropTypes.string,
};
export default withErrorBoundary(Input, {
	FallbackComponent: ErrorComponent,
});
