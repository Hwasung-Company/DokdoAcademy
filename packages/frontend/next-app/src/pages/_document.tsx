import { ServerStyleSheets } from '@mui/styles';
import Document, {
    DocumentContext,
    DocumentProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from 'next-app/src/utils/createEmotionCache';
import { AppType } from 'next/app';
import { MyAppProps } from 'next-app/src/pages/_app';

interface MyDocumentProps extends DocumentProps {
    emotionStyleTags: JSX.Element[];
}

export default function MyDocument({ emotionStyleTags }: MyDocumentProps) {
    return (
        <Html lang='ko'>
            <Head>
                {/* PWA primary color */}
                <link rel='shortcut icon' href='/favicon.ico' />
                <meta name='emotion-insertion-point' content='' />
                {/* <link
                    href='https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'
                    rel='stylesheet'
                /> */}
                {emotionStyleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
    const materialSheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (
                App: React.ComponentType<
                    React.ComponentProps<AppType> & MyAppProps
                >,
            ) =>
                function EnhanceApp(props) {
                    return <App emotionCache={cache} {...props} />;
                },
        });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        emotionStyleTags,
    };
};
