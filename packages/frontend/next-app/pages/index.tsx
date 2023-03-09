import {gql, useQuery} from '@apollo/client'
import {Box, Grid} from '@mui/material'
import {createGridTemplate} from '@dokdo-academy/component/dist/template/template'


const GET_USERS = gql`
    query users {
        users {
            _id
        }
    }
`


export default function Home(){

    const {data, loading, error} = useQuery(GET_USERS);

    return (
        <Box minHeight={'100vh'}>
            <Box display={'grid'} gridTemplateRows={'repeat(12, 1fr)'} gridTemplateColumns={'repeat(12, 1fr)'} width={'100%'} height={'100vh'}>
                <Box gridRow={'3/10'} gridColumn={'1/7'} sx={{
                    backgroundColor: 'background.paper',
                }} />
                <Box gridRow={'3/10'} gridColumn={'7/13'} bgcolor={'#123123'} />
            </Box>
        </Box>
    )
}
