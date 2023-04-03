import { DocumentNode, gql, useMutation } from '@apollo/client';
import { GET_SECTION } from './getSection';

const CREATE_SECTION = gql`
    mutation CreateSection($input: CreateSectionInput!) {
        createSection(input: $input) {
            name
            year
            sponsor
        }
    }
`;

export const createSection = () => {
    const [createSection, { data, loading, error }] = useMutation(
        CREATE_SECTION,
        {
            refetchQueries: [GET_SECTION],
        },
    );
    return {
        createSection,
        data,
        loading,
        error,
    };
};
