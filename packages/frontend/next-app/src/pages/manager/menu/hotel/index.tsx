import HotelDetails from 'next-app/src/components/Manager/Details/HotelDetails';
import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';
import FlexFull from 'next-app/src/components/atoms/layout/FlexFull';

export default function HotelComponent() {
    return (
        <FlexFull>
            {/* <LeftContents>
                <NameList />
            </LeftContents> */}
            <HotelDetails />
        </FlexFull>
    );
}
