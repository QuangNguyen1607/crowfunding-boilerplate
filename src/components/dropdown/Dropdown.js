import React, { useState } from "react";
import { DropdownProvider, useDropdown } from "./dropdown-context";

const Dropdown = ({ children, ...props }) => {
	return (
		<DropdownProvider {...props}>
			<div className="relative inline-block w-full">{children}</div>
		</DropdownProvider>
	);
};

export default Dropdown;
