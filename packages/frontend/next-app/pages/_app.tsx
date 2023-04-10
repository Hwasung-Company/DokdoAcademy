import { darkThemeMui, lightThemeMui } from '@common/style';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { Box, Paper, SpeedDial } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import createEmotionCache from 'next-app/src/utils/createEmotionCache';
import { AppProps } from 'next/app';
import { useEffect, useState } from 'react';

import ContextProvider from 'next-app/src/context/ContextProvider';
import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;
    const [colorMode, setColorMode] = useState<'light' | 'dark'>();
    const lightTheme = createTheme({
        ...(lightThemeMui as any),
    });

    const darkTheme = createTheme({
        ...(darkThemeMui as any),
    });

    useEffect(() => {
        setColorMode('light');
    }, []);

    return (
        <CacheProvider value={clientSideEmotionCache}>
            <CssBaseline />
            <ThemeProvider
                theme={
                    colorMode === 'light' || !colorMode ? lightTheme : darkTheme
                }
            >
                <ContextProvider>
                    <Box
                        component={Paper}
                        sx={{
                            minHeight: '100vh',
                            boxShadow: 'none',
                        }}
                    >
                        {!colorMode ? <></> : <Component {...pageProps} />}
                    </Box>
                    <SpeedDial
                        ariaLabel={'color mode'}
                        sx={{
                            position: 'fixed',
                            bottom: 16,
                            left: 16,
                            '& .MuiSpeedDialIcon-root': {
                                backgroundColor: 'background.paper',
                            },
                            zIndex: 1000,
                        }}
                        icon={
                            colorMode === 'light' ? (
                                <Brightness7 />
                            ) : (
                                <Brightness4 />
                            )
                        }
                        onClick={() => {
                            setColorMode(
                                colorMode === 'light' ? 'dark' : 'light',
                            );
                        }}
                    />
                </ContextProvider>
            </ThemeProvider>
        </CacheProvider>
    );
}

export default MyApp;
