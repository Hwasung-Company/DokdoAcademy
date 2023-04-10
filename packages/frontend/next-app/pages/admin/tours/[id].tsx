import dynamic from 'next/dynamic';

const TourDetailComponent = dynamic(
    () => import('next-app/src/components/Admin/TourDetail/TourDetail'),
    { ssr: false },
);

export default function TourDetail() {
    return <TourDetailComponent />;
}
