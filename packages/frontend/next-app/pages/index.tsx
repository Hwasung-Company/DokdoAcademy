import {gql, useQuery} from '@apollo/client'
import {Box, Button, Grid, Paper} from '@mui/material'
import {createGridTemplate} from '@dokdo-academy/component/dist/template/template'
import {Component} from 'react'
import Link from 'next/link'


const GET_USERS = gql`
    query users {
        users {
            _id
        }
    }
`

class Test extends Component {
    render(){
        return <></>
    }
}

export default function Home(){
    const {data, loading, error} = useQuery(GET_USERS);
    return (
        <Box minHeight={'100vh'}
            sx={{
                backgroundColor: 'background.paper',
            }}
        >
            <Link href={'/admin'}>
                <Button variant={'outlined'}>admin</Button>
            </Link>
            <Box display={'grid'} gridTemplateRows={'repeat(12, 1fr)'} gridTemplateColumns={'repeat(12, 1fr)'} width={'100%'} height={'100vh'}>
                <Box gridRow={'3/10'} gridColumn={'1/7'} sx={{
                    backgroundColor: 'background.paper',
                }} />
                <Box gridRow={'3/10'} gridColumn={'7/13'}/>
            </Box>

        </Box>
    )
}
