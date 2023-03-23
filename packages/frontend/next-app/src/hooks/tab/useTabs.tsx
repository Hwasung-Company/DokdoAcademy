import { ReactNode, useMemo, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import { jsx } from '@emotion/react';

interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role='tabpanel'
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            style={{
                width: '100%',
                height: '100%',
            }}
            hidden={value !== index}
            {...other}
        >
            {
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                >
                    {children}
                </Box>
            }
        </div>
    );
}

export function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

function useTabs(tabs: ReactNode[]) {
    const [activeTab, setActiveTab] = useState(0);
    const panels = tabs.map((tab, index) => {
        return (
            <TabPanel key={index} value={activeTab} index={index}>
                {tab}
            </TabPanel>
        );
    });

    const TabComponent = ({ labels }: { labels: string[] }) => {
        return (
            <Box
                sx={{
                    borderBottom: 1,
                    borderColor: 'divider',
                    mb: '1rem',
                }}
            >
                <Tabs
                    value={activeTab}
                    onChange={(event, index) => {
                        setActiveTab(index);
                    }}
                >
                    {labels.map((label, index) => {
                        return (
                            <Tab
                                key={index}
                                label={label}
                                {...a11yProps(index)}
                            />
                        );
                    })}
                </Tabs>
            </Box>
        );
    };

    return { activeTab, setActiveTab, panels, TabComponent };
}

export default useTabs;
