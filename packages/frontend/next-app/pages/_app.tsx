import {AppProps} from 'next/app'
import {createTheme, CssBaseline, GlobalStyles, SpeedDial} from '@mui/material'
import {ApolloProvider} from '@apollo/client'
import client from '../apollo-client'
import Template from '@dokdo-academy/component/dist/template/template'
import {ThemeProvider} from '@mui/styles'
import {createContext, useMemo, useState} from 'react'
import {Brightness4, Brightness7} from '@mui/icons-material'
import {darkThemeMui, lightThemeMui} from '@common/style'

export const ColorThemeContext = createContext({
    toggleColorMode: () => {}
})

function MyApp({ Component, pageProps }: AppProps) {
    const [colorMode, setColorMode] = useState<'light'|'dark'>('light');
    const mode = useMemo(()=>({
        toggleColorMode: () => {
            setColorMode((prev) => prev === 'light' ? 'dark' : 'light')
        }
        }),[])

    const theme = useMemo(() => createTheme({
        palette: {
            mode: colorMode,
            ...(colorMode === 'light' ? lightThemeMui.palette : darkThemeMui.palette)
        }}), [colorMode]);

    return (
        <>
            <GlobalStyles styles={{
                '*': {
                    fontFamily: 'Noto Sans KR, Noto Sans, sans-serif',
                    transition: 'color 0.3s, background-color 0.3s'
                }
            }}/>
            <ApolloProvider client={client}>
                <ColorThemeContext.Provider value={mode}>
                    <ThemeProvider theme={theme}>
                        <CssBaseline />
                        <Template>
                            <Component {...pageProps} />
                        </Template>
                        <SpeedDial ariaLabel={'color mode'} sx={{
                            position: 'fixed',
                            bottom: 16,
                            right: 16,
                            '& .MuiSpeedDialIcon-root': {
                                backgroundColor: 'background.paper',
                            }
                        }}
                       icon={colorMode === 'light' ? <Brightness7 /> : <Brightness4 />}
                       onClick={mode.toggleColorMode} />
                    </ThemeProvider>
                </ColorThemeContext.Provider>
            </ApolloProvider>
        </>
    );
}

export default MyApp;
