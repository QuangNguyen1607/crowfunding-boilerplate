import React from "react";

const CampProcess = ({process, className}) => {
	return <div className={`bg-[#EFEFEF] rounded-[5px] w-full h-[5px] relative overflow-hidden ${className}`}>
		<span className="bg-primary absolute top-0 left-0 h-full" style={{
			width: `${process}%`,
		}}></span>
	</div>;
};

export default CampProcess;
