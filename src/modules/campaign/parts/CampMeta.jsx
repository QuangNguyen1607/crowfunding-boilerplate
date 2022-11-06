import React from "react";
import classNames from "utils/classNames";
import PropTypes from "prop-types";
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";

const CampMeta = ({
	amount = "$2,000",
	text = "Raised of $1,900",
	size = "small",
}) => {
	return (
		<>
			<div className="flex-col flex gap-y-1">
				<p
					className={classNames(
						"font-semibold text-text2",
						size === "small" ? "text-sm" : "text-xl"
					)}>
					<strong>{amount}</strong>
				</p>
				<p
					className={classNames(
						"text-text4 text-xs",
						size === "small" ? "text=xs" : "text-base"
					)}>
					{text}
				</p>
			</div>
		</>
	);
};
CampMeta.propTypes = {
	amount: PropTypes.string,
	text: PropTypes.string,
	size: PropTypes.string,
};
export default withErrorBoundary(CampMeta, {
	FallbackComponent: ErrorComponent,
});