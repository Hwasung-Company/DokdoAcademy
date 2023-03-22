import {Box,  Paper, Typography} from '@mui/material'
import {useEffect, useRef} from 'react'
import dynamic from 'next/dynamic'
import useCreateValuesFromNames from 'next-app/src/hooks/input/useCreateValuesFromNames'


const MContainer = dynamic(() => import('next-app/src/components/atoms/modal/layout/MContainer'), {ssr: false})
const Title = dynamic(() => import('next-app/src/components/atoms/modal/text/Title'), {ssr: false})
const TextInput = dynamic(() => import('next-app/src/components/atoms/inputs/TextInput'), {ssr: false})
const MSelect = dynamic(() => import('next-app/src/components/atoms/inputs/MSelect'), {ssr: false})

type CreateBusProps = {
    BusCompanyId: string;
}

function CreateBus({ BusCompanyId }: CreateBusProps){
    const {values, handleChange} = useCreateValuesFromNames({names:['name', 'number', 'type', 'capacity']})

    return (
        <MContainer>
            <Title text="버스 생성" />
            <Box sx={{display: 'flex', flexDirection: 'column', gap: '1rem', mt:'1rem'}}>
                <TextInput label="버스 이름" value={values.name} onChange={handleChange('name')} placeholder={'ex)test 1호차'} required />
                <TextInput label="버스 번호" value={values.number} onChange={handleChange('number')} helperText={'실제 버스 번호를 입력해주세요.'} placeholder={'ex)12가 1234'} required />
                <MSelect label="버스 종류" value={values.type as string} onChange={handleChange('type')} options={{
                    NORMAL: '중형 버스',
                    MINIBUS: '미니 버스',
                    BIG: '대형 버스',
                }} required />
                <TextInput label="최대 탑승 인원" value={values.capacity} onChange={handleChange('capacity')} type={'number'} placeholder={'ex)50'} required />
            </Box>
        </MContainer>
    )
}

export default CreateBus
