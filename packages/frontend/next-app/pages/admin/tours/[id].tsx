import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

const TourDetailComponent = dynamic(
    () => import('next-app/src/components/Admin/TourDetail/TourDetail'),
    { ssr: false },
);

export default function TourDetail() {
    return <TourDetailComponent />;
}
