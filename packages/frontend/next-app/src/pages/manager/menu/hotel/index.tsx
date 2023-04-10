import HotelDetails from 'next-app/src/components/Manager/Details/HotelDetails';
import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';

export default function HotelComponent() {
    return (
        <LeftNavTemplate>
            <LeftContents>
                <NameList />
            </LeftContents>
            <HotelDetails />
        </LeftNavTemplate>
    );
}
