import DbTemplate from 'next-app/src/components/Admin/Templates/DbTemplate'
import {useRouter} from 'next/router'
import {useEffect, useMemo} from 'react'
import getBusCompany from 'next-app/src/api/companies/getBusCompany'
import {alpha, Box, IconButton, Typography} from '@mui/material'
import {DirectionsBus, Edit} from '@mui/icons-material'
import {useModalContext} from 'next-app/src/context/ModalContext'
import CreateBus from 'next-app/src/components/Admin/Modals/CreateBus'


export default function BusCompany() {
    const router = useRouter()
    const {name} = router.query
    const modal = useModalContext()
    const query = getBusCompany(name as string)
    const company = useMemo(()=>{
        if(query.data) {
            return query.data.busCompany
        }
        return null
    }, [query.data])

    const handleOnCreateBus = () => {
        modal.setModal(<CreateBus BusCompanyId={
            company?._id as string
        }/>)
        modal.open()
    }



    return (
        <DbTemplate
            title={'업체 정보'}
            breadcrumbs={[ {href: '/admin/db', label: 'DB'}, {href: '/admin/db/bus', label: '버스 업체 관리'}, {href: '/admin/db/bus/companies', label: '업체 목록'}, {href: '/admin/db/bus/company/'+name, label:name?name as string:''} ]}>
            <Box sx={{
                display: 'grid',
                width:'100%',
                height:'100%',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: '1rem',
                margin: '1rem 0'
            }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridGap:'1rem' ,gridColumn: '1 / 3', gridRow: '1 / 2' }}>
                    <Box sx={theme=>({ gridColumn: 'span 2', backgroundColor: alpha(theme.palette.mode === 'dark'? theme.palette.secondary.dark: theme.palette.primary.main,0.1), borderRadius: '1rem' })}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', padding: '1rem'}}>
                            <Typography variant={'h5'} fontWeight={700}>{company?.name}</Typography>
                            <Typography variant={'body1'} fontWeight={500}>{company?.address}</Typography>
                            <Box sx={{display:'grid', gridTemplateColumns: 'repeat(2,1fr)', gridGap:'1rem', marginTop: '1rem', height: '100%'}}>
                                <Box sx={{gridColumn: 'span 1'}}>
                                    <Typography variant={'body1'} fontWeight={500}>등록 버스</Typography>
                                    <Box sx={{display:'flex', width:'100%', height:'5rem', alignItems:'center', justifyContent:'center'}}>
                                        <Typography variant={'h5'} fontWeight={700}>{company?.buses === null?0:company?.buses.length}</Typography>
                                    </Box>
                                </Box>
                                <Box sx={{gridColumn: 'span 1'}}>
                                    <Typography variant={'body1'} fontWeight={500}>등록 예약</Typography>
                                    <Box sx={{display:'flex', width:'100%', height:'5rem', alignItems:'center', justifyContent:'center'}}>
                                        <Typography variant={'h5'} fontWeight={700}>{company?.buses === null?0:company?.buses.length}</Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box position={'relative'} sx={theme=>({display:'flex',flexDirection:'column' ,gridColumn: 'span 1', border: `1px solid ${theme.palette.secondary.dark}`, borderRadius: '1rem', padding:'1rem'})}>
                        <Box sx={{position: 'absolute', right:10}}>
                            <IconButton>
                                <Edit />
                            </IconButton>
                        </Box>
                        <Typography variant={'body1'} fontWeight={700}>연락처</Typography>
                        <Typography variant={'caption'} fontWeight={500}>{company?.phone}</Typography>
                        <Typography variant={'caption'} fontWeight={500}>{company?.contact}</Typography>
                        <Typography variant={'body1'} fontWeight={700} sx={{marginTop:'1rem'}}>이메일</Typography>
                        <Typography variant={'caption'} fontWeight={500}>{company?.email ? company?.email : '등록된 이메일이 없습니다.'}</Typography>
                        <Typography variant={'caption'} fontWeight={300} sx={{marginTop:'1rem'}}>생성일 {new Date(company?.createdAt!).toLocaleString()}</Typography>
                        <Typography variant={'caption'} fontWeight={300} >수정일 {new Date(company?.updatedAt!).toLocaleString()}</Typography>
                    </Box>
                </Box>
                <Box sx={{ gridColumn: '1 / 2', gridRow: '2 / 4'}}>
                    <Box position={'relative'} sx={{display:'flex', flexDirection:'column', height:'100%', width:'100%', padding:'1rem', border:'1px solid', borderColor: 'info.main', borderRadius: '1rem'}}>
                        <Box sx={{position: 'absolute', right:10, top:10}}>
                            <IconButton color={'success'} onClick={handleOnCreateBus}>
                                <DirectionsBus />
                            </IconButton>
                        </Box>
                        <Typography variant={'h5'} fontWeight={700}>버스 목록</Typography>
                        <Box sx={{display: 'grid', gridTemplateRows: 'repeat(10, 1fr)', gridGap: '1rem', marginTop: '1rem', height: '20rem', overflowY: 'scroll'}}>
                            {[1,2,3,4,5,6,7,8,9,10].map((item, index)=>(
                                <Box key={index} sx={{display:'flex', flexDirection:'column', height:'100%', width:'100%', marginTop:'1rem'}}>
                                    <Typography variant={'body1'} fontWeight={500}>버스 {item}</Typography>
                                    <Typography variant={'caption'} fontWeight={300}>버스 {item}의 설명</Typography>
                                </Box>
                            ))
                            }
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ gridColumn: '2 / 3', gridRow: '2 / 4'}}>
                    <Box sx={{display:'flex', flexDirection:'column', height:'100%', width:'100%', padding:'1rem', border:'1px solid', borderColor: 'info.main', borderRadius: '1rem'}}>
                        <Typography variant={'h5'} fontWeight={700}>예약 목록</Typography>
                        <Box sx={{display:'flex', flexDirection:'column', height:'100%', width:'100%', marginTop:'1rem'}}>
                            {company?.buses?.map((bus, index)=>(
                                <Box key={index} sx={{display:'flex', flexDirection:'column', height:'100%', width:'100%', marginTop:'1rem'}}>
                                    <Typography variant={'body1'} fontWeight={700}>{bus.name}</Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </DbTemplate>
    )
}
