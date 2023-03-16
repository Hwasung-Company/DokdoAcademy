import {gql, useMutation} from '@apollo/client'
import {useEffect} from 'react'
import {useSnackContext} from 'next-app/src/context/SnackContext'


const CREATE_BUS_COMPANY = gql`
    mutation createBusCompany($input:CreateBusCompanyInput!) {
        createBusCompany(input:$input){
            ok
            error
            message
        }
    }
`


const useCreateBusCompany = () => {
    const snack = useSnackContext()
    const [func, {data, loading, error}] = useMutation(CREATE_BUS_COMPANY,{
        onCompleted: (data) => {
            if(!data.createBusCompany.ok){
                snack.openSnack(data.createBusCompany.error, 'error');
            }
        },
        refetchQueries: ['busCompanies']
    })

    return {
        func,
        data,
        loading,
        error,
    }
}

export default useCreateBusCompany;
