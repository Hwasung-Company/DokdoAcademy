import BusCheckCard from 'next-app/src/components/Cards/BusCheckCard';
import HotelCard from 'next-app/src/components/Cards/HotelCard';
import RestaurantCard from 'next-app/src/components/Cards/RestaurantCard';
import dynamic from 'next/dynamic';
import MenuSection, {
    MenuSectionButton,
    MenuSectionItem,
    MenuSectionItemGrid,
} from '../../Layout/Menu/MenuSection';
import { useTempContext } from 'next-app/src/context/TempContext';
import { useEffect, useState } from 'react';

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
    const { selectGroup } = useTempContext();
    const [hotelList, setHotelList] = useState([]);

    useEffect(() => {
        if (!selectGroup) return;
        const participants = selectGroup.participants.map(
            (participant: any) => {
                return {
                    name: participant[2],
                    contact: participant[4],
                    sexuality: participant[5],
                    hotel: participant[8],
                    room: participant[9],
                };
            },
        );

        const groupHotelList = participants.reduce((acc: any, cur: any) => {
            if (acc[cur.hotel]) {
                acc[cur.hotel].push(cur);
            } else {
                acc[cur.hotel] = [cur];
            }
            return acc;
        }, {});

        const countRoom = (hotel: any) => {
            const count = {
                single: 0,
                twin: 0,
                triple: 0,
                total: 0,
            };

            Object.values(hotel).forEach((room: any) => {
                room.length === 1 ? count.single++ : null;
                room.length === 2 ? count.twin++ : null;
                room.length === 3 ? count.triple++ : null;
                count.total += room.length;
            });

            return count;
        };

        const groupSameRoom = (hotel: any) => {
            const roomList = hotel.reduce((acc: any, cur: any) => {
                if (acc[cur.room]) {
                    acc[cur.room].push(cur);
                } else {
                    acc[cur.room] = [cur];
                }
                return acc;
            }, {});

            roomList.count = countRoom(roomList);

            return roomList;
        };

        for (const hotel in groupHotelList) {
            groupHotelList[hotel] = groupSameRoom(groupHotelList[hotel]);
        }

        console.log(groupHotelList);

        setHotelList(groupHotelList);
    }, [selectGroup]);

    return (
        <MenuTemplate>
            <TourInformation />
            <MenuSection title='숙소 리스트'>
                <MenuSectionItemGrid>
                    {Object.keys(hotelList).map((hotel: any) => {
                        return (
                            <HotelCard
                                hotel={hotel}
                                roomList={hotelList[hotel]}
                            />
                        );
                    })}
                </MenuSectionItemGrid>
            </MenuSection>
        </MenuTemplate>
    );
}
