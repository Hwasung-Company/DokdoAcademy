import {ReactElement} from 'react'
import GridMain from '@dokdo-academy/component/dist/Layouts/GridMain'
import Header from 'next-app/src/components/Admin/Templates/Header'
import LeftNav from 'next-app/src/components/Admin/Templates/LeftNav'
import {Box, Breadcrumbs, Typography} from '@mui/material'
import Link from 'next/link'
import {NavigateNext} from '@mui/icons-material'

type DbTemplateProps = {
    children: ReactElement,
    title?: string,
    breadcrumbs?: {href: string, label: string}[]
}

function DbTemplate({children, title='대시보드', breadcrumbs}: DbTemplateProps){
    return (
        <GridMain>
            <Header />
            <LeftNav />
            <Box gridRow={'2/13'} gridColumn={'4/13'} sx={{
                padding: '1rem',
            }}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    width: '100%',
                }}>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant={'h6'} sx={{ fontWeight:700 }}>{title}</Typography>
                </Box>
                <Breadcrumbs
                            sx={{
                                display: 'flex', alignItems: 'center', height: '1rem', color: 'gray',
                                '& .MuiBreadcrumbs-separator': {
                                    margin: '0'
                                }
                            }}
                            separator={<NavigateNext sx={{ fontSize: '1rem' }} />}
                >
                    {breadcrumbs?.map(({href, label}) => (
                        <Link href={href} key={href} passHref style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                        }}>
                            <Typography variant={'caption'} sx={{ fontWeight: 500
                                ,
                                '&:hover': {
                                    color: 'primary.main',
                                    textDecoration: 'underline',
                                }
                            }}>
                                {label}
                            </Typography>
                        </Link>
                    ))}
                </Breadcrumbs>
                {children}
                </Box>
            </Box>
        </GridMain>
    )
}

export default DbTemplate;
