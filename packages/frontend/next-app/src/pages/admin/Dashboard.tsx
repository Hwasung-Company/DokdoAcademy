import dynamic from 'next/dynamic';

const AdminDashboard = dynamic(
    () => import('next-app/src/components/Admin/dashboard'),
    { ssr: true },
);

function Dashboard() {
    return <AdminDashboard />;
}

export default Dashboard;
