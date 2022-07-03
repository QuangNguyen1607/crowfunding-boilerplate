import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import React from "react";

const LayoutDashboard = ({ children }) => {
	return (
		<div className="p-10 bg-lite-background">
			<DashboardTopbar></DashboardTopbar>
			<div className="flex">
				<DashboardSidebar></DashboardSidebar>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default LayoutDashboard;
