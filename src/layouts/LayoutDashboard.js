import DashboardTopbar from "modules/dashboard/DashboardTopbar";
import DashboardSidebar from "modules/dashboard/DashboardSidebar";
import React from "react";
import Overlay from "components/common/Overlay";

const LayoutDashboard = ({ children }) => {
	return (
		<div className="p-10 bg-lite-background min-h-screen">
			<Overlay></Overlay>
			<DashboardTopbar></DashboardTopbar>
			<div className="flex">
				<DashboardSidebar></DashboardSidebar>
				<div className="w-full">{children}</div>
			</div>
		</div>
	);
};

export default LayoutDashboard;
