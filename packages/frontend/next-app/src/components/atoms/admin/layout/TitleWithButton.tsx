import {Box, Typography} from '@mui/material'

type TitleWithButtonProps = {
    title: string;
    button: React.ReactNode;
}

export default function TitleWithButton({ title, button }: TitleWithButtonProps) {
    return (
        <Box display={'flex'} gap={'1rem'} flexDirection={'column'} alignItems={'start'} justifyContent={'space-between'}>
            <Typography variant={'h5'} fontWeight={600}>{title}</Typography>
            {button}
        </Box>
    );
}
