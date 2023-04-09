import { gql, useLazyQuery, useMutation } from '@apollo/client';

const CREATE_PARTICIPANT = gql`
    mutation createParticipants($input: CreateParticipantsInput!) {
        createParticipants(input: $input)
    }
`;

const GET_PARTICIPANTS = gql`
    query getParticipants($tour_id: String!) {
        getParticipants(tour_id: $tour_id) {
            _id
            name
            contact
            sexuality
            age
            birth
            company
            companyGroup
            department
            position
            tour {
                name
            }
        }
    }
`;

const DELETE_PARTICIPANTS = gql`
    mutation deleteParticipants($tour_id: String!) {
        deleteParticipants(tour_id: $tour_id)
    }
`;

export const useParticipants = (tourId: string) => {
    const [query, { data, loading, error }] = useLazyQuery(GET_PARTICIPANTS, {
        variables: { tour_id: tourId },
    });
    return {
        query,
        data,
        loading,
        error,
    };
};

export const createParticipantsMutation = () => {
    const [mutate, { data, loading, error }] = useMutation(CREATE_PARTICIPANT, {
        refetchQueries: [GET_PARTICIPANTS],
    });
    return {
        createParticipants: mutate,
        data,
        loading,
        error,
    };
};

export const deleteParticipantsMutation = () => {
    const [mutate, { data, loading, error }] = useMutation(
        DELETE_PARTICIPANTS,
        {
            refetchQueries: [GET_PARTICIPANTS],
        },
    );
    return {
        deleteParticipants: mutate,
        data,
        loading,
        error,
    };
};
