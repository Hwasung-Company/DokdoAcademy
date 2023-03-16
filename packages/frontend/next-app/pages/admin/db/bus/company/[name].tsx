import DbTemplate from 'next-app/src/components/Admin/Templates/DbTemplate'
import {useRouter} from 'next/router'
import {useEffect, useMemo} from 'react'
import getBusCompany from 'next-app/src/api/companies/getBusCompany'
import {Box} from '@mui/material'

export default function BusCompany() {
    const router = useRouter()
    const {name} = router.query

    const query = getBusCompany(name as string)

    const company = useMemo(()=>{
        if(query.data) {
            return query.data.busCompany
        }
        return null
    }, [query.data])

    useEffect(()=>{
        console.log(query)
    })

    return (
        <DbTemplate
            title={name ? `${name} 업체 정보` : '업체 정보'}
            breadcrumbs={[ {href: '/admin/db', label: 'DB'}, {href: '/admin/db/bus', label: '버스 업체 관리'}, {href: '/admin/db/bus/companies', label: '업체 목록'}, {href: '/admin/db/bus/company/'+name, label:name?name as string:''} ]}>
            <Box sx={{
                display: 'grid',
                width:'100%',
                height:'100%',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gridTemplateRows: 'repeat(3, 1fr)',
                gridGap: '1rem',
            }}>
                <Box sx={{ gridColumn: '1 / 3', gridRow: '1 / 2', backgroundColor: 'primary.main' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                        <Box sx={{ fontSize: '2rem', fontWeight: 'bold', color: 'white' }}>{company?.name}</Box>
                        <Box sx={{ fontSize: '1.5rem', color: 'white' }}>{company?.address}</Box>
                    </Box>
                </Box>
                <Box sx={{ gridColumn: '1 / 2', gridRow: '2 / 3', backgroundColor: 'primary.light' }}></Box>
                <Box sx={{ gridColumn: '2 / 3', gridRow: '2 / 3', backgroundColor: 'info.main' }}></Box>
                <Box sx={{ gridColumn: '1 / 2', gridRow: '3 / 4', backgroundColor: 'success.main' }}></Box>
                <Box sx={{ gridColumn: '2 / 3', gridRow: '3 / 4', backgroundColor: 'warning.main' }}></Box>
            </Box>
        </DbTemplate>
    )
}
