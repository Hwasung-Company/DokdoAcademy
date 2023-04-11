import { useEffect } from 'react';
import ManagerHome from './manager';
import { useRouter } from 'next/router';

export default function TempHome() {
    const router = useRouter();
    useEffect(() => {
        router.push('/manager');
    }, []);
    return <ManagerHome />;
}
