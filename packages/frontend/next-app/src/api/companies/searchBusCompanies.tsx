import {gql, useQuery} from '@apollo/client'

const SEARCH_BUS_COMPANIES = gql`
    query searchBusCompanies($input:SearchBusCompaniesInput!){
        searchBusCompanies(input: $input){
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

interface SearchBusCompanies {
    searchBusCompanies: {
        data: { _id: string, name: string, address: string, contact: string, phone: string }[],
        total: number,
        page: number,
        totalPage: number,
    }
}

const searchBusCompanies = (search='') => {
    const {data, loading, error} = useQuery<SearchBusCompanies, {
        input: {
            name: string,
        }
    }>(SEARCH_BUS_COMPANIES, {
        variables: {
            input: {
                name:search,
            }
        }
    })
    return {
        data,
        loading,
        error,
    }
}

export default searchBusCompanies;
