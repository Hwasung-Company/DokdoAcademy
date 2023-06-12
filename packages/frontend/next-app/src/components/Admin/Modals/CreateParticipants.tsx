import { Participant } from '@common/declation/participant.js';
import { Box, Button, Grid, Typography } from '@mui/material';
import {
    createParticipantsMutation,
    deleteParticipantsMutation,
    useParticipants,
} from 'next-app/src/api/tours/participants';
import { useSnack } from 'next-app/src/context/SnackContext';
import { useEffect, useState } from 'react';
import CSVButton from '../../CSV/CSVButton';
import FlexFull from '../../atoms/layout/FlexFull';
import FlexRadius from '../../atoms/layout/FlexRadius';
import ListTable from '../../atoms/layout/table/ListTable';
import { participantCheck } from 'next-app/src/validator';

export default function CreateParticipantsModal({
    tourId,
}: {
    tourId: string;
}) {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const { createParticipants, loading, error } = createParticipantsMutation();
    const { deleteParticipants } = deleteParticipantsMutation();
    const { query, data } = useParticipants(tourId);
    const openSnack = useSnack();

    const handleCreateParticipants = () => {
        if (participants.length === 0) {
            openSnack('인원을 추가해주세요.', 'error');
            return;
        }
        createParticipants({
            variables: {
                input: {
                    tour_id: tourId,
                    participants,
                },
            },
        }).then(() => {
            openSnack('인원을 추가했습니다.', 'success');
        });
    };

    const handleDeleteParticipants = () => {
        deleteParticipants({
            variables: {
                tour_id: tourId,
            },
        }).then(() => {
            openSnack('인원을 삭제했습니다.', 'success');
        });
    };

    useEffect(() => {
        if (data) {
            setParticipants(data.getParticipants);
        }
    }, [data]);

    useEffect(() => {
        query({
            variables: {
                tour_id: tourId,
            },
        });
    }, []);

    return (
        <FlexRadius
            sx={{
                width: '60rem',
                height: '40rem',
                backgroundColor: 'background.paper',
                padding: '1rem',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
            }}
        >
            <Typography variant='h6' fontWeight={600}>
                인원 관리
            </Typography>
            <FlexFull
                sx={{
                    height: '3rem',
                    mt: '1rem',
                }}
            >
                <CSVButton
                    dataParser={(data) => {
                        const participants: Participant[] = data.map(
                            (p: string[]) => {
                                // participantCheck(p);
                                return new Participant(p);
                            },
                        );
                        console.log(participants);
                        setParticipants(participants);
                    }}
                />
            </FlexFull>
            <Box
                sx={{
                    width: '100%',
                    height: '5rem',
                    mt: '1rem',
                }}
            >
                <Grid
                    container
                    sx={{ width: '100%', height: '100%', gap: '0.5rem' }}
                >
                    <Grid item xs={2}>
                        <FlexRadius
                            sx={{
                                border: '1px solid #e0e0e0',
                            }}
                        >
                            <Typography variant='body1' fontWeight={600}>
                                총원: {participants.length}명
                            </Typography>
                        </FlexRadius>
                    </Grid>
                    <Grid item xs={2}>
                        <FlexRadius
                            sx={{
                                border: '1px solid #e0e0e0',
                            }}
                        >
                            <Typography variant='body1' fontWeight={600}>
                                남자:{' '}
                                {
                                    participants.filter((p) =>
                                        p.sexuality.includes('남'),
                                    ).length
                                }
                                명
                            </Typography>
                        </FlexRadius>
                    </Grid>
                    <Grid item xs={2}>
                        <FlexRadius
                            sx={{
                                border: '1px solid #e0e0e0',
                            }}
                        >
                            <Typography variant='body1' fontWeight={600}>
                                여자:{' '}
                                {
                                    participants.filter((p) =>
                                        p.sexuality.includes('여'),
                                    ).length
                                }
                                명
                            </Typography>
                        </FlexRadius>
                    </Grid>
                    <Grid item xs={2}>
                        <FlexRadius
                            sx={{
                                border: '1px solid #e0e0e0',
                            }}
                        >
                            <Typography variant='body1' fontWeight={600}>
                                예상 조 편성:{' '}
                                {participants.length === 0
                                    ? 0
                                    : Math.round(participants.length / 32)}
                                개
                            </Typography>
                        </FlexRadius>
                    </Grid>
                </Grid>
            </Box>
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
                        <Box>
                            {participant.contact.replace(
                                /(\d{3})(\d{3,4})(\d{4})/,
                                '$1-$2-$3',
                            )}
                        </Box>
                        <Box>
                            {new Date(participant.birth).toLocaleString(
                                'ko-KR',
                                {
                                    year: '2-digit',
                                    month: 'long',
                                    day: '2-digit',
                                },
                            )}
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
            <Box
                sx={{
                    mt: '1rem',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <Button
                    variant='contained'
                    color='error'
                    onClick={handleDeleteParticipants}
                >
                    삭제
                </Button>
                <Button variant='contained' onClick={handleCreateParticipants}>
                    생성
                </Button>
            </Box>
        </FlexRadius>
    );
}
