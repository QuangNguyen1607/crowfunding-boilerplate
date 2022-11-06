import React from "react";
import { useDropdown } from "./dropdown-context";

const Select = ({ placeholder = "" }) => {
	const { toggle, show } = useDropdown();
	return (
		<div
			className="text-text1 flex items-center border-strock-color rounded-10px justify-between h-[52px] px-6 border placeholder:text-text4 bg-transparent text-sm font-medium cursor-pointer"
			onClick={toggle}
		>
			<span className="text-text4">{placeholder}</span>
			<span>
				{show ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M5 15l7-7 7 7"
						/>
					</svg>
				) : (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth="2"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				)}
			</span>
		</div>
	);
};

export default Select;
