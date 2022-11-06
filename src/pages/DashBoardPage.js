import Heading from 'components/common/Heading';
import LayoutDashboard from 'layouts/LayoutDashboard';
import React from 'react';
import CampaignGrid from 'modules/campaign/CampaignGrid';
import CampaignItem from 'modules/campaign/CampaignItem';
import { v4 } from 'uuid';
import CampaignFeature from 'modules/campaign/CampaignFeature';

const DashBoardPage = () => {
	return <LayoutDashboard>
		<Heading number={4}>Your campaign</Heading>
		<CampaignFeature></CampaignFeature>
		<Heading>Popuplar Campaign</Heading>
		<CampaignGrid className='mb-10'>
			{Array(4).fill(null).map(item => (
				<CampaignItem key={v4()} data={item}></CampaignItem>
			))}
		</CampaignGrid>
		<Heading>Recent Campaign</Heading>
		<CampaignGrid>
			{Array(4).fill(null).map(item => (
				<CampaignItem key={v4()} data={item}></CampaignItem>
			))}
		</CampaignGrid>
	</LayoutDashboard>;
};
export default DashBoardPage;

