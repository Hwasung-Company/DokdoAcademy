import {Container} from '@mui/material'

export default function Template({children}: {children: React.ReactNode}){
    return <Container sx={{
        minHeight: '100vh',
    }}>
        {children}
    </Container>
}

export const createGridTemplate = (columns=12, rows=12) => ({
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
    width: '100%',
    height: '100%',
})
