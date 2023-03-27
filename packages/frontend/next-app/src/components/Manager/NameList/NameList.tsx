import { Box, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Contents from '../Layout/Contents';

const nameList = new Array(30).fill({
    name: '김철수',
    company: '대구광역시 소방본부',
    sex: '남',
    contact: '010-1234-5678',
    hotelReservation: {
        hotelName: '이사부호텔',
        room: '101호',
    },
});

export default function NameList() {
    return (
        <Contents
            sx={{
                margin: '1rem 0',
            }}
        >
            <Box
                component={Paper}
                sx={{
                    border: '1px solid primary.main',
                    overflowY: 'scroll',
                    scrollBehavior: 'smooth',
                    height: 'calc(100vh - 2rem)',
                }}
            >
                <Box
                    component={Paper}
                    sx={(theme) => ({
                        height: '3rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',

                        boxShadow: 'none',
                        borderTop: `1px solid ${theme.palette.divider}`,
                    })}
                >
                    <Box
                        display='flex'
                        sx={{
                            backgroundColor: 'primary.main',
                            height: '100%',
                            width: '8rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'white',
                        }}
                    >
                        <Typography variant='h6'>1호차</Typography>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                        }}
                    >
                        <Typography variant='body1'>호차리스트</Typography>
                    </Box>
                    <Box
                        sx={{
                            marginRight: '1rem',
                            color: 'primary.main',
                        }}
                    >
                        <Typography
                            variant='body2'
                            fontWeight={700}
                        ></Typography>
                    </Box>
                </Box>
                <NameListHeader
                    sx={{
                        position: 'sticky',
                        top: '0',
                        zIndex: 1,
                    }}
                >
                    <Box>
                        <Typography fontWeight={700} variant='body1'>
                            #
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontWeight={700} variant='body1'>
                            인적사항
                        </Typography>
                    </Box>
                    <Box>
                        <Typography fontWeight={700} variant='body1'>
                            숙소명
                        </Typography>
                    </Box>
                </NameListHeader>
                <NameListItems nameList={nameList} />
            </Box>
        </Contents>
    );
}

const NameListHeader = styled(Box)(({ theme }) => ({
    height: '3rem',
    display: 'grid',
    alignItems: 'center',
    gap: '1rem',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    gridTemplateColumns: '2rem 3fr 1fr',
    '& > *': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    '& > *:nth-child(2)': {
        justifyContent: 'flex-start',
        paddingLeft: '1rem',
    },
}));

const NameListItem = styled(NameListHeader)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.primary,
    '& > *:nth-child(2)': {
        justifyContent: 'flex-start',
        paddingLeft: '1rem',
    },
}));

type NameListItem = {
    name: string;
    company: string;
    sex: string;
    contact: string;
    hotelReservation: {
        hotelName: string;
        room: string;
    };
};

type NameListItemsProps = {
    nameList: NameListItem[];
};

const NameListItems = ({ nameList }: NameListItemsProps) => {
    return (
        <Box>
            {nameList.map((name, index) => (
                <NameListItem key={index}>
                    <Box>
                        <Typography variant='caption'>{index + 1}</Typography>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            gap: '1rem',
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                width: '9rem',
                            }}
                        >
                            <Typography variant='caption'>
                                {name.company}
                            </Typography>
                            <Typography variant='body1'>{name.name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant='body1'>{name.sex}</Typography>
                        </Box>
                        <Box
                            sx={{
                                flexGrow: 1,
                            }}
                        >
                            <Typography variant='body2'>
                                {name.contact}
                            </Typography>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-around',
                                alignItems: 'flex-end',
                            }}
                        >
                            <Typography variant='caption'>
                                {name.hotelReservation.hotelName}
                            </Typography>
                            <Typography variant='body1'>
                                {name.hotelReservation.room}
                            </Typography>
                        </Box>
                    </Box>
                </NameListItem>
            ))}
        </Box>
    );
};
