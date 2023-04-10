import { Box, Button, TextField, Typography } from '@mui/material';
import { Section } from 'nest-app/sections/entities/sections.entity';
import { createTourMutation } from 'next-app/src/api/tours/tours';
import { useModal } from 'next-app/src/context/ModalContext';
import { useSnack } from 'next-app/src/context/SnackContext';
import { useMemo, useState } from 'react';
import FlexFull from '../../atoms/layout/FlexFull';
import MContainer from '../../atoms/modal/layout/MContainer';

export default function CreateTour({ section }: { section: Section }) {
    const [name, setName] = useState('');
    const [startDate, setStartDate] = useState(
        new Date().toISOString().split('T')[0],
    );
    const [endDate, setEndDate] = useState(
        new Date().toISOString().split('T')[0],
    );
    const [description, setDescription] = useState('');
    const [gatheringPlace, setGatheringPlace] = useState('');

    const { createTour, data, loading } = createTourMutation();

    const { closeModal } = useModal();
    const openSnack = useSnack();

    const error = useMemo(() => {
        if (!name) return '일정 이름을 입력해주세요.';
        if (!startDate) return '시작 날짜를 입력해주세요.';
        if (!endDate) return '종료 날짜를 입력해주세요.';

        if (new Date(startDate) > new Date(endDate))
            return '시작 날짜가 종료 날짜보다 늦습니다.';

        if (!gatheringPlace) return '집결지를 입력해주세요.';

        return '';
    }, [name, startDate, endDate, description, gatheringPlace]);

    const handleCreateTour = () => {
        if (error !== '') return;

        createTour({
            variables: {
                input: {
                    name,
                    startDate,
                    endDate,
                    description,
                    gatheringPlace,
                    section_id: (section as any)._id,
                },
            },
        }).then(() => {
            openSnack('일정이 생성되었습니다.', 'success');
            closeModal();
        });
    };

    return (
        <MContainer>
            <Box>
                <Typography variant={'h6'}>일정 생성</Typography>
            </Box>
            <FlexFull gap='1rem' mt='1rem' mb='1rem'>
                <TextField
                    name='tour_name'
                    label={'일정 이름'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    size='small'
                />
                <TextField
                    name='tour_startDate'
                    label={'시작 날짜'}
                    value={startDate}
                    type='date'
                    onChange={(e) => setStartDate(e.target.value)}
                    size='small'
                />
                <TextField
                    name='tour_endDate'
                    label={'종료 날짜'}
                    value={endDate}
                    type='date'
                    onChange={(e) => setEndDate(e.target.value)}
                    size='small'
                />
                <TextField
                    name='tour_gatheringPlace'
                    label={'집결지'}
                    value={gatheringPlace}
                    onChange={(e) => setGatheringPlace(e.target.value)}
                    size='small'
                />
                <TextField
                    name='tour_description'
                    label={'일정 설명'}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    size='small'
                />
            </FlexFull>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '1rem',
                }}
            >
                <Typography variant={'caption'} color={'error'}>
                    {error}
                </Typography>
                <Button variant={'contained'} onClick={handleCreateTour}>
                    일정 생성
                </Button>
            </Box>
        </MContainer>
    );
}
