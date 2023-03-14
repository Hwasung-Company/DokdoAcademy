import {
    alpha,
    Avatar,
    Box,
    Button,
    Divider,
    IconButton,
    InputAdornment,
    Paper, Tab, Tabs,
    TextField,
    Theme,
    Typography
} from '@mui/material'
import {useTheme} from '@mui/styles'
import {ArrowDropDown, BusinessCenter, DateRange, ReceiptLong, Search, ViewList, Work} from '@mui/icons-material'
import SwipeableViews from 'react-swipeable-views'
import Header from 'next-app/src/components/Admin/Templates/Header'
import GridMain from '@dokdo-academy/component/dist/Layouts/GridMain'
import useTabs from 'next-app/src/hooks/tab/useTabs'
import UserCard from 'next-app/src/components/Cards/UserCard'
import ScheduleCard from 'next-app/src/components/Cards/ScheduleCard'
import LeftSearch from 'next-app/src/components/Admin/Templates/LeftSearch'


function Dashboard(){


    return (
        <GridMain>
            <Header />
            <LeftSearch />
            <Box gridRow={'2/13'} gridColumn={'4/13'} sx={{border:'1px solid black'}}>
            </Box>
        </GridMain>
    )
}

export default Dashboard
