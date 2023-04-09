import { Box, Grid, Typography, alpha } from '@mui/material';
import FlexFull from '../../atoms/layout/FlexFull';
import AdminTemplate from '../Templates/AdminTemplate';
import { useRouter } from 'next/router';
import { getTourById } from 'next-app/src/api/tours/tours';
import { useEffect, useState } from 'react';
import ListTable from '../../atoms/layout/table/ListTable';
import CSVButton from '../../CSV/CSVButton';
import { Participant } from '@common/declation/participant';
import FlexRadius from '../../atoms/layout/FlexRadius';
import { DirectionsBus, Hotel, People, Restaurant } from '@mui/icons-material';
import { useModal } from 'next-app/src/context/ModalContext';
import CreateParticipantsModal from '../Modals/CreateParticipants';
import { useParticipants } from 'next-app/src/api/tours/participants';

export default function TourDetail() {
    const [tour, setTour] = useState<any>(null);
    const [participants, setParticipants] = useState<Participant[]>([]);

    const { setModal, openModal } = useModal();
    const router = useRouter();
    const { id } = router.query;

    const { query, data, loading, error } = getTourById();

    const { query: queryParticipants, data: participantsData } =
        useParticipants(id as string);

    const handleOpenCreateParticipantsModal = () => {
        setModal(<CreateParticipantsModal tourId={id as string} />);
        openModal();
    };

    useEffect(() => {
        id && query({ variables: { input: id } });
        id && queryParticipants({ variables: { tour_id: id as string } });
    }, [id]);

    useEffect(() => {
        data && setTour(data.tourById);
    }, [data]);

    useEffect(() => {
        if (participantsData) {
            setParticipants(participantsData.getParticipants);
        }
    }, [participantsData]);

    return (
        <AdminTemplate>
            {loading && <Typography variant={'h6'}>Loading...</Typography>}
            {!loading && tour && (
                <Box sx={{}}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >
                        <Typography variant={'h6'} fontWeight={700}>
                            {tour.name}
                        </Typography>
                        <Typography variant='caption'>
                            {new Date(tour.startDate).toLocaleString('ko-KR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}{' '}
                            ~{' '}
                            {new Date(tour.endDate).toLocaleString('ko-KR', {
                                month: 'long',
                                day: 'numeric',
                            })}{' '}
                            (
                            {new Date(tour.endDate).getDay() -
                                new Date(tour.startDate).getDay()}
                            박
                            {new Date(tour.endDate).getDay() -
                                new Date(tour.startDate).getDay() +
                                1}
                            일) / {tour.section.sponsor}
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            mb: '1rem',
                            mt: '1rem',
                        }}
                    >
                        <Typography variant={'h6'} fontWeight={700}>
                            일정 세부 정보
                        </Typography>
                    </Box>
                    <FlexFull
                        sx={{
                            height: '20rem',
                        }}
                    >
                        <FlexFull
                            sx={{
                                flexDirection: 'row',
                                gap: '1rem',
                                height: '20rem',
                            }}
                        >
                            <FlexFull sx={{ height: '20rem', gap: '1rem' }}>
                                <ListTable
                                    className='index'
                                    sx={{
                                        maxHeight: '20rem',
                                        mt: '0rem',
                                    }}
                                >
                                    <Box>
                                        <Box>#</Box>
                                        <Box>카테고리</Box>
                                        <Box>이름</Box>
                                        <Box>대상</Box>
                                        <Box>세부정보</Box>
                                        <Box className='bg' />
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                    <Box>
                                        <Box>1</Box>
                                        <Box>숙박</Box>
                                        <Box>우듬지 호텔</Box>
                                        <Box>1호차</Box>
                                        <Box>1호차</Box>
                                    </Box>
                                </ListTable>
                            </FlexFull>
                            <Grid container spacing={2}>
                                <Grid item xs={6} height={'50%'}>
                                    <FlexRadius
                                        className='mouse_hover'
                                        sx={(theme) => ({
                                            backgroundColor: alpha(
                                                theme.palette.primary.main,
                                                0.1,
                                            ),
                                        })}
                                    >
                                        <Hotel
                                            sx={{
                                                fontSize: '4rem',
                                            }}
                                        />
                                        <Typography variant='h6'>
                                            숙박 관리
                                        </Typography>
                                    </FlexRadius>
                                </Grid>
                                <Grid item xs={6} height={'50%'}>
                                    <FlexRadius
                                        className='mouse_hover'
                                        sx={(theme) => ({
                                            backgroundColor: alpha(
                                                theme.palette.primary.main,
                                                0.1,
                                            ),
                                        })}
                                    >
                                        <DirectionsBus
                                            sx={{
                                                fontSize: '4rem',
                                            }}
                                        />
                                        <Typography variant='h6'>
                                            버스 관리
                                        </Typography>
                                    </FlexRadius>
                                </Grid>
                                <Grid item xs={6} height={'50%'}>
                                    <FlexRadius
                                        className='mouse_hover'
                                        sx={(theme) => ({
                                            backgroundColor: alpha(
                                                theme.palette.primary.main,
                                                0.1,
                                            ),
                                        })}
                                    >
                                        <Restaurant
                                            sx={{
                                                fontSize: '4rem',
                                            }}
                                        />
                                        <Typography variant='h6'>
                                            식단 관리
                                        </Typography>
                                    </FlexRadius>
                                </Grid>
                                <Grid item xs={6} height={'50%'}>
                                    <FlexRadius
                                        className='mouse_hover'
                                        sx={(theme) => ({
                                            backgroundColor: alpha(
                                                theme.palette.primary.main,
                                                0.1,
                                            ),
                                        })}
                                        onClick={
                                            handleOpenCreateParticipantsModal
                                        }
                                    >
                                        <People
                                            sx={{
                                                fontSize: '4rem',
                                            }}
                                        />
                                        <Typography variant='h6'>
                                            인원 관리
                                        </Typography>
                                    </FlexRadius>
                                </Grid>
                            </Grid>
                        </FlexFull>
                    </FlexFull>
                    <Box
                        sx={{
                            mb: '1rem',
                            mt: '1rem',
                        }}
                    >
                        <Typography variant={'h6'} fontWeight={700}>
                            인원 세부 정보
                        </Typography>
                        <CSVButton
                            dataParser={(data) => {
                                setParticipants(
                                    data.map(
                                        (pData: string[]) =>
                                            new Participant(pData),
                                    ),
                                );
                            }}
                        />
                    </Box>
                    <FlexFull
                        sx={{
                            height: '30rem',
                        }}
                    >
                        <ListTable className='index'>
                            <Box>
                                <Box>#</Box>
                                <Box>이름</Box>
                                <Box>성별</Box>
                                <Box>연락처</Box>
                                <Box>생년월일</Box>
                                <Box>나이</Box>
                                <Box>
                                    기관정보
                                    <Typography variant={'caption'}>
                                        (광역 / 기초 )
                                    </Typography>
                                </Box>
                                <Box>직급</Box>
                                <div className='bg' />
                            </Box>
                            {participants.map((participant, index) => (
                                <Box key={index}>
                                    <Box>{index + 1}</Box>
                                    <Box>{participant.name}</Box>
                                    <Box>{participant.sexuality}</Box>
                                    <Box>{participant.contact}</Box>
                                    <Box>
                                        {new Date(
                                            participant.birth,
                                        ).toLocaleString('ko-KR', {
                                            year: '2-digit',
                                            month: 'long',
                                            day: '2-digit',
                                        })}
                                    </Box>
                                    <Box>{participant.age}</Box>
                                    <Box>
                                        <Typography variant='body2'>
                                            {participant.department}
                                        </Typography>
                                        <Typography variant={'caption'}>
                                            ({participant.companyGroup} /
                                            {participant.company})
                                        </Typography>
                                    </Box>
                                    <Box>{participant.position}</Box>
                                </Box>
                            ))}
                        </ListTable>
                    </FlexFull>
                </Box>
            )}
        </AdminTemplate>
    );
}
