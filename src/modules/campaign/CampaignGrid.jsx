import React from 'react';
import classNames from 'utils/classNames';

const CampaignGrid = ({ children, className = '', type = 'default' }) => {
	if (type !== 'default') return <div className='flex flex-col gap-y-10'>
		{children}
	</div>
	return (
		<div className={classNames("grid lg:grid-cols-4 grid-cols-2 gap-30px",className)}>
			{children}
		</div>
	);
};

export default CampaignGrid;