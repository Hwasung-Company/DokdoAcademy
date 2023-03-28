import { CameraAlt } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import ButtonWithIcon from '../../atoms/flex/ButtonWithIcon';
import MContainer from '../../atoms/modal/layout/MContainer';
import Title from '../../atoms/modal/text/Title';
import MenuSection, {
    MenuSectionItem,
    MenuSectionItemGrid,
    MenuSectionItemWithIncDec,
    MenuSectionSelection,
} from '../Layout/Menu/MenuSection';

const restaurantList: Restaurant[] = [
    {
        _id: '123456',
        name: 'test',
        menus: [
            { _id: '123456', name: '엉겅퀴 해장국', price: 10000 },
            { _id: '123456', name: '약소구이', price: 10000 },
        ],
    },
    {
        _id: '123456',
        name: 'test2',
        menus: [
            {
                _id: '123456',
                name: 'test1',
                price: 10000,
            },
            { _id: '123456', name: 'test2', price: 10000 },
        ],
    },
];

type Restaurant = {
    _id: string;
    name: string;
    menus: Menu[];
};

type Menu = {
    _id: string;
    name: string;
    price: number;
};

export default function RestaurantReceiptModal() {
    const [restaurants, setRestaurants] =
        useState<Restaurant[]>(restaurantList);
    const [menus, setMenus] = useState<Menu[]>(restaurantList[0].menus);
    const [restaurant, setRestaurant] = useState<Restaurant>(restaurantList[0]);
    const [menu, setMenu] = useState<Menu>(restaurant.menus[0]);
    const [count, setCount] = useState<number>(1);

    useEffect(() => {
        setMenus(restaurant.menus);
        setMenu(menus[0]);
    }, [restaurant]);

    return (
        <MContainer>
            <Title text='식당 영수증 등록' />
            <Box sx={{ mt: '1rem' }}>
                <MenuSectionItemGrid>
                    <MenuSectionSelection<Restaurant>
                        title='식당'
                        items={restaurants}
                        selected={restaurant}
                        displayKey='name'
                        onChange={setRestaurant}
                        key='_id'
                    />
                    <MenuSectionSelection<Menu>
                        title='메뉴'
                        items={menus}
                        selected={menu}
                        displayKey='name'
                        onChange={setMenu}
                        key='_id'
                        subText={menu ? menu.price.toLocaleString() + '원' : ''}
                    />
                    <MenuSectionItemWithIncDec
                        title='식수인원'
                        value={count}
                        inc={() => {
                            setCount(count + 1);
                        }}
                        dec={() => {
                            if (count > 1) {
                                setCount(count - 1);
                            }
                        }}
                    />
                    <MenuSectionItem
                        title='총 결제금액'
                        text={
                            menu
                                ? (menu.price * count).toLocaleString() + '원'
                                : ''
                        }
                        subText={
                            menu
                                ? menu.price.toLocaleString() + ' x ' + count
                                : ''
                        }
                    />
                </MenuSectionItemGrid>
                <Box
                    sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            height: '20rem',
                            border: '1px solid #E5E5E5',
                            // borderRadius: '1rem',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Typography variant='caption'>
                            사진을 등록해주세요.
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            margin: '1rem 0',
                            height: '4rem',
                            width: '100%',
                        }}
                    >
                        <ButtonWithIcon
                            text='사진 등록'
                            icon={<CameraAlt />}
                            onClick={() => {
                                console.log('사진 등록');
                            }}
                            justifyContent='center'
                        />
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        mt: '1rem',
                    }}
                >
                    <Button variant='outlined'>취소</Button>
                    <Button variant='contained' sx={{ ml: '1rem' }}>
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}
