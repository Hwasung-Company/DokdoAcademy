import {ReactNode, useMemo, useState} from 'react'
import {Box, Tab} from '@mui/material'
import {jsx} from '@emotion/react'


interface TabPanelProps {
    children?: ReactNode;
    index: number;
    value: number;
}

export function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            { (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export function a11yProps(index: number) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}


function useTabs(tabs:ReactNode[]){
    const [activeTab, setActiveTab] = useState(0)
    const panels = useMemo(()=>{
        return tabs.map((tab, index)=>{
            return <TabPanel key={index} value={activeTab} index={index}>
                {tab}
            </TabPanel>
        })
    }, [tabs])


    return {activeTab, setActiveTab, panels}
}

export default useTabs;
