import {Typography} from '@mui/material'

type TitleProps = {
    text: string
}

const Title = ({text}:TitleProps) => {
    return <Typography variant='h5' fontWeight={700}>{text}</Typography>
}

export default Title;
