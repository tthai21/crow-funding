import React from 'react';
import LayoutDashBoard from '../layout/LayoutDashBoard';
import CampaignAddNew from '../modules/campaign/CampaignAddNew';

const StartCampaignPage = () => {
    return (
        <LayoutDashBoard>
            <CampaignAddNew></CampaignAddNew>
        </LayoutDashBoard>
    );
};

export default StartCampaignPage;