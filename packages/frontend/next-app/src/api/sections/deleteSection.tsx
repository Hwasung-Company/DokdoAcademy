import { gql, useMutation } from '@apollo/client';
import { GET_SECTION } from './getSection';

const DELETE_SECTION = gql`
    mutation DeleteSection($input: String!) {
        deleteSection(_id: $input)
    }
`;

export const deleteSection = () => {
    const [deleteSection, { data, loading, error }] = useMutation(
        DELETE_SECTION,
        {
            refetchQueries: [GET_SECTION],
        },
    );
    return {
        deleteSection,
        data,
        loading,
        error,
    };
};
