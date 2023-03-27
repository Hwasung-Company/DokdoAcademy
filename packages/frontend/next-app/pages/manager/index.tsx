import dynamic from 'next/dynamic';

const LeftNavTemplate = dynamic(
    () => import('next-app/src/components/Manager/Layout/LeftNavTemplate'),
    { ssr: true },
);

const Schedule = dynamic(
    () => import('next-app/src/components/Manager/Schedule/Schedule'),
    { ssr: true },
);

const Menu = dynamic(
    () => import('next-app/src/components/Manager/Menu/Menu'),
    { ssr: true },
);

export default function ManagerHome() {
    return (
        <LeftNavTemplate>
            <Schedule />
            <Menu />
        </LeftNavTemplate>
    );
}
