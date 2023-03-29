import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';
import dynamic from 'next/dynamic';

const TicketDetails = dynamic(
    () => import('next-app/src/components/Manager/Details/TicketDetails'),
    { ssr: false, loading: () => <p>loading</p> },
);

export default function TicketComponent() {
    return (
        <LeftNavTemplate>
            <LeftContents>
                <NameList />
            </LeftContents>
            <TicketDetails />
        </LeftNavTemplate>
    );
}
