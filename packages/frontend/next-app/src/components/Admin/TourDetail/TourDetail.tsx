import { Box, Typography } from '@mui/material';
import FlexFull from '../../atoms/layout/FlexFull';
import AdminTemplate from '../Templates/AdminTemplate';
import { useRouter } from 'next/router';
import { getTourById } from 'next-app/src/api/tours/tours';
import { useEffect, useState } from 'react';
import ListTable from '../../atoms/layout/table/ListTable';
import CSVButton from '../../CSV/CSVButton';
import { Participant } from '@common/declation/participant';

export default function TourDetail() {
    const [tour, setTour] = useState<any>(null);
    const [participants, setParticipants] = useState<Participant[]>([]);

    const router = useRouter();
    const { id } = router.query;

    const { query, data, loading, error } = getTourById();

    useEffect(() => {
        id && query({ variables: { input: id } });
    }, [id]);

    useEffect(() => {
        data && console.log(data.tourById);
        data && setTour(data.tourById);
    }, [data]);

    return (
        <AdminTemplate>
            {loading && <Typography variant={'h6'}>Loading...</Typography>}
            {!loading && tour && (
                <FlexFull>
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
                            display: 'flex',
                            justifyContent: 'space-between',
                            gap: '1rem',
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        <FlexFull>
                            <Box>
                                <Typography variant={'h6'} fontWeight={700}>
                                    인원 정보
                                </Typography>
                                <CSVButton
                                    dataParser={(data) => {
                                        // console.log(data);

                                        // data.map((pData: string[]) => {
                                        //     console.log(
                                        //         new Date().getFullYear() -
                                        //             +pData[3].substring(0, 4) +
                                        //             1,
                                        //         pData[3].substring(0, 4),
                                        //     );
                                        // });

                                        setParticipants(
                                            data.map(
                                                (pData: string[]) =>
                                                    new Participant(pData),
                                            ),
                                        );

                                        console.log(
                                            data.map(
                                                (pData: string[]) =>
                                                    new Participant(pData),
                                            ),
                                        );
                                    }}
                                />
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
                                </Box>
                                {participants.map((participant, index) => (
                                    <Box key={index}>
                                        <Box>{index + 1}</Box>
                                        <Box>{participant.name}</Box>
                                        <Box>{participant.sexuality}</Box>
                                        <Box>{participant.phone}</Box>
                                        <Box>{participant.birth}</Box>
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
                </FlexFull>
            )}
        </AdminTemplate>
    );
}
