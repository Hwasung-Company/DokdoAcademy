import { Typography } from '@mui/material';
import FlexFull from '../../atoms/layout/FlexFull';
import GridContents from '../../atoms/layout/GridContents';
import GridFullWH from '../../atoms/layout/GridFullWH';
import GridHeader from '../../atoms/layout/GridHeader';
import Span2Box from '../../atoms/layout/Span2Box';
import TabWithBorder from '../../atoms/layout/TabWithBorder';
import { ReceiptList } from '../Table/ReceiptList';
import { TourListComponent, TourListDone } from '../Table/TourList';

const ToursComponent = () => {
    return (
        <Span2Box>
            <GridFullWH>
                <GridHeader>
                    <Typography
                        variant='h5'
                        fontWeight={'bold'}
                        color='primary'
                    >
                        정산목록
                    </Typography>
                </GridHeader>
                <GridContents>
                    <TabWithBorder
                        tabs={[<ReceiptList />, <TourListDone />]}
                        labels={['승인 대기', '승인 완료']}
                    />
                </GridContents>
            </GridFullWH>
        </Span2Box>
    );
};

export default ToursComponent;
