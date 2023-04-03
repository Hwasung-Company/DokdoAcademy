import { gql, useQuery } from '@apollo/client';

export const GET_SECTION = gql`
    query Section {
        sections {
            _id
            name
            year
            sponsor
            tours {
                _id
                name
                createdAt
                startDate
                endDate
            }
        }
    }
`;

export const getSection = () => {
    const { data, loading, error } = useQuery(GET_SECTION);
    return {
        data,
        loading,
        error,
    };
};
