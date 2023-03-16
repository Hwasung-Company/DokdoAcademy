import DbTemplate from 'next-app/src/components/Admin/Templates/DbTemplate'
import {alpha, Box, Button, Checkbox, InputAdornment, Paper, TextField, Typography} from '@mui/material'
import { Search} from '@mui/icons-material'
import BusListItem from 'next-app/src/components/List/BusListItem'
import {useModalContext} from 'next-app/src/context/ModalContext'
import {useEffect, useMemo} from 'react'
import isContact from '@common/validators/isContact'
import CreateBusCompany from 'next-app/src/components/Admin/Modals/CreateBusCompany'
import useGetBusCompanies from 'next-app/src/api/companies/useGetBusCompanies'

function BusCompanies(){
    const {setModal, open} = useModalContext()
    const query = useGetBusCompanies();

    const busCompanies = useMemo(()=>{
        if(query.data){
            return query.data.busCompanies
        }
        return []
    },[query.data])

    useEffect(()=>{
        setModal(<CreateBusCompany/>)
    },[])


    return (
        <DbTemplate
            title={'버스 업체 관리'}
            breadcrumbs={[ {href: '/admin/db', label: 'DB'}, {href: '/admin/db/bus', label: '버스 업체 관리'}, {href: '/admin/db/bus/companies', label: '업체 목록'} ]}
        >
            <>
                <Box sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                }}>
                    <Button onClick={open} variant={'contained'} color={'primary'}>업체 등록</Button>
                    <TextField variant={'outlined'} size={'small'} sx={{ marginLeft: '1rem' }}
                                placeholder={'업체명 검색'}
                                name={'bus_company_name'}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position={'start'}>
                                            <Search />
                                        </InputAdornment>
                                    )
                                }}
                    />
                </Box>
                <Box sx={theme=>({
                    width: '100%',
                    height: 'calc(100vh - 14rem)',
                    margin: '1rem 0',
                    display: 'grid',
                    gridTemplateRows: 'repeat(14, 1fr)',
                    border: `1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}`,
                    borderRadius: '0.3rem',
                })}>
                    <Box sx={theme=>({
                        gridRow: 'span 1',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        borderBottom: `1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}`,
                        backgroundColor: theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.1),
                    })}>
                        <Box sx={{
                            gridColumn: '1/2',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Checkbox/>
                        </Box>
                        <Box sx={{ gridColumn: '2/4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant={'body2'} fontWeight={700}>업체명</Typography>
                        </Box>
                        <Box sx={{ gridColumn: '4/7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant={'body2'} fontWeight={700}>주소</Typography>
                        </Box>
                        <Box sx={{ gridColumn: '7/9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant={'body2'} fontWeight={700}>연락처</Typography>
                        </Box>
                        <Box sx={{ gridColumn: '9/11', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant={'body2'} fontWeight={700}>연락처</Typography>
                        </Box>
                        <Box sx={{ gridColumn: '11/13', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Typography variant={'body2'} fontWeight={700}>예약 건수</Typography>
                        </Box>
                    </Box>
                    {
                        busCompanies.map((item, index)=>(
                            <BusListItem key={'bus-com'+index} name={item.name} address={item.address} contact={item.contact} phone={item.phone} reservations={123456} />))
                    }
                    <Box sx={theme=>({
                        gridRow: '14/15',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        borderBottom: `1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}`,
                        backgroundColor: theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2),
                    })}>
                        <Box sx={{
                            gridColumn: '9/13',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            padding: '0 1rem',
                        }}>
                            <Box sx={theme=>({
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: `1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}`,
                                borderRadius: '0.3rem',
                                padding: '0.3rem 0.5rem',
                                cursor: 'pointer',
                                backgroundColor: theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.1),
                            })}>
                                <Typography variant={'body2'}>이전</Typography>
                                <Typography variant={'body2'} sx={theme=>({ marginLeft: '0.5rem', paddingLeft:'0.5rem', borderLeft:`1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}` })}>1 / 12</Typography>
                                <Typography variant={'body2'} sx={theme=>({ marginLeft: '0.5rem', paddingLeft:'0.5rem', borderLeft:`1px solid ${theme.palette.mode==='dark'?alpha(theme.palette.secondary.main, 0.2):alpha(theme.palette.primary.main, 0.2)}` })}>다음</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </>
        </DbTemplate>
    )
}

export default BusCompanies;
