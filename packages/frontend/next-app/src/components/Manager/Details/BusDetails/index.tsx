import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
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

export default function BusDetails() {
    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='버스정보'>
                <MenuSectionItemGrid>
                    <MenuSectionItem title='담당호차' text='1호차' />
                    <MenuSectionItem title='총원' text='32명' />
                </MenuSectionItemGrid>
            </MenuSection>
            <MenuSection title='탑승 인원 확인'>
                <MenuSectionItemGrid title='탑승 인원 확인'>
                    <MenuSectionItem title='탑승' text='2명' success={true} />
                    <MenuSectionItem title='미탑승' text='30명' error={true} />
                    <MenuSectionItem title='총원' text='32명' />
                    <MenuSectionButton
                        title='일괄 체크'
                        onClick={() => {
                            console.log('탑승 인원 확인');
                        }}
                    />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid title='탑승인원 체크리스트'>
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                    <BusCheckCard />
                </MenuSectionItemGrid>
            </MenuSection>
        </MenuTemplate>
    );
}
