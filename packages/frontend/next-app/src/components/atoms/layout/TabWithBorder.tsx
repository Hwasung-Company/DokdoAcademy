import { Fragment, ReactNode, useState } from 'react';
import useTabs from 'next-app/src/hooks/tab/useTabs';
import { Box } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import FlexFull from './FlexFull';

type TabWithBorderProps = {
    tabs: ReactNode[];
    labels: string[];
};

export default function TabWithBorder({ tabs, labels }: TabWithBorderProps) {
    const { activeTab, setActiveTab, panels, TabComponent } = useTabs(tabs);

    return (
        <FlexFull>
            <TabComponent labels={labels} />
            {panels}
        </FlexFull>
    );
}
