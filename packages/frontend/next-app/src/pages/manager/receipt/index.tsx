import dynamic from 'next/dynamic';

const LeftNavTemplate = dynamic(
    () => import('next-app/src/components/Manager/Layout/LeftNavTemplate'),
    { ssr: true },
);

const ReceiptsComponent = dynamic(
    () => import('next-app/src/components/Manager/Receipts/ReceiptsComponent'),
    { ssr: true },
);

export default function Receipt() {
    return (
        <LeftNavTemplate>
            <ReceiptsComponent />
        </LeftNavTemplate>
    );
}
