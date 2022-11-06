import React, { Children } from 'react';
import classNames from 'utils/classNames';

const CampDescription = ({ children, className = "text-xs mb-4" }) => {
	return <p className={classNames("text-text3", className)}>{children}</p>;
};

export default CampDescription;