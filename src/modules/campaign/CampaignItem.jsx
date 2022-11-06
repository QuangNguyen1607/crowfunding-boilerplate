import React from "react";
import ImageRatio from "components/imageRatio/ImageRatio";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CampCategory from "./parts/CampCategory";
import CampMeta from "./parts/CampMeta";
import CampDescription from "./parts/CampDescription";
import CampTitle from "./parts/CampTitle";
import CampAuthor from "./parts/CampAuthor";
import CampImage from "./parts/CampImage";
const CampaignItemStyled = styled.div`
	box-shadow: 0px 2px 4px rgba(184, 184, 184, 0.03),
		0px 6px 12px rgba(184, 184, 184, 0.02),
		0px 12px 20px rgba(184, 184, 184, 0.03);
`;
const CampaignItem = () => {
	return (
		<CampaignItemStyled className="campaign-item flex flex-col rounded-[15px] bg-white overflow-hidden">
			<CampImage width={255} height={158}></CampImage>
			<div className="campagin-content flex flex-col p-20px flex-1">
				<CampCategory>Education</CampCategory>
				<CampTitle>The Watchman's Chairs</CampTitle>
				<CampDescription>
					Your home for indie and classic cinema has just been handed
					an...
				</CampDescription>
				<div className="grid grid-cols-2 gap-x-30px mb-20px">
					<CampMeta></CampMeta>
					<CampMeta></CampMeta>
				</div>
				<CampAuthor>Le Quang Nguyen</CampAuthor>
			</div>
		</CampaignItemStyled>
	);
};

export default CampaignItem;
