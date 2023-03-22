import {gql, useQuery} from '@apollo/client'
import {useEffect} from 'react'
import {GetBusCompanies} from 'next-app/src/api/companies/getBusCompanies'
import {Bus} from 'nest-app/dist/companies/entities/objects/bus.entity'

export const GET_BUS_COMPANY = gql`
    query busCompany($input:String!){
        busCompany(name:$input) {
            _id
            name
            address
            contact
            phone
            email
            buses {
                _id
                name
                seats
                price
            }
            createdAt
            updatedAt
        }
    }
`

export interface GetBusCompany {
    busCompany: {
        _id: string,
        name: string,
        address: string,
        contact: string,
        phone: string,
        email: string,
        buses: {
            _id: string,
            name: string,
            seats: number,
            price: number,
        }[],
        createdAt: string,
        updatedAt: string,
    }
}

const getBusCompany = (name:string) => {
    const {data, loading, error} = useQuery<GetBusCompany, {
        input: string,
    }>(GET_BUS_COMPANY, {
        variables: {
            input: name,
        }
    })
    return {
        data,
        loading,
        error,
    }
}

export default getBusCompany;
