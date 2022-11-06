import IconPlay from 'components/icons/IconPlay';
import ImageRatio from 'components/imageRatio/ImageRatio';
import { defaultImage } from 'constants/global';
import React from 'react';
import CampCategory from './parts/CampCategory';
import CampDescription from './parts/CampDescription';
import CampMeta from './parts/CampMeta';
import CampProcess from './parts/CampProcess';
import CampTitle from './parts/CampTitle';

const CampaignFeature = () => {
	return (
		<div className="grid grid-cols-2 gap-x-30px mb-10">
			<div className="campaign-video-img relative h-[266px]">
				<div className="img rounded-[25px] overflow-hidden h-full">
					<img
						src={defaultImage}
						alt=""
						className="w-full h-full object-cover"
					/>
				</div>
				<div className="button-play w-[83px] h-[83px] rounded-full backdrop-blur-xl absolute top-1/2 left-1/2 flex items-center justify-center -translate-x-1/2 -translate-y-1/2 cursor-pointer">
					<IconPlay></IconPlay>
				</div>
			</div>
			<div className="campaign-video-content max-w-[435px]">
				<CampCategory className='text-sm mb-4'>Architecture</CampCategory>
				<CampTitle className="text-20px font-bold mb-4">
					Remake - We Make Architecture exhibition
				</CampTitle>
				<CampDescription className="text-sm mb-5">
					Remake - We Make: an exhibition about architecture's social
					agency in the face of urbanisation
				</CampDescription>
				<CampProcess process={20}></CampProcess>
				<div className="flex justify-between mt-5 gap-x-3">
					<CampMeta
						size="Big"
						amount="$2,000"
						text="Raised of $2,500"></CampMeta>
					<CampMeta
						size="Big"
						amount="173"
						text="Total backers"></CampMeta>
					<CampMeta
						size="Big"
						amount="30"
						text="Days left"></CampMeta>
				</div>
			</div>
		</div>
	);
};

export default CampaignFeature;