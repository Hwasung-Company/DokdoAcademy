import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
import RestaurantCard from 'next-app/src/components/Cards/RestaurantCard';
import dynamic from 'next/dynamic';
import MenuSection, {
    MenuSectionButton,
    MenuSectionItem,
    MenuSectionItemGrid,
} from '../../Layout/Menu/MenuSection';
import { useTempContext } from 'next-app/src/context/TempContext';

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
    const { selectGroup, menus } = useTempContext();
    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='식사 리스트'>
                <MenuSectionItemGrid>
                    {menus.map((menu: any, index: number) => {
                        return (
                            <RestaurantCard
                                key={`아카데미-${menu[0]}`}
                                restaurant={selectGroup.restaurants[index]}
                                menu={menu}
                                day={
                                    index < 3
                                        ? '1일차'
                                        : index < 6
                                        ? '2일차'
                                        : '3일차'
                                }
                                time={
                                    index % 3 === 0
                                        ? '조식'
                                        : index % 3 === 1
                                        ? '중식'
                                        : '석식'
                                }
                                count={selectGroup.participantsCount}
                            />
                        );
                    })}
                </MenuSectionItemGrid>
            </MenuSection>
        </MenuTemplate>
    );
}
