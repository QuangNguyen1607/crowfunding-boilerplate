import Button from "components/buton/Button";
import React from "react";
import DashboardAvatar from "./DashboardAvatar";
import DashboardFund from "./DashboardFund";
import DashboardSearch from "./DashboardSearch";

const DashboardTopbar = () => {
	return (
		<div className="flex items-center justify-between mb-8">
			<div className="flex items-center flex-1 gap-x-14">
				<img srcSet="/images/logo.png 2x" alt="Logo" />
				<div className="max-w-[458px] w-full">
					<DashboardSearch></DashboardSearch>
				</div>
			</div>
			<div className="flex items-center gap-x-10 flex-1 justify-end">
				<DashboardFund></DashboardFund>
				<Button type='submit' className="bg-secondary text-base font-semibold py-3 px-6">Start a campaign</Button>
				<DashboardAvatar></DashboardAvatar>
			</div>
		</div>
	);
};

export default DashboardTopbar;
