import { defaultImage } from 'constants/global';
import React from 'react';
import { Link } from 'react-router-dom';
import { withErrorBoundary } from "react-error-boundary";
import ErrorComponent from "components/common/ErrorComponent";
import PropTypes from "prop-types";
const CampAuthor = ({image = defaultImage, children}) => {
	return (
		<>
			<div className="flex items-center mt-auto gap-x-2">
				<div className="avatar w-[30px] h-[30px] rounded-full overflow-hidden">
					<img
						src={image}
						className="w-full h-full object-cover"
						alt=""
					/>
				</div>
				<span className="text-12px text-text3">by</span>
				<Link className="text-text2 text-12px font-semibold" to="/">
					{children}
				</Link>
			</div>
		</>
	);
};
CampAuthor.propTypes = {
	image: PropTypes.string,
	children: PropTypes.node,
};

export default withErrorBoundary(CampAuthor, {
	FallbackComponent: ErrorComponent
})