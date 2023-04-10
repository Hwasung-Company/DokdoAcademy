import BusDetails from 'next-app/src/components/Manager/Details/BusDetails';
import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';

export default function BusComponent() {
    return (
        <LeftNavTemplate>
            <LeftContents>
                <NameList />
            </LeftContents>
            <BusDetails />
        </LeftNavTemplate>
    );
}
