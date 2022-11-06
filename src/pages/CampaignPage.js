import React from 'react';
import LayoutDashboard from "layouts/LayoutDashboard";
import Heading from 'components/common/Heading';
import CampaignGrid from 'modules/campaign/CampaignGrid';
import CampaignFeature from 'modules/campaign/CampaignFeature';
import IconPlus from 'components/icons/IconPlus';
import { Link } from 'react-router-dom';
import Button from 'components/buton/Button';

const CampaignPage = () => {
	return (
		<LayoutDashboard>
			<div className="mb-10 bg-white rounded-3xl flex items-center justify-between py-8 px-10">
				<div className="flex items-start gap-x-6">
					<div className="w-14 h-14 rounded-full flex items-center justify-center text-white bg-secondary bg-opacity-60 text-4xl cursor-pointer">
						<IconPlus></IconPlus>
					</div>
					<div className="content ml-6 flex-1">
						<h1 className="text-[22px] font-semibold mb-2">
							Create your Campaign
						</h1>
						<p className="text-sm mb-2 text-text3">
							Jump right into our editor and create your first
							Virtue campaign!
						</p>
						<Link to='/' className='text-sm text-primary hover:underline'>Nead any help? Learn more...</Link>
					</div>
				</div>
				<Button type='button' kind="ghost" className='px-4'>Your campaign</Button>
			</div>
			<Heading number={4}>Your campaign</Heading>
			<CampaignGrid type="1col">
				<CampaignFeature></CampaignFeature>
				<CampaignFeature></CampaignFeature>
				<CampaignFeature></CampaignFeature>
				<CampaignFeature></CampaignFeature>
				<Button kind='ghost' className='mx-auto px-14'>
					<span>See more+</span>
				</Button>
			</CampaignGrid>
		</LayoutDashboard>
	);
};

export default CampaignPage;