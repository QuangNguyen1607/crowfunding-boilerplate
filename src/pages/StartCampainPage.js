import Button from 'components/buton/Button';
import LayoutDashboard from 'layouts/LayoutDashboard';
import CampainAddNew from 'modules/campaign/CampainAddNew';
import React from 'react';

const StartCampainPage = () => {
	return <LayoutDashboard>
		<CampainAddNew></CampainAddNew>
	</LayoutDashboard>;
};

export default StartCampainPage;