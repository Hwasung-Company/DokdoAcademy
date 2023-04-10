import dynamic from 'next/dynamic';

const LeftNavTemplate = dynamic(
    () => import('next-app/src/components/Manager/Layout/LeftNavTemplate'),
    { ssr: true },
);

const ToursComponent = dynamic(
    () => import('next-app/src/components/Manager/Tours/ToursComponent'),
    { ssr: true },
);

export default function Tours() {
    return (
        <LeftNavTemplate>
            <ToursComponent />
        </LeftNavTemplate>
    );
}
