import { Box, Button, IconButton, Typography } from '@mui/material';
import GridMain from 'next-app/../../libs/frontend/components/dist/Layouts/GridMain';
import { useCallback, useEffect, useMemo, useState } from 'react';
import TabWithBorder from '../../atoms/layout/TabWithBorder';
import { Contents } from '../Templates/Contents';
import Header from '../Templates/Header';
import LeftSearch from '../Templates/LeftSearch';

import { KeyboardArrowDown } from '@mui/icons-material';
import { getSection } from 'next-app/src/api/sections/getSection';
import { useModal } from 'next-app/src/context/ModalContext';
import dynamic from 'next/dynamic';
import SectionsModal from '../Modals/SectionsModal';
import CreateTour from '../Modals/CreateTour';

const Schedules = dynamic(
    () => import('./Tours').then((mod) => mod.Schedules),
    { ssr: false },
);

export default function AdminDashboard() {
    const { data, loading, error } = getSection();
    const [section, setSection] = useState(data?.sections[0] || null);

    useEffect(() => {
        if (data && !loading) {
            setSection(data.sections[0]);
        }
    }, [data, loading]);

    const { setModal, openModal } = useModal();

    const handleOpenModal = () => {
        setModal(<SectionsModal setSection={setSection} />);
        openModal();
    };

    const handleOpenCreateModal = useCallback(() => {
        setModal(<CreateTour section={section} />);
        openModal();
    }, [section]);

    const tabs = useMemo(() => {
        return [
            <Schedules section={section} />,
            <Box sx={{ display: 'flex', flexDirection: 'column' }}></Box>,
        ];
    }, [section]);
    return (
        <GridMain>
            <Header />
            <LeftSearch />
            <Contents>
                <Box
                    display={'flex'}
                    gap={'1rem'}
                    flexDirection={'column'}
                    alignItems={'start'}
                    justifyContent={'space-between'}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '1rem',
                            width: '100%',
                        }}
                    >
                        <Typography variant={'h5'} fontWeight={600}>
                            {(section && section.name) || '섹션을 선택해주세요'}
                        </Typography>
                        <IconButton
                            onClick={handleOpenModal}
                            sx={{
                                flexGrow: 0,
                            }}
                        >
                            <KeyboardArrowDown />
                        </IconButton>
                        {section && (
                            <Button
                                variant='contained'
                                size='small'
                                sx={{
                                    alignSelf: 'center',
                                }}
                                onClick={handleOpenCreateModal}
                            >
                                <Typography variant={'body2'}>
                                    일정 추가
                                </Typography>
                            </Button>
                        )}
                    </Box>
                </Box>
                <TabWithBorder
                    tabs={tabs}
                    labels={['진행 예정', '진행 완료']}
                />
            </Contents>
        </GridMain>
    );
}
