import React from 'react';

const DashboardFund = () => {
	return (
		<div className="wrap-dashboard-fund">
			<div className="flex items-center gap-x-2 cursor-pointer">
				<svg
					width="20"
					height="12"
					viewBox="0 0 20 12"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M16 2.293L11.707 6.586L7.707 2.586L0 10.293L1.414 11.707L7.707 5.414L11.707 9.414L17.414 3.707L19.707 6V0H13.707L16 2.293Z"
						fill="#A2A2A8"
					/>
				</svg>
				<span className="text-text2 font-semibold">Fundrising for</span>
				<svg
					width="12"
					height="8"
					viewBox="0 0 12 8"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path d="M1 1L6 6L11 1" stroke="#A2A2A8" strokeWidth="2" />
				</svg>
			</div>
		</div>
	);
};

export default DashboardFund;