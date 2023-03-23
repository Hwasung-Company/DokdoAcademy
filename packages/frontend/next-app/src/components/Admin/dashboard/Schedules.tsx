import {
    RadioButtonChecked,
    RadioButtonUnchecked,
    Search,
} from '@mui/icons-material';
import { Box, Button, Checkbox, TextField, Typography } from '@mui/material';
import { alpha, styled } from '@mui/system';

export const Schedules = () => {
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
            </FilterContainer>
            <ScheduelContainer>
                <ScheduleColumn>
                    <ScheduleHeader>
                        <Box flex={1}>
                            <Checkbox size='medium' />
                        </Box>
                        <Box flex={3}>등록일</Box>
                        <Box flex={4}>이름</Box>
                        <Box flex={3}>예약 상태</Box>
                        <Box flex={2}>기간</Box>
                        <Box flex={2}>총원</Box>
                        <Box flex={2}>일정표</Box>
                        <Box flex={2}>담당자</Box>
                    </ScheduleHeader>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => (
                        <ScheduleRow key={i}>
                            <Box flex={1}>
                                <Checkbox size='medium' />
                            </Box>
                            <Box flex={3}>
                                {new Date().toLocaleDateString('ko-KR')}
                            </Box>
                            <Box flex={4}>2023년 독도아카데미 352기</Box>
                            <Box flex={3}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '0.5rem',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            gap: '0.5rem',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                width: '0.3rem',
                                                height: '0.3rem',
                                                borderRadius: '50%',
                                                backgroundColor: 'warning.main',
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: '0.1rem',
                                                    position: 'absolute',
                                                }}
                                            >
                                                버스
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Typography variant='caption'>
                                            예약 완료
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box flex={2}>2021-08-01 ~ 2021-08-03</Box>
                            <Box flex={2}>3</Box>
                            <Box flex={2}>일정표</Box>
                            <Box flex={2}>김민수</Box>
                        </ScheduleRow>
                    ))}
                </ScheduleColumn>
            </ScheduelContainer>
        </Box>
    );
};

const FilterContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    position: 'relative',
    height: '5rem',
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
