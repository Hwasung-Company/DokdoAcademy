import { CameraAlt } from '@mui/icons-material';
import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
import { useModal } from 'next-app/src/context/ModalContext';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import MenuSection, {
    MenuSectionButton,
    MenuSectionButtonWithIcon,
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

const BusPicModal = dynamic(
    () => import('next-app/src/components/Manager/Modal/BusPicModal'),
    {
        ssr: false,
    },
);

export default function BusDetails() {
    const { setModal, openModal, closeModal } = useModal();
    const { selectGroup } = useTempContext();
    const [checkList, setCheckList] = useState([]);
    const [unCheckList, setUnCheckList] = useState([]);

    useEffect(() => {
        setCheckList([]), setUnCheckList(selectGroup.participants);
    }, [selectGroup]);

    const handleModal = () => {
        setModal(<BusPicModal />);
        openModal();
    };

    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='버스정보'>
                <MenuSectionItemGrid>
                    <MenuSectionItem title='담당호차' text={selectGroup.name} />
                    <MenuSectionItem
                        title='총원'
                        text={selectGroup.participants.length + '명'}
                    />
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
                    <MenuSectionItem
                        title='탑승'
                        text={checkList.length + '명'}
                        success={true}
                    />
                    <MenuSectionItem
                        title='미탑승'
                        text={unCheckList.length + '명'}
                        error={true}
                    />
                    <MenuSectionItem
                        title='총원'
                        text={selectGroup.participants.length + '명'}
                    />
                    <MenuSectionButton
                        title='일괄 체크'
                        onClick={() => {
                            if (unCheckList.length === 0) {
                                setCheckList([]);
                                setUnCheckList(selectGroup.participants);
                            } else {
                                setCheckList([...checkList, ...unCheckList]);
                                setUnCheckList([]);
                            }
                        }}
                    />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid title='탑승인원 체크리스트'>
                    {unCheckList.map((participant) => (
                        <BusCheckCard
                            key={participant[0]}
                            company={participant[1]}
                            name={participant[2]}
                            contact={participant[4]}
                            sexuality={participant[5]}
                            onClick={() => {
                                setCheckList([...checkList, participant]);
                                setUnCheckList(
                                    unCheckList.filter(
                                        (item) => item[0] !== participant[0],
                                    ),
                                );
                            }}
                            checked={false}
                        />
                    ))}
                    {checkList.map((participant) => (
                        <BusCheckCard
                            key={participant[0]}
                            company={participant[1]}
                            name={participant[2]}
                            contact={participant[4]}
                            sexuality={participant[5]}
                            onClick={() => {
                                setUnCheckList([...unCheckList, participant]);
                                setCheckList(
                                    checkList.filter(
                                        (item) => item[0] !== participant[0],
                                    ),
                                );
                            }}
                            checked={true}
                        />
                    ))}
                </MenuSectionItemGrid>
            </MenuSection>
        </MenuTemplate>
    );
}
