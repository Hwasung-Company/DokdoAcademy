import TicketDetails from 'next-app/src/components/Manager/Details/TicketDetails';
import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';

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
