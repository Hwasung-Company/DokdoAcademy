import {gql, useQuery} from '@apollo/client'
import {useEffect} from 'react'

export const GET_BUS_COMPANIES = gql`
    query busCompanies {
        busCompanies {
            _id,
            name,
            address,
            contact,
            phone,
            }
        }
`

export interface GetBusCompanies {
    busCompanies: {
        _id: string,
        name: string,
        address: string,
        contact: string,
        phone: string,
    }[]
}

const useGetBusCompanies = () => {
    const {data, loading, error} = useQuery<GetBusCompanies>(GET_BUS_COMPANIES)
    return {
        data,
        loading,
        error,
    }
}

export default useGetBusCompanies;
