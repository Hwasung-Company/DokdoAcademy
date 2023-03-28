import { DirectionsTransit } from '@mui/icons-material';
import { alpha, Box, Icon, SvgIcon, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { useTheme } from '@mui/system';
import { useModal } from 'next-app/src/context/ModalContext';
import dynamic from 'next/dynamic';
import MenuSection from '../../Layout/Menu/MenuSection';
import TicketReceiptModal from '../../Modal/TicketReceiptModal';

const MenuTemplate = dynamic(
    () => import('next-app/src/components/Manager/Layout/Menu/MenuTemplate'),
    {
        ssr: false,
    },
);

const TourInformation = dynamic(
    () => import('next-app/src/components/Manager/Menu/TourInformation'),
    {
        ssr: false,
    },
);

export default function TicketDetails() {
    const theme = useTheme();

    const { setModal, openModal, closeModal } = useModal();

    const handleReceiptModal = () => {
        setModal(<TicketReceiptModal />);
        openModal();
    };

    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='입장료 결제'>
                <BtnGrid>
                    <Btn
                        icon={
                            <SvgIcon>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 49.639 56.73'
                                >
                                    <path
                                        id='패스_249'
                                        data-name='패스 249'
                                        d='M10.637,0A10.64,10.64,0,0,0,0,10.637V39A10.649,10.649,0,0,0,8.986,49.517l-5.1,5.1a1.243,1.243,0,0,0,.875,2.116h4.4a3.539,3.539,0,0,0,2.5-1.042l6.061-6.05H31.911l6.05,6.05a3.539,3.539,0,0,0,2.5,1.042h4.41a1.238,1.238,0,0,0,.875-2.116l-5.1-5.1A10.63,10.63,0,0,0,49.639,39V10.637A10.64,10.64,0,0,0,39,0ZM7.091,10.637a3.542,3.542,0,0,1,3.546-3.546H39a3.542,3.542,0,0,1,3.546,3.546V21.274A3.542,3.542,0,0,1,39,24.819H10.637a3.542,3.542,0,0,1-3.546-3.546ZM24.819,31.911A5.318,5.318,0,1,1,19.5,37.229,5.318,5.318,0,0,1,24.819,31.911Z'
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        text='모노레일'
                        color={theme.palette.primary.dark}
                        onClick={handleReceiptModal}
                    />
                    <Btn
                        icon={
                            <SvgIcon>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 512 512'
                                >
                                    <path d='M288 0a32 32 0 1 1 0 64 32 32 0 1 1 0-64zM160 56a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM32 288c0-35.3 28.7-64 64-64H232V157.5l-203.1 42c-13 2.7-25.7-5.7-28.4-18.6s5.7-25.7 18.6-28.4l232-48 232-48c13-2.7 25.7 5.7 28.4 18.6s-5.7 25.7-18.6 28.4L280 147.5V224H416c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V288zm64 0c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H96zm112 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H224c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16H352z' />
                                </svg>
                            </SvgIcon>
                        }
                        text='케이블카'
                        color={theme.palette.primary.main}
                        onClick={handleReceiptModal}
                    />
                    <Btn
                        icon={
                            <SvgIcon>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 384 512'
                                >
                                    <path d='M190.4 74.1c5.6-16.8-3.5-34.9-20.2-40.5s-34.9 3.5-40.5 20.2l-128 384c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l128-384zm70.9-41.7c-17.4-2.9-33.9 8.9-36.8 26.3l-64 384c-2.9 17.4 8.9 33.9 26.3 36.8s33.9-8.9 36.8-26.3l64-384c2.9-17.4-8.9-33.9-26.3-36.8zM352 32c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32z' />
                                </svg>
                            </SvgIcon>
                        }
                        text='봉래폭포'
                        color={theme.palette.success.main}
                        onClick={handleReceiptModal}
                    />
                    <Btn
                        icon={
                            <SvgIcon>
                                <svg
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 75.438 60.35'
                                >
                                    <path
                                        id='패스_251'
                                        data-name='패스 251'
                                        d='M66.008,18.859a9.43,9.43,0,1,0-9.43-9.43A9.43,9.43,0,0,0,66.008,18.859ZM6.589,60.35H68.236A7.206,7.206,0,0,0,74.389,49.4L58.83,23.9a2.634,2.634,0,0,0-4.5-.012L48.645,33.2,33.805,9.548a4.291,4.291,0,0,0-7.261,0L1.014,50.26A6.581,6.581,0,0,0,6.589,60.35Z'
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        text='관음도'
                        color={theme.palette.info.main}
                        onClick={handleReceiptModal}
                    />
                    <Btn
                        icon={
                            <SvgIcon>
                                <svg
                                    id='그룹_426'
                                    data-name='그룹 426'
                                    xmlns='http://www.w3.org/2000/svg'
                                    viewBox='0 0 52.65 52.65'
                                >
                                    <path
                                        id='패스_252'
                                        data-name='패스 252'
                                        d='M34.613,16.093c.134.113.278.226.4.339a2.848,2.848,0,0,0,3.435.37L45.4,12.165a2.292,2.292,0,0,0,.524-3.435,26.882,26.882,0,0,0-5.851-4.864,2.281,2.281,0,0,0-3.3,1.193L33.636,12.9a2.838,2.838,0,0,0,.977,3.208ZM33.729,3.784A2.3,2.3,0,0,0,32.186.648,26.8,26.8,0,0,0,26.325,0a26.192,26.192,0,0,0-5.861.658,2.273,2.273,0,0,0-1.542,3.126l3.116,7.795a2.846,2.846,0,0,0,2.982,1.645c.432-.041.864-.062,1.306-.062s.884.021,1.306.062a2.862,2.862,0,0,0,2.982-1.645ZM6.735,8.741a2.292,2.292,0,0,0,.524,3.435l6.951,4.638a2.849,2.849,0,0,0,3.435-.37c.134-.113.267-.237.411-.339a2.848,2.848,0,0,0,.977-3.208L15.877,5.059a2.3,2.3,0,0,0-3.3-1.193A26.349,26.349,0,0,0,6.735,8.741Zm32.289,14.1c.093.339.175.679.237,1.028a2.887,2.887,0,0,0,2.694,2.458h8.227a2.3,2.3,0,0,0,2.355-2.468,26.062,26.062,0,0,0-2.026-7.949,2.287,2.287,0,0,0-3.4-.915l-7.054,4.7a2.817,2.817,0,0,0-1.028,3.136ZM5.543,14.993a2.282,2.282,0,0,0-3.4.915A26.062,26.062,0,0,0,.113,23.857a2.3,2.3,0,0,0,2.355,2.468h8.227a2.86,2.86,0,0,0,2.694-2.458c.062-.35.144-.689.237-1.028A2.827,2.827,0,0,0,12.6,19.7Zm5.152,14.623H2.468A2.462,2.462,0,0,0,0,32.083v4.936a2.462,2.462,0,0,0,2.468,2.468h8.227a2.462,2.462,0,0,0,2.468-2.468V32.083A2.462,2.462,0,0,0,10.694,29.615Zm31.261,0a2.462,2.462,0,0,0-2.468,2.468v4.936a2.462,2.462,0,0,0,2.468,2.468h8.227a2.462,2.462,0,0,0,2.468-2.468V32.083a2.462,2.462,0,0,0-2.468-2.468ZM2.468,42.778A2.462,2.462,0,0,0,0,45.246v4.936A2.462,2.462,0,0,0,2.468,52.65h8.227a2.462,2.462,0,0,0,2.468-2.468V45.246a2.462,2.462,0,0,0-2.468-2.468Zm39.487,0a2.462,2.462,0,0,0-2.468,2.468v4.936a2.462,2.462,0,0,0,2.468,2.468h8.227a2.462,2.462,0,0,0,2.468-2.468V45.246a2.462,2.462,0,0,0-2.468-2.468ZM27.97,19.744a1.645,1.645,0,0,0-3.291,0v27.97a1.645,1.645,0,1,0,3.291,0Zm-6.581,3.291a1.645,1.645,0,0,0-3.291,0v24.68a1.645,1.645,0,1,0,3.291,0Zm13.162,0a1.645,1.645,0,1,0-3.291,0v24.68a1.645,1.645,0,1,0,3.291,0Z'
                                        transform='translate(0 0)'
                                    />
                                </svg>
                            </SvgIcon>
                        }
                        text='예림원'
                        color={theme.palette.warning.main}
                        onClick={handleReceiptModal}
                    />
                    <Btn
                        text=''
                        onClick={() => {
                            console.log();
                        }}
                    />
                </BtnGrid>
            </MenuSection>
        </MenuTemplate>
    );
}

function BtnGrid({
    children,
    title,
}: {
    children: React.ReactNode;
    title?: string;
}) {
    return (
        <Box
            sx={{
                display: 'grid',
                position: 'relative',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginTop: title ? '1.5rem' : '0',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    top: '-2rem',
                    left: '0',
                }}
            >
                <Typography variant='subtitle2' fontWeight={700}>
                    {title}
                </Typography>
            </Box>
            {children}
        </Box>
    );
}

function Btn({
    icon,
    text,
    color,
    onClick,
}: {
    icon?: React.ReactNode;
    text: string;
    color?: string;
    onClick: () => void;
}) {
    return (
        <Box
            onClick={onClick}
            className={color ? 'mouse_hover' : ''}
            sx={(theme) => ({
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '8rem',
                gap: '0.5rem',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: color
                    ? alpha(color, 0.8)
                    : alpha(theme.palette.primary.light, 0.1),
                borderRadius: '1rem',
                color: color
                    ? theme.palette.common.white
                    : theme.palette.primary.dark,
                padding: '0 1rem',
                '& > svg': {
                    fontSize: '3rem',
                },
            })}
        >
            {icon && icon}
            <Typography variant='h6' fontWeight={700}>
                {text}
            </Typography>
        </Box>
    );
}
