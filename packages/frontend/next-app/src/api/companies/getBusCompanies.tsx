import {gql, useQuery} from '@apollo/client'
import {useEffect} from 'react'

export const GET_BUS_COMPANIES = gql`
    query busCompanies($input:GetBusCompaniesInput!) {
        busCompanies(input:$input) {
                data {
                    _id
                    name
                    address
                    contact
                    phone
                }
                total
                page
                totalPage
            }
        }
`

export interface GetBusCompanies {
    busCompanies: {
        data: { _id: string, name: string, address: string, contact: string, phone: string }[],
        total: number,
        page: number,
        totalPage: number,
    }
}

const getBusCompanies = (page=1) => {
    const {data, loading, error} = useQuery<GetBusCompanies, {
        input: {
            page: number,
        }
    }>(GET_BUS_COMPANIES, {
        variables: {
            input: {
                page,
            }
        }
    })
    return {
        data,
        loading,
        error,
    }
}

export default getBusCompanies;
