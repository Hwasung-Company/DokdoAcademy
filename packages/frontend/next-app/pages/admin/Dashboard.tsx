import {
    alpha,
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    Paper,
    Tab,
    Tabs,
    TextField,
    Theme,
    Typography,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import {
    ArrowDropDown,
    BusinessCenter,
    DateRange,
    ReceiptLong,
    Search,
    ViewList,
    Work,
} from '@mui/icons-material';
import SwipeableViews from 'react-swipeable-views';
import Header from 'next-app/src/components/Admin/Templates/Header';
import GridMain from '@dokdo-academy/component/dist/Layouts/GridMain';
import useTabs from 'next-app/src/hooks/tab/useTabs';
import UserCard from 'next-app/src/components/Cards/UserCard';
import ScheduleCard from 'next-app/src/components/Cards/ScheduleCard';
import LeftSearch from 'next-app/src/components/Admin/Templates/LeftSearch';
import { Contents } from 'next-app/src/components/Admin/Templates/Contents';
import TitleWithButton from 'next-app/src/components/atoms/admin/layout/TitleWithButton';
import TabWithBorder from 'next-app/src/components/atoms/admin/layout/TabWithBorder';
import dynamic from 'next/dynamic';
import { useMemo } from 'react';

const Schedules = dynamic(
    () =>
        import('next-app/src/components/Admin/dashboard/Schedules').then(
            (mod) => mod.Schedules,
        ),
    { ssr: false },
);

function Dashboard() {
    const tabs = useMemo(() => {
        return [
            <Schedules />,
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                {[0, 1, 2, 3, 4, 5, 6].map((v, i) => (
                    <UserCard key={i} />
                ))}
            </Box>,
        ];
    }, []);

    return (
        <GridMain>
            <Header />
            <LeftSearch />
            <Contents>
                <TitleWithButton
                    title={'2023년 전체 교육일정'}
                    button={<Button variant={'contained'}>일정 등록</Button>}
                />
                <TabWithBorder
                    tabs={tabs}
                    labels={['진행 예정', '진행 완료']}
                />
            </Contents>
        </GridMain>
    );
}

export default Dashboard;
