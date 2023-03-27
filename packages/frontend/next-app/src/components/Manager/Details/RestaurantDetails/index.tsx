import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
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

export default function RestaurantDetails() {
    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='식사 리스트'>
                <MenuSectionItemGrid title='1일차'>
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid title='2일차'>
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid title='3일차'>
                    <RestaurantCard />
                    <RestaurantCard />
                    <RestaurantCard />
                </MenuSectionItemGrid>
            </MenuSection>
        </MenuTemplate>
    );
}
