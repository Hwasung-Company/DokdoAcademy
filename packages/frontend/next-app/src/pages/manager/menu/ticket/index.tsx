import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';
import FlexFull from 'next-app/src/components/atoms/layout/FlexFull';
import dynamic from 'next/dynamic';

const TicketDetails = dynamic(
    () => import('next-app/src/components/Manager/Details/TicketDetails'),
    { ssr: false, loading: () => <p>loading</p> },
);

export default function TicketComponent() {
    return (
        <FlexFull>
            {/* <LeftContents>
                <NameList />
            </LeftContents> */}
            <TicketDetails />
        </FlexFull>
    );
}
