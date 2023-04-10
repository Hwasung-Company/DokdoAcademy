import RestaurantDetails from 'next-app/src/components/Manager/Details/RestaurantDetails';
import LeftContents from 'next-app/src/components/Manager/Layout/LeftContents';
import LeftNavTemplate from 'next-app/src/components/Manager/Layout/LeftNavTemplate';
import NameList from 'next-app/src/components/Manager/NameList/NameList';

export default function RestaurantComponent() {
    return (
        <LeftNavTemplate>
            <LeftContents>
                <NameList />
            </LeftContents>
            <RestaurantDetails />
        </LeftNavTemplate>
    );
}
