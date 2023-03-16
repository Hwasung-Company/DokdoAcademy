import {gql, useMutation} from '@apollo/client'
import {useEffect} from 'react'
import {useSnackContext} from 'next-app/src/context/SnackContext'


const DELETE_BUS_COMPANIES = gql`
    mutation deleteBusCompanies($input:DeleteBusCompanyInputs!) {
        deleteBusCompanies(input:$input){
            ok
            error
            message
        }
    }
`



const deleteBusCompany = () => {
    const snack = useSnackContext()
    const [func, {data, loading, error}] = useMutation(DELETE_BUS_COMPANIES,{
        onCompleted: (data) => {
            if(data.deleteBusCompanies.ok){
                snack.openSnack(data.deleteBusCompanies.message, 'success')
            }else{
                snack.openSnack(data.deleteBusCompanies.message, 'error')
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

export default deleteBusCompany;
