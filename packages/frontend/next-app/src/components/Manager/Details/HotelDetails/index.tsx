import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
import HotelCard from 'next-app/src/components/Cards/HotelCard';
import RestaurantCard from 'next-app/src/components/Cards/RestaurantCard';
import dynamic from 'next/dynamic';
import MenuSection, {
    MenuSectionButton,
    MenuSectionItem,
    MenuSectionItemGrid,
} from '../../Layout/Menu/MenuSection';

const MenuTemplate = dynamic(
    () => import('next-app/src/components/Manager/Layout/Menu/MenuTemplate'),
    {
        ssr: false,
    },
);

const TourInformation = dynamic(
    () => import('next-app/src/components/Manager/Menu/TourInformation'),
    {
        ssr: false,
    },
);

export default function HotelDetails() {
    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='숙소 리스트'>
                <MenuSectionItemGrid>
                    <HotelCard />
                    <HotelCard />
                    <HotelCard />
                </MenuSectionItemGrid>
            </MenuSection>
        </MenuTemplate>
    );
}
