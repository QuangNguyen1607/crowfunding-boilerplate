import ImageRatio from "components/imageRatio/ImageRatio";
import { defaultImage } from "constants/global";
import React from "react";

const CampImage = ({image = defaultImage, width=0, height=0}) => {
	return (
		<ImageRatio
			className="campagin-img rounded-[15px] overflow-hidden"
			width={width}
			height={height}
			url={image}></ImageRatio>
	);
};

export default CampImage;
