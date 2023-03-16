import {alpha, Box, Button, InputAdornment, TextField, Theme} from '@mui/material'
import {Search} from '@mui/icons-material'
import SwipeableViews from 'react-swipeable-views'
import useTabs from 'next-app/src/hooks/tab/useTabs'
import ScheduleCard from 'next-app/src/components/Cards/ScheduleCard'
import UserCard from 'next-app/src/components/Cards/UserCard'
import {useTheme} from '@mui/styles'

function LeftSearch(){
    const theme = useTheme() as Theme;
    const {activeTab, setActiveTab, panels} = useTabs([<Box sx={{display:'flex',flexDirection:'column'}}>{
        [0,1,2,3,4,5,6].map((v,i)=>(
            <ScheduleCard key={i} />
        ))
    }</Box>, <Box sx={{display:'flex',flexDirection:'column'}}>{
        [0,1,2,3,4,5,6].map((v,i)=>(
            <UserCard key={i} />
        ))
    }</Box>])
    return (
        <Box gridRow={'2/13'} gridColumn={'1/4'} sx={{padding:'1rem'}}>
            <Box sx={{display:'flex', flexDirection:'column'}}>
                <TextField variant={'outlined'}
                           InputProps={{
                               startAdornment: (
                                   <InputAdornment position={'start'}>
                                       <Search />
                                   </InputAdornment>
                               ),
                               placeholder: '일정 기록을 입력하세요.',
                           }}
                />
                <Box sx={(theme)=>({display:'flex', mt:'1rem', padding:'0.5rem', borderRadius:'0.2rem', backgroundColor: alpha(theme.palette.mode==='dark'?theme.palette.secondary.main:theme.palette.primary.main, theme.palette.mode==='dark'?0.1:0.1)})}>
                    <Button
                        color={theme.palette.mode==='dark'?'secondary':'primary'}
                        variant={activeTab===0?'contained':'outlined'} sx={{borderRadius:'0.5rem', mr:'0.5rem', width:'100%'}}
                        onClick={()=>{
                            setActiveTab(0)
                        }}
                    >
                        일정기록
                    </Button>
                    <Button
                        color={theme.palette.mode==='dark'?'secondary':'primary'}
                        variant={activeTab===1?'contained':'outlined'} sx={{borderRadius:'0.5rem', mr:'0.5rem', width:'100%'}} onClick={()=>{
                        setActiveTab(1)
                    }}>
                        연락처
                    </Button>
                </Box>
                <SwipeableViews index={activeTab}
                                onChangeIndex={(v)=>{setActiveTab(v)}}
                                enableMouseEvents
                                style={{marginTop:'1rem'}}
                >
                    {
                        panels.map((v,i)=>(
                            <Box key={i} sx={{display:'flex', flexDirection:'column'}}>
                                {v}
                            </Box>
                        ))
                    }
                </SwipeableViews>
            </Box>
        </Box>
    )
}

export default LeftSearch;
