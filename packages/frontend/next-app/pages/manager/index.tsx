import dynamic from 'next/dynamic';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';

// const LeftNavTemplate = dynamic(
//     () => import('next-app/src/components/Manager/Layout/LeftNavTemplate'),
//     {
//         ssr: false,
//         loading: () => <p>Loading...</p>,
//     },
// );

const Schedule = dynamic(
    () => import('next-app/src/components/Manager/Schedule/Schedule'),
    {
        ssr: false,
        loading: () => <p>Loading...</p>,
    },
);

const Menu = dynamic(
    () => import('next-app/src/components/Manager/Menu/Menu'),
    { ssr: false },
);

export default function ManagerHome() {
    return (
        <LeftNavTemplate>
            <Schedule />
            <Menu />
        </LeftNavTemplate>
    );
}
