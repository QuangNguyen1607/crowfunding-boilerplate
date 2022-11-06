import React from "react";
import { useDropdown } from "./dropdown-context";

const Option = props => {
	const { onClick } = props;
	const { setShow } = useDropdown();
	const handleClick = () => {
		onClick && onClick(); // Chổ này là kiểm tra nếu mà onClick có thì sẽ gọi onClick() ra ==> giồng như cách viết (onClick && onClick())
		setShow(false);
	};
	return (
		<div
			className="px-5 py-2 cursor-pointer flex items-center justify-between hover:bg-gray-100"
			onClick={handleClick}
		>
			{props.children}
		</div>
	);
};

export default Option;
