import { CameraAlt } from '@mui/icons-material';
import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
import { useModal } from 'next-app/src/context/ModalContext';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import MenuSection, {
    MenuSectionButton,
    MenuSectionButtonWithIcon,
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

const BusPicModal = dynamic(
    () => import('next-app/src/components/Manager/Modal/BusPicModal'),
    {
        ssr: false,
    },
);

export default function BusDetails() {
    const { setModal, openModal, closeModal } = useModal();

    const handleModal = () => {
        setModal(<BusPicModal />);
        openModal();
    };

    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='버스정보'>
                <MenuSectionItemGrid>
                    <MenuSectionItem title='담당호차' text='1호차' />
                    <MenuSectionItem title='총원' text='32명' />
                    <MenuSectionButtonWithIcon
                        title='버스 사진 등록'
                        icon={<CameraAlt />}
                        onClick={handleModal}
                        span='2'
                    />
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
