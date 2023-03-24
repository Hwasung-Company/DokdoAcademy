import {
    AccessTime,
    ConfirmationNumber,
    DirectionsBoat,
    DirectionsBus,
    KeyboardArrowRight,
    LocalHotel,
    LocationOn,
    Person,
    Restaurant,
} from '@mui/icons-material';
import { alpha, Box, Paper, Typography } from '@mui/material';
import ScheduleItem from 'next-app/src/components/Manager/Schedule/ScheduleItem';
import ScheduleTitle from 'next-app/src/components/Manager/Schedule/ScheduleTitle';
import dynamic from 'next/dynamic';
import { useCallback, useRef } from 'react';
const LeftNav = dynamic(
    () => import('next-app/src/components/Manager/Layout/LeftNav'),
    { ssr: true },
);

export default function ManagerHome() {
    const ref = useRef<HTMLDivElement>(null);
    const scrollToTarget = useCallback(
        (scroll: number) => {
            if (ref.current) {
                ref.current.scrollTop = scroll;
            }
        },
        [ref],
    );
    return (
        <Box
            sx={{
                width: '100vw',
                minWidth: '1100px',
                height: '100vh',
                backgroundColor: 'background.default',
                display: 'grid',
                gridTemplateColumns: '5rem 1fr 1fr',
                gap: '1rem',
            }}
        >
            <LeftNav />
            <Box
                ref={ref}
                component={Paper}
                sx={{
                    gridColumn: '2/3',
                    margin: '1rem 0',
                    border: '1px solid primary.main',
                    overflowY: 'scroll',
                    scrollBehavior: 'smooth',
                }}
            >
                {ref.current !== null && (
                    <>
                        <ScheduleTitle
                            count={0}
                            title='0일차'
                            subtitle1='2023년 3월 28일 화요일'
                            subtitle2='포항(영일만) - 울릉도'
                            onClick={scrollToTarget}
                        />

                        <ScheduleItem
                            title='아카데미 운영팀 미팅'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: "울릉크루즈 매표소 '독도아카데미' 접수대",
                                },
                                {
                                    icon: <Person />,
                                    text: '김정달 010-9337-1792',
                                },
                                {
                                    icon: <KeyboardArrowRight />,
                                    text: '물품배부 : 명찰 / 승선권 / 안내사항',
                                },
                                {
                                    icon: <KeyboardArrowRight />,
                                    text: '집결안내',
                                    description: [
                                        '1호차 ~ 3호차 미팅시간 21:30 ~ 22:00',
                                    ],
                                    info: [
                                        '미팅은 현장 사정에 의해 다소 변경 될 수 있습니다.',
                                        '포항신영일만 여객선터미널 주차료는 무료입니다.',
                                        '미팅 시간보다 미리 오신 분들은 대합실에 대기 부탁드립니다.',
                                    ],
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='포항 - 울릉도'
                            dot='end'
                            contents={{
                                icon: <DirectionsBoat />,
                                startTime: '3월 28일 23:50분',
                                endTime: '3월 29일 06:20분',
                                duration: '약 6시간 30분 소요',
                                location: '영일만항',
                                destination: '사동항',
                            }}
                        />
                        <ScheduleTitle
                            count={1}
                            title='1일차'
                            subtitle1='2023년 3월 29일 수요일'
                            subtitle2='울릉도'
                            onClick={scrollToTarget}
                        />
                        <ScheduleItem
                            title='독도아카데미 해설사 미팅'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '사동여객선터미널',
                                },
                                {
                                    icon: <KeyboardArrowRight />,
                                    text: '버스에 짐 보관',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='아침 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '비목식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 07:00',
                                },
                                {
                                    icon: <Restaurant />,
                                    text: '엉겅퀴 해장국',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='검찰행로답사(해상)'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '도동여객선터미널 1층',
                                },
                                {
                                    icon: <AccessTime />,
                                    text: '집결시간 08:20',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='숙소 배정'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: 'e편한호텔' },
                                { icon: <LocationOn />, text: '힐스테이' },
                                {
                                    icon: <KeyboardArrowRight />,
                                    text: '각 숙소에 짐 보관',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='점심 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '대나무식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 13:30',
                                },
                                {
                                    icon: <Restaurant />,
                                    text: '오삼불고기',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='독도 실내 교육'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '독도 박물관',
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '독도 케이블카',
                                    description: [
                                        '독도가 보이는 지리적 인접성의 포인트 지역(독도전망대)',
                                    ],
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '독도 의용수비대 기념관',
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '안용복 기념관',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='해안 산책로 답사'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '울릉도 독도 국가지질공원',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='저녁 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '신흥식육식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 18:00',
                                },
                                { icon: <Restaurant />, text: '약소구이' },
                            ]}
                        />
                        <ScheduleItem
                            title='숙소 이동 및 휴식'
                            dot='end'
                            contents={[]}
                        />
                        <ScheduleTitle
                            count={2}
                            title='2일차'
                            subtitle1='2023년 3월 30일 목요일'
                            subtitle2='울릉도 - 독도'
                            onClick={scrollToTarget}
                        />
                        <ScheduleItem
                            title='아침 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '참좋은식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 06:00',
                                },
                                {
                                    icon: <Restaurant />,
                                    text: '오징어 내장탕',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='독도 현지 답사 집결'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '저동여객선터미널',
                                },
                                {
                                    icon: <AccessTime />,
                                    text: '집결시간 06:50',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='평화의 섬 독도 답사'
                            dot='start'
                            contents={{
                                icon: <DirectionsBoat />,
                                startTime: '3월 30일 07:20분',
                                endTime: '3월 30일 12:00분',
                                duration: '독도 답사',
                                location: '저동항',
                                destination: '저동항',
                            }}
                        />
                        <ScheduleItem
                            title='점심 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '호박식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 12:30',
                                },
                                {
                                    icon: <Restaurant />,
                                    text: '물회',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='검찰행로답사(육상)'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '통구미',
                                    description: [
                                        '강치와 거북바위 그리고 향나무 자생지 답사',
                                    ],
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '태하동 성하신당',
                                    description: ['해양문화와 새환정책 교육'],
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '대풍감',
                                    description: [
                                        '대한민국 10대 비경으로 꼽히는 절경',
                                    ],
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '해중전망대',
                                    description: [
                                        '울릉도 동해 바다의 생태계 답사',
                                    ],
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '예림원',
                                    description: [
                                        '신비의 섬 울릉도 생태와 조각체험',
                                    ],
                                },
                                {
                                    icon: <LocationOn />,
                                    text: '나리분지',
                                    description: ['개척령의 시작과 사회탐구'],
                                    info: [
                                        '검찰 행로 답사지는 악천후 등 현장 상황에 따라 변경될 수 있습니다.',
                                    ],
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='저녁 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '산마을식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 17:00',
                                },
                                {
                                    icon: <Restaurant />,
                                    text: '산채비빔밥',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='숙소 이동 및 휴식'
                            dot='end'
                            contents={[]}
                        />
                        <ScheduleTitle
                            count={3}
                            title='3일차'
                            subtitle1='2023년 3월 31일 금요일'
                            subtitle2='울릉도 - 포항(영일만)'
                            onClick={scrollToTarget}
                        />
                        <ScheduleItem
                            title='아침 식사'
                            dot='start'
                            contents={[
                                { icon: <LocationOn />, text: '참좋은식당' },
                                {
                                    icon: <AccessTime />,
                                    text: '예약시간 06:00',
                                },
                                {
                                    icon: <Restaurant />,
                                    text: '오징어 내장탕',
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='울릉도 생태 탐방'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '봉래폭포',
                                    description: ['피톤치드 체험과 숲길 답사'],
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='울릉도 문화 탐방'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '도동',
                                    description: [
                                        '울릉도 일제 수탈 문화 교육',
                                        '울릉도 일본식 가옥 답사',
                                    ],
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='사동항 집결'
                            dot='start'
                            contents={[
                                {
                                    icon: <LocationOn />,
                                    text: '사동 여객선 터미널',
                                },
                                {
                                    icon: <AccessTime />,
                                    text: '집결시간 11:30',
                                },
                                {
                                    icon: <KeyboardArrowRight />,
                                    text: '승선권 배부 및 안내사항 전달',
                                    info: [
                                        '점심 식사는 울릉크루즈 내 뷔페입니다.',
                                        '식권 분배 예정입니다.',
                                    ],
                                },
                            ]}
                        />
                        <ScheduleItem
                            title='울릉도 - 포항'
                            dot='start'
                            contents={{
                                icon: <DirectionsBoat />,
                                startTime: '3월 31일 12시 30분',
                                endTime: '3월 31일 19시 00분',
                                destination: '영일만항',
                                location: '사동항',
                                duration: '약 6시간 30분',
                            }}
                        />
                        <ScheduleItem
                            title='해산'
                            dot='end'
                            contents={[
                                {
                                    icon: <DirectionsBus />,
                                    text: '울릉크루즈 셔틀버스',
                                    description: [
                                        '포항KTX',
                                        '포항시외버스터미널',
                                    ],
                                },
                            ]}
                        />
                    </>
                )}
            </Box>
            <Box
                sx={{
                    gridColumn: '3/4',
                    margin: '1rem 1rem 1rem 0',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                }}
            >
                <Box
                    id='TourTitle'
                    sx={(theme) => ({
                        display: 'flex',
                        width: '100%',
                        height: '12rem',
                        backgroundColor: alpha(
                            theme.palette.primary.light,
                            0.1,
                        ),
                        borderRadius: '1rem',
                        padding: '1rem',
                        alignItems: 'start',
                        gap: '1rem',
                    })}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flex: 7,
                            height: '100%',
                        }}
                    >
                        <Box
                            sx={(theme) => ({
                                display: 'grid',
                                gridTemplateColumns: '1fr 1fr 1fr',
                                gridTemplateRows: '1fr 1fr',
                                alignItems: 'center',
                                height: '100%',
                                flexGrow: 1,
                                gap: '1rem',
                            })}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    gridColumn: '1/2',
                                    gridRow: '1/2',
                                    borderRadius: '1rem',
                                    backgroundColor: 'background.paper',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <Typography variant='h4' fontWeight={700}>
                                    352기
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    gridColumn: '2/4',
                                    gridRow: '1/2',
                                    borderRadius: '1rem',
                                    backgroundColor: 'background.paper',
                                    height: '100%',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '0 1rem',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        height: '100%',
                                        width: '100%',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            flex: 7,
                                            height: '100%',
                                            justifyContent: 'space-evenly',
                                            alignItems: 'start',
                                        }}
                                    >
                                        <Typography variant='body1'>
                                            2023년 3월 29일
                                        </Typography>
                                        <Typography variant='body1'>
                                            2023년 3월 31일
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flex: 3,
                                            height: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <Typography
                                            variant='body1'
                                            fontWeight={'bold'}
                                        >
                                            2박 3일
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box
                                sx={(theme) => ({
                                    display: 'flex',
                                    gridColumn: '1/4',
                                    gridRow: '2/3',
                                    borderRadius: '1rem',
                                    backgroundColor: 'background.paper',
                                    height: '100%',
                                    padding: '0 1rem',
                                    alignItems: 'center',
                                    gap: '1rem',
                                })}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        height: '100%',
                                    }}
                                >
                                    <DirectionsBus
                                        sx={{
                                            color: 'primary.main',
                                            fontSize: '2rem',
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        justifyContent: 'space-evenly',
                                    }}
                                >
                                    <Typography variant='body1'>
                                        두레고속관광
                                    </Typography>
                                    <Typography variant='body1'>
                                        경북 12바 1234
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        justifyContent: 'space-evenly',
                                    }}
                                >
                                    <Typography
                                        variant='body1'
                                        fontWeight={700}
                                    >
                                        이재원
                                    </Typography>
                                    <Typography variant='body1'>
                                        010-1234-1234
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flex: 3, height: '100%' }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                flex: 1,
                                height: '100%',
                                backgroundColor: 'primary.main',
                                borderRadius: '1rem',
                                color: 'primary.contrastText',
                                alignItems: 'center',
                                justifyContent: 'space-evenly',
                            }}
                        >
                            <Typography variant='h4' fontWeight={700}>
                                1호차
                            </Typography>
                            <Typography variant='h5' fontWeight={700}>
                                32명
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={(theme) => ({
                        display: 'grid',
                        width: '100%',
                        minHeight: '30rem',
                        backgroundColor: alpha(
                            theme.palette.primary.light,
                            0.1,
                        ),
                        borderRadius: '1rem',
                        padding: '1rem',
                        alignItems: 'start',
                        gap: '1rem',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gridTemplateRows: 'repeat(2, 1fr)',
                    })}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridColumn: 'span 1',
                            height: '100%',
                            backgroundColor: 'primary.main',
                            borderRadius: '1rem',
                            padding: '1rem',
                            gap: '1rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 5,
                            color: 'primary.contrastText',
                        }}
                    >
                        <Box>
                            <DirectionsBus
                                sx={{
                                    fontSize: '4rem',
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '2rem',
                                }}
                                fontWeight={700}
                            >
                                버스
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridColumn: 'span 1',
                            height: '100%',
                            backgroundColor: 'primary.dark',
                            borderRadius: '1rem',
                            padding: '1rem',
                            gap: '1rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 5,
                            color: 'primary.contrastText',
                        }}
                    >
                        <Box>
                            <Restaurant
                                sx={{
                                    fontSize: '4rem',
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '2rem',
                                }}
                                fontWeight={700}
                            >
                                식사
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridColumn: 'span 1',
                            height: '100%',
                            backgroundColor: 'primary.light',
                            borderRadius: '1rem',
                            padding: '1rem',
                            gap: '1rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 5,
                            color: 'primary.contrastText',
                        }}
                    >
                        <Box>
                            <LocalHotel
                                sx={{
                                    fontSize: '4rem',
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '2rem',
                                }}
                                fontWeight={700}
                            >
                                숙소
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            gridColumn: 'span 1',
                            height: '100%',
                            backgroundColor: 'background.paper',
                            borderRadius: '1rem',
                            padding: '1rem',
                            gap: '1rem',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: 5,
                        }}
                    >
                        <Box>
                            <ConfirmationNumber
                                sx={{
                                    fontSize: '4rem',
                                }}
                            />
                        </Box>
                        <Box>
                            <Typography
                                sx={{
                                    fontSize: '2rem',
                                }}
                                fontWeight={700}
                            >
                                입장료
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
