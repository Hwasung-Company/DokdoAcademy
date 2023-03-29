import { Box, Typography } from '@mui/material';
import { RadiusBox } from '../../atoms/button/TableBtn';
import FlexFull from '../../atoms/layout/FlexFull';
import ListTable from '../../atoms/layout/table/ListTable';
import { SearchBar } from '../../atoms/layout/table/SearchBar';

export const ReceiptList = () => {
    return (
        <FlexFull>
            <SearchBar />
            <ListTable>
                <Box>
                    <Box>일정 이름</Box>
                    <Box>일자</Box>
                    <Box>장소</Box>
                    <Box>호차</Box>
                    <Box>결제인원</Box>
                    <Box>단가</Box>
                    <Box>결제금액</Box>
                    <Box>영수증</Box>
                    <Box>승인</Box>
                </Box>
                <Box>
                    <Box>
                        <Typography variant='body2'>
                            2023년 352기 독도 아카데미
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>1일차</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>서울</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>1호차</Typography>
                        <Typography variant='caption'>
                            (결제위임 - ㅇㅅㅇ)
                        </Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>10명</Typography>
                        <Typography variant='caption'>(32명 - 22명)</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>12,000원</Typography>
                        <Typography variant='caption'>오삼불고기</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>120,000,123원</Typography>
                    </Box>
                    <Box>
                        <RadiusBox color='primary'>확인</RadiusBox>
                    </Box>
                    <Box>
                        <RadiusBox color='primary'>승인</RadiusBox>
                    </Box>
                </Box>
            </ListTable>
        </FlexFull>
    );
};
