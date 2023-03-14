import {AppProps} from 'next/app';
import {Box, Container, Paper, SpeedDial, Theme} from '@mui/material';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {ApolloProvider} from '@apollo/client';
import client from '../apollo-client';
import Template from '@dokdo-academy/component/dist/template/template';
import {createContext, useEffect, useMemo, useState} from 'react';
import {Brightness4, Brightness7} from '@mui/icons-material';
import {darkThemeMui, lightThemeMui} from '@common/style';
import {CacheProvider, EmotionCache} from '@emotion/react';
import createEmotionCache from 'next-app/src/utils/createEmotionCache';

import '../styles/globals.css';
import ContextProvider from 'next-app/src/context/ContextProvider'

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
    const [colorMode, setColorMode] = useState<'light'|'dark'>('light');
    const lightTheme = createTheme({
        ...(lightThemeMui as any)
    });

    const darkTheme = createTheme({
        ...(darkThemeMui as any)
    });

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <ApolloProvider client={client}>
                <ContextProvider>
                    <ThemeProvider theme={
                        colorMode === 'light' ? lightTheme : darkTheme
                    }>
                        <CssBaseline />
                        <Box
                            component={Paper}
                            sx={{
                                backgroundColor: 'background.paper',
                                minHeight: '100vh',
                            }}>
                            <Container
                                sx={{
                                    minHeight: '100vh',
                                    minWidth: 1200,
                                }}
                            >
                                <Component {...pageProps} />
                            </Container>
                        </Box>
                        <SpeedDial
                            ariaLabel={'color mode'}
                            sx={{
                            position: 'fixed',
                            bottom: 16,
                            right: 16,
                                '& .MuiSpeedDialIcon-root': {
                                    backgroundColor: 'background.paper',
                                }
                                }}
                            icon={colorMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                            onClick={
                                ()=>{
                                    setColorMode(colorMode === 'light' ? 'dark' : 'light')
                                }}
                        />
                    </ThemeProvider>
                </ContextProvider>
            </ApolloProvider>
        </CacheProvider>
    );
}

export default MyApp;
