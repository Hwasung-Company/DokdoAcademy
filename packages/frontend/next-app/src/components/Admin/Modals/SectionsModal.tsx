import { Delete, Done } from '@mui/icons-material';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { Section } from 'nest-app/sections/entities/sections.entity';
import { createSection } from 'next-app/src/api/sections/createSection';
import { getSection } from 'next-app/src/api/sections/getSection';
import { useModal } from 'next-app/src/context/ModalContext';
import { useSnack } from 'next-app/src/context/SnackContext';
import { useState } from 'react';
import FlexFull from '../../atoms/layout/FlexFull';
import TabWithBorder from '../../atoms/layout/TabWithBorder';
import ListTable from '../../atoms/layout/table/ListTable';
import MContainer from '../../atoms/modal/layout/MContainer';
import { deleteSection } from 'next-app/src/api/sections/deleteSection';

export default function SectionsModal({
    setSection,
}: {
    setSection: (section: Section) => void;
}) {
    const tabs = [<SectionList setSection={setSection} />, <SectionCreate />];

    return (
        <MContainer>
            <TabWithBorder tabs={tabs} labels={['섹션 선택', '섹션 추가']} />
        </MContainer>
    );
}

const SectionList = ({
    setSection,
}: {
    setSection: (section: Section) => void;
}) => {
    const { data, loading, error } = getSection();

    const [selected, setSelected] = useState<Section | null>(null);
    const { closeModal } = useModal();
    const { deleteSection: deleteFunction } = deleteSection();
    const openSnack = useSnack();

    return (
        <FlexFull>
            <ListTable
                sx={{
                    overflowY: 'scroll',
                    height: '20rem',
                }}
            >
                <Box>
                    <Box>
                        <Typography variant='body2'>이름</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>협업기관</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>년도</Typography>
                        <Typography variant='caption'>등록일정</Typography>
                    </Box>
                    <Box>
                        <Typography variant='body2'>선택</Typography>
                    </Box>
                </Box>
                {data?.sections.map((section: any) => (
                    <Box
                        key={'sectoin-' + section.name}
                        className='mouse_hover'
                    >
                        {!section.tours && (
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    '&:hover': {
                                        backgroundColor: 'transparent',
                                        color: 'error.main',
                                    },
                                }}
                                onClick={() => {
                                    confirm('정말 삭제하시겠습니까?') &&
                                        deleteFunction({
                                            variables: { input: section._id },
                                        }).then(() => {
                                            openSnack(
                                                section.name +
                                                    ' 섹선이 삭제되었습니다.',
                                                'warning',
                                            );
                                        });
                                }}
                            >
                                <Delete sx={{ fontSize: '0.9rem' }} />
                            </IconButton>
                        )}
                        <Box>
                            <Typography variant='body2'>
                                {section.name}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2'>
                                {section.sponsor}
                            </Typography>
                        </Box>
                        <Box>
                            <Typography variant='body2'>
                                {section.year}
                            </Typography>
                            <Typography variant='caption'>
                                {section.tours ? section.tours.length : 0} 개
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton
                                onClick={() => {
                                    setSelected(section);
                                }}
                                color={
                                    selected && selected?.name === section.name
                                        ? 'success'
                                        : 'default'
                                }
                            >
                                <Done />
                            </IconButton>
                        </Box>
                    </Box>
                ))}
                {data?.sections.length === 0 && (
                    <Box sx={{ textAlign: 'center' }} className='center'>
                        <Typography variant='body2'>
                            등록된 섹션이 없습니다.
                        </Typography>
                    </Box>
                )}
            </ListTable>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: '1rem',
                }}
            >
                <Button
                    variant='contained'
                    onClick={() => {
                        if (selected) {
                            setSection(selected);
                        }
                        closeModal();
                    }}
                >
                    확인
                </Button>
            </Box>
        </FlexFull>
    );
};

const SectionCreate = () => {
    const [name, setName] = useState('');
    const [year, setYear] = useState(new Date().toISOString().slice(0, 7));
    const [sponsor, setSponsor] = useState('독도박물관');
    const openSnack = useSnack();

    const { createSection: mutate, loading, error } = createSection();

    const handleSubmit = () => {
        mutate({
            variables: { input: { name, year: +year.split('-')[0], sponsor } },
        }).then((res) => {
            console.log(res);
            openSnack(
                res.data.createSection.name + ' 섹션을 추가했습니다.',
                'success',
            );
        });
    };

    return (
        <FlexFull
            sx={{
                gap: '1rem',
                height: '23.75rem',
            }}
        >
            <TextField
                label={'섹션 이름'}
                value={name}
                name='section'
                onChange={(e) => setName(e.target.value)}
            />
            <TextField
                label={'운영 연도'}
                value={year}
                type='month'
                onChange={(e) => setYear(e.target.value)}
                helperText='날짜를 선택하면 자동으로 해당 연도로 설정됩니다.'
            />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    bottom: '1rem',
                    position: 'absolute',
                    right: '1rem',
                }}
            >
                <Button variant={'contained'} onClick={handleSubmit}>
                    섹션 추가
                </Button>
            </Box>
        </FlexFull>
    );
};
