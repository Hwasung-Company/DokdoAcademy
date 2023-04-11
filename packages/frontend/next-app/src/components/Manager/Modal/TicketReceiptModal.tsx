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
import { useModal } from 'next-app/src/context/ModalContext';
import {
    createReceiptMutation,
    getOneReceiptQuery,
} from 'next-app/src/api/receipt/receipt';
import { useSnack } from 'next-app/src/context/SnackContext';
import { useTempContext } from 'next-app/src/context/TempContext';
import imageToBase64 from 'next-app/src/utils/imageToBase64';

export default function TicketReceiptModal({ name, price, count }: any) {
    const [total, setTotal] = useState<number>(price * count);
    const [countState, setCountState] = useState<number>(count);

    useEffect(() => {
        setTotal(price * countState);
    }, [countState]);

    const { closeModal } = useModal();

    const [image, setImage] = useState<string | null>(null);

    const { createReceipt, data } = createReceiptMutation();
    const { getOneReceipt, data: getOneReceiptData } = getOneReceiptQuery();
    const openSnackBar = useSnack();

    const { selectGroup } = useTempContext();

    useEffect(() => {
        if (getOneReceiptData) {
            setImage(getOneReceiptData.getOneReceipt.image);
        }
    }, [getOneReceiptData]);

    useEffect(() => {
        getOneReceipt({
            variables: {
                input: {
                    name: selectGroup.name + '-' + name,
                    item: name,
                },
            },
        });
    }, []);

    const handleCreateReceipt = () => {
        if (!image) {
            alert('영수증 사진을 등록해주세요.');
            return;
        }
        createReceipt({
            variables: {
                input: {
                    name: selectGroup.name + '-' + name,
                    item: name,
                    price: price,
                    count: count,
                    image: image,
                    total: price * count,
                    date: new Date(),
                },
            },
        }).then(() => {
            openSnackBar('영수증 등록이 완료되었습니다.', 'success');
            closeModal();
        });
    };

    return (
        <MContainer>
            <Title text='영수증 등록' />
            <Box sx={{ mt: '1rem' }}>
                <MenuSectionItemGrid>
                    <MenuSectionItem title='관광지' text={name} />
                    <MenuSectionItemWithIncDec
                        title='인원'
                        value={countState}
                        inc={() => {
                            setCountState(countState + 1);
                        }}
                        dec={() => {
                            setCountState(countState - 1);
                        }}
                    />
                    <MenuSectionItem
                        title='금액'
                        text={price.toLocaleString() + '원'}
                    />
                    <MenuSectionItem
                        title='총 결제금액'
                        text={total.toLocaleString() + '원'}
                        subText={
                            price.toLocaleString() + '원 x ' + countState + '명'
                        }
                    />
                </MenuSectionItemGrid>
                <MenuSectionItemGrid title='결제 영수증 등록'>
                    <></>
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
                            backgroundImage: `url(${image})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                        }}
                    >
                        {image ? null : (
                            <Typography variant='caption'>
                                사진을 등록해주세요.
                            </Typography>
                        )}
                    </Box>
                    <Box
                        sx={{
                            margin: '1rem 0',
                            height: '4rem',
                            width: '100%',
                        }}
                    >
                        <label htmlFor='receipt-image'>
                            <ButtonWithIcon
                                text='사진 등록'
                                icon={<CameraAlt />}
                                onClick={() => {
                                    console.log('사진 등록');
                                }}
                                justifyContent='center'
                            />
                        </label>
                        <input
                            type='file'
                            accept='image/*'
                            id='receipt-image'
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (file) {
                                    const result = imageToBase64(file);
                                    result.then((res) => {
                                        setImage(res);
                                    });
                                }
                            }}
                            style={{ display: 'none' }}
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
                    <Button
                        variant='outlined'
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        취소
                    </Button>
                    <Button
                        variant='contained'
                        sx={{ ml: '1rem' }}
                        onClick={handleCreateReceipt}
                    >
                        확인
                    </Button>
                </Box>
            </Box>
        </MContainer>
    );
}
