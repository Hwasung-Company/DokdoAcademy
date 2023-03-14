import {alpha, Box, Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader} from '@mui/material'
import {
    ConfirmationNumber, Dashboard,
    DirectionsBoat,
    DirectionsBus,
    ExpandLess,
    ExpandMore,
    FormatListNumbered, Hotel, Restaurant, SportsScore
} from '@mui/icons-material'
import {useEffect, useMemo, useState} from 'react'
import {useRouter} from 'next/router'

export default function LeftNav(){
    const [selectedTab, setSelectedTab] = useState<string[]>([])

    const handleTab = (tab:string) => {
        if(selectedTab.includes(tab)){
            setSelectedTab(selectedTab.filter(item=>item!==tab))
        }else{
            setSelectedTab([...selectedTab, tab])
        }
    }

    const router = useRouter()


    useEffect(()=>{
        if(router.pathname.includes('bus')){
            setSelectedTab(['bus'])
        }else if(router.pathname.includes('boat')){
            setSelectedTab(['boat'])
        }else if(router.pathname.includes('hotel')){
            setSelectedTab(['hotel'])
        }else if(router.pathname.includes('restaurant')){
            setSelectedTab(['restaurant'])
        }else if(router.pathname.includes('sports')){
            setSelectedTab(['sports'])
        }else if(router.pathname.includes('tour')){
            setSelectedTab(['tour'])
        }
    },[router])

    return (
        <Box gridRow={'2/13'} gridColumn={'1/4'} >
            <Box sx={theme=>({
                width: '100%',
                height:'100%',
                alignItems: 'center',
                padding: '1rem 0',
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
                borderRadius: '0.5rem',
                overflowY: 'scroll'
            })}>
                <List
                    sx={theme=>({ width: '100%', height: '100%', bgcolor: alpha(theme.palette.background.paper, 0.1), borderRadius: '0.5rem' })}
                    component="nav"
                    alia-labelledby={'company-list'}
                    subheader={
                        <ListSubheader component="div" id="company-list" sx={{textAlign:'center', fontSize:'1.2rem' , fontWeight:700}}>
                            등록 업체 관리
                        </ListSubheader>
                    }>
                    <ListItemButton
                        selected={selectedTab.includes('bus')}
                        onClick={()=>handleTab('bus')}>
                        <ListItemIcon>
                            <DirectionsBus />
                        </ListItemIcon>
                        <ListItemText primary={'버스 업체 관리'} />
                        {selectedTab.includes('bus') ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedTab.includes('bus')} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}
                                    selected={router.pathname.includes('admin/db/bus') && router.pathname.split('/').length === 4}
                                    onClick={()=>router.push('/admin/db/bus')}
                            >
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="대시보드" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}
                                    selected={router.pathname.includes('admin/db/bus/companies')}
                                    onClick={()=>router.push('/admin/db/bus/companies')}
                            >
                                <ListItemIcon>
                                    <FormatListNumbered />
                                </ListItemIcon>
                                <ListItemText primary="업체 목록" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}
                                    selected={router.pathname.includes('admin/db/bus/reservations')}
                                    onClick={()=>router.push('/admin/db/bus/reservations')}
                            >
                                <ListItemIcon>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary="예약 관리" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton
                        selected={selectedTab.includes('cruise')}
                        onClick={()=>handleTab('cruise')}>
                        <ListItemIcon>
                            <DirectionsBoat />
                        </ListItemIcon>
                        <ListItemText primary={'선사 관리'} />
                        {selectedTab.includes('cruise') ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedTab.includes('cruise')} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="대시보드" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FormatListNumbered />
                                </ListItemIcon>
                                <ListItemText primary="업체 목록" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary="예약 관리" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton
                        selected={selectedTab.includes('restaurants')}
                        onClick={()=>handleTab('restaurants')}>
                        <ListItemIcon>
                            <Restaurant />
                        </ListItemIcon>
                        <ListItemText primary={'식당 관리'} />
                        {selectedTab.includes('restaurants') ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedTab.includes('restaurants')} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="대시보드" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FormatListNumbered />
                                </ListItemIcon>
                                <ListItemText primary="업체 목록" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary="예약 관리" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton
                        selected={selectedTab.includes('hotel')}
                        onClick={()=>handleTab('hotel')}>
                        <ListItemIcon>
                            <Hotel />
                        </ListItemIcon>
                        <ListItemText primary={'숙박 업체 관리'} />
                        {selectedTab.includes('hotel') ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedTab.includes('hotel')} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="대시보드" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FormatListNumbered />
                                </ListItemIcon>
                                <ListItemText primary="업체 목록" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary="예약 관리" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                    <ListItemButton
                        selected={selectedTab.includes('attraction')}
                        onClick={()=>handleTab('attraction')}>
                        <ListItemIcon>
                            <SportsScore />
                        </ListItemIcon>
                        <ListItemText primary={'관광지 관리'} />
                        {selectedTab.includes('attraction') ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={selectedTab.includes('attraction')} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <Dashboard />
                                </ListItemIcon>
                                <ListItemText primary="대시보드" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <FormatListNumbered />
                                </ListItemIcon>
                                <ListItemText primary="업체 목록" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <ConfirmationNumber />
                                </ListItemIcon>
                                <ListItemText primary="예약 관리" />
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Box>
        </Box>
    )
}
