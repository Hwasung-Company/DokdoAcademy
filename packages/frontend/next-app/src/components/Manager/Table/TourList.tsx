import { Box, Divider, Typography } from '@mui/material';
import { RadiusBox } from '../../atoms/button/TableBtn';
import FlexFull from '../../atoms/layout/FlexFull';
import { SearchBar } from '../../atoms/layout/table/SearchBar';
import TourListTable from '../../atoms/layout/table/ListTable';

export const TourListComponent = () => {
    return (
        <FlexFull>
            <SearchBar />
            <TourListTable>
                <Box>
                    <Box>일정 이름</Box>
                    <Box>기간</Box>
                    <Box>참가 인원</Box>
                    <Box>담당 호차</Box>
                    <Box>단톡방생성</Box>
                    <Box>담당자</Box>
                    <Box>일정표</Box>
                </Box>
                <Box>
                    <Box>
                        <Typography variant='body2'>
                            2023년 352기 독도 아카데미
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>3월 29일</Typography>
                        <Typography variant='body2'>~ 3월 31일</Typography>
                    </Box>
                    <Box>123명</Box>
                    <Box>
                        <RadiusBox color='success'>1호차</RadiusBox>
                    </Box>
                    <Box>생성</Box>
                    <Box>
                        <Box>김철수</Box>
                    </Box>
                    <Box>
                        <RadiusBox color='primary'>확인</RadiusBox>
                    </Box>
                </Box>
                <Box className='canceled'>
                    <Box>
                        <Typography variant='body2'>
                            2023년 352기 독도 아카데미
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>3월 29일</Typography>
                        <Typography variant='body2'>~ 3월 31일</Typography>
                    </Box>
                    <Box className='canceled'>
                        <Box
                            sx={{
                                height: '1px',
                                flex: 1,
                                backgroundColor: 'error.main',
                            }}
                        />
                        <Typography
                            component='p'
                            variant='caption'
                            sx={{
                                margin: '0 1rem',
                            }}
                        >
                            기상 악화로 인한 취소
                        </Typography>
                        <Box
                            sx={{
                                height: '1px',
                                flex: 1,
                                backgroundColor: 'error.main',
                            }}
                        />
                    </Box>
                </Box>
            </TourListTable>
        </FlexFull>
    );
};

export const TourListDone = () => {
    return (
        <FlexFull>
            <SearchBar />
            <TourListTable>
                <Box>
                    <Box>일정 이름</Box>
                    <Box>기간</Box>
                    <Box>참가 인원</Box>
                    <Box>담당 호차</Box>
                    <Box>단톡방생성</Box>
                    <Box>담당자</Box>
                    <Box>일정표</Box>
                </Box>
                <Box>
                    <Box>
                        <Typography variant='body2'>
                            2023년 352기 독도 아카데미
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>3월 29일</Typography>
                        <Typography variant='body2'>~ 3월 31일</Typography>
                    </Box>
                    <Box>123명</Box>
                    <Box>
                        <RadiusBox color='success'>1호차</RadiusBox>
                    </Box>
                    <Box>생성</Box>
                    <Box>
                        <Box>김철수</Box>
                    </Box>
                    <Box>
                        <RadiusBox color='primary'>확인</RadiusBox>
                    </Box>
                </Box>
                <Box className='canceled'>
                    <Box>
                        <Typography variant='body2'>
                            2023년 352기 독도 아카데미
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>3월 29일</Typography>
                        <Typography variant='body2'>~ 3월 31일</Typography>
                    </Box>
                    <Box className='canceled'>
                        <Box
                            sx={{
                                height: '1px',
                                flex: 1,
                                backgroundColor: 'error.main',
                            }}
                        />
                        <Typography
                            variant='caption'
                            sx={{
                                margin: '0 1rem',
                            }}
                        >
                            기상 악화로 인한 취소
                        </Typography>
                        <Box
                            sx={{
                                height: '1px',
                                flex: 1,
                                backgroundColor: 'error.main',
                            }}
                        />
                    </Box>
                </Box>
            </TourListTable>
        </FlexFull>
    );
};
