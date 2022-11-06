import IconFolder from "components/icons/IconFolder";
import React from "react";
import PropTypes, { node } from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import { Link } from "react-router-dom";
import classNames from "utils/classNames";
const CampCategory = ({
	children,
	className = "mb-4 text-12px font-medium",
}) => {
	return (
		<>
			<Link
				to="/"
				className={classNames("flex items-center gap-x-2", className)}>
				<IconFolder></IconFolder>
				<span className={classNames("text-text3 leading-none pt-1")}>
					{children}
				</span>
			</Link>
		</>
	);
};
CampCategory.propTypes = {
	children: PropTypes.node,
};
export default withErrorBoundary(CampCategory, {
	fallbackComponent: ErrorComponent,
});
