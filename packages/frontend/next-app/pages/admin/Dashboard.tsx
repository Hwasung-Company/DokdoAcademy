import GridMain from '@dokdo-academy/component/dist/Layouts/GridMain';
import { Box, Button } from '@mui/material';
import { Contents } from 'next-app/src/components/Admin/Templates/Contents';
import Header from 'next-app/src/components/Admin/Templates/Header';
import LeftSearch from 'next-app/src/components/Admin/Templates/LeftSearch';
import TabWithBorder from 'next-app/src/components/atoms/layout/TabWithBorder';
import TitleWithButton from 'next-app/src/components/atoms/layout/TitleWithButton';
import UserCard from 'next-app/src/components/Cards/UserCard';
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
