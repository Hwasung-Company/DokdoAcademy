import {
    RadioButtonChecked,
    RadioButtonUnchecked,
    Search,
} from '@mui/icons-material';
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { alpha, styled } from '@mui/system';

import {
    deleteTourMutation,
    getToursBySection,
} from 'next-app/src/api/tours/tours';
import { useSnack } from 'next-app/src/context/SnackContext';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ListTable from '../../atoms/layout/table/ListTable';

type SchedulesProps = {
    section?: any;
};

export const Schedules = ({ section }: SchedulesProps) => {
    const [tours, setTours] = useState<any[]>([]);
    const [checkTours, setCheckTours] = useState<any[]>([]);

    const { data, loading, error, query } = getToursBySection();

    const { deleteTour } = deleteTourMutation();

    const router = useRouter();

    const snackOpen = useSnack();

    const handleDeleteTour = () => {
        deleteTour({ variables: { input: { _id: checkTours } } }).then(() => {
            snackOpen('일정이 삭제되었습니다.', 'success');
            setCheckTours([]);
        });
    };

    useEffect(() => {
        console.log(checkTours);
    }, [checkTours]);

    useEffect(() => {
        section &&
            query({
                variables: {
                    input: (section as any)._id,
                },
            });
    }, [section]);

    useEffect(() => {
        if (data) {
            console.log(data);
            setTours(data.toursBySection);
        }
    }, [data]);

    const handleAllCheck = (e: any) => {
        if (e.target.checked) {
            setCheckTours(tours.map((tour) => tour._id));
        } else {
            setCheckTours([]);
        }
    };

    return (
        <Box>
            <FilterContainer>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        gap: '0.5rem',
                    }}
                >
                    <Button variant={'contained'}>예약 상태</Button>
                    <Button variant={'outlined'}>일정표</Button>
                    <Button variant='text'>필터 초기화</Button>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '0.5rem',
                        }}
                    >
                        <Button
                            variant={'text'}
                            startIcon={<RadioButtonChecked />}
                        >
                            전체
                        </Button>
                        <Button
                            variant={'text'}
                            startIcon={<RadioButtonUnchecked />}
                        >
                            예약 완료
                        </Button>
                        <Button
                            variant={'text'}
                            startIcon={<RadioButtonUnchecked />}
                        >
                            예약 진행중
                        </Button>
                    </Box>
                    <Box>
                        <TextField
                            size={'small'}
                            color={'primary'}
                            InputProps={{
                                startAdornment: <Search />,
                            }}
                            placeholder={'검색어를 입력해주세요.'}
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        gap: '0.5rem',
                        width: '100%',
                        justifyContent: 'flex-end',
                    }}
                >
                    {/* <Button variant={'contained'}>일정표 다운로드</Button> */}
                    <Button
                        variant='contained'
                        color='error'
                        size='small'
                        disabled={checkTours.length === 0}
                        onClick={handleDeleteTour}
                    >
                        삭제
                    </Button>
                </Box>
            </FilterContainer>
            <ListTable>
                <Box>
                    <Checkbox onChange={handleAllCheck} disabled />
                    <Box>
                        이름
                        <Typography variant={'caption'}>(등록일)</Typography>
                    </Box>

                    <Box>예약상태</Box>
                    <Box>기간</Box>
                    <Box>총원</Box>
                    <Box>일정표</Box>
                    <Box>담당자</Box>
                </Box>
                {tours &&
                    tours.map((v, i) => (
                        <Box key={i}>
                            <Checkbox
                                checked={
                                    checkTours.includes(v._id) ? true : false
                                }
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setCheckTours([...checkTours, v._id]);
                                    } else {
                                        setCheckTours(
                                            checkTours.filter(
                                                (v2) => v2 !== v._id,
                                            ),
                                        );
                                    }
                                }}
                            />
                            <Box>
                                <Button
                                    onClick={() =>
                                        router.push(
                                            router.pathname + `/tours/${v._id}`,
                                        )
                                    }
                                >
                                    {v.name}
                                </Button>
                                <Typography variant={'caption'}>
                                    (
                                    {new Date(v.createdAt).toLocaleString(
                                        'ko-KR',
                                    )}
                                    )
                                </Typography>
                            </Box>
                            <Box>예약</Box>
                            <Box>
                                <Typography variant='body2'>
                                    {new Date(v.startDate).toLocaleString(
                                        'ko-KR',
                                        {
                                            month: 'long',
                                            day: '2-digit',
                                        },
                                    )}
                                    ~
                                    {new Date(v.endDate).toLocaleString(
                                        'ko-KR',
                                        {
                                            month: 'long',
                                            day: '2-digit',
                                        },
                                    )}
                                </Typography>
                            </Box>
                            <Box>총원</Box>
                            <Box>일정표</Box>
                            <Box>담당자</Box>
                        </Box>
                    ))}
                {tours && tours.length === 0 && (
                    <Box className='center'>
                        <Typography variant={'body2'}>
                            등록 일정이 없습니다.
                        </Typography>
                    </Box>
                )}
                {
                    // 공백
                    Array.from({ length: tours ? 10 - tours.length : 9 }).map(
                        (v, i) => (
                            <Box key={i} className='center' />
                        ),
                    )
                }
            </ListTable>
        </Box>
    );
};

const FilterContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    // height: '5rem',
    margin: '1rem 0',
    gap: '0.5rem',
});

const ScheduelContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    height: '42rem',
    marginTop: '1rem',
    borderRadius: '1rem',
    border: '1px solid #e0e0e0',
    overflow: 'auto',
});

const ScheduleColumn = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
});

const ScheduleRow = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    gap: '0.5rem',
    height: '3rem',
    alignItems: 'center',
    '& > *': {
        textAlign: 'center',
    },
    borderBottom: '1px solid #e0e0e0',
});

const ScheduleHeader = styled(ScheduleRow)(({ theme }) => ({
    backgroundColor: alpha(theme.palette.primary.main, 0.1),
    justifyContent: 'space-around',
}));
