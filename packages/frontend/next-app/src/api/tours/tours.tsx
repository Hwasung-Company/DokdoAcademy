import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client';

const CREATE_TOUR = gql`
    mutation CreateTour($input: CreateTourInput!) {
        createTour(input: $input)
    }
`;

const GET_TOURS_BY_SECTION = gql`
    query ToursBySection($input: String!) {
        toursBySection(section_id: $input) {
            _id
            name
            createdAt
            startDate
            endDate
            description
            gatheringPlace
        }
    }
`;

const DELETE_TOUR = gql`
    mutation DeleteTour($input: DeleteTourInput!) {
        deleteTour(_id: $input)
    }
`;

const GET_TOUR_BY_ID = gql`
    query TourById($input: String!) {
        tourById(_id: $input) {
            _id
            name
            createdAt
            startDate
            endDate
            description
            gatheringPlace
            section {
                _id
                name
                sponsor
                year
            }
        }
    }
`;

export const createTourMutation = () => {
    const [createTour, { data, loading, error }] = useMutation(CREATE_TOUR, {
        refetchQueries: [GET_TOURS_BY_SECTION],
    });
    return {
        createTour,
        data,
        loading,
        error,
    };
};

export const getToursBySection = () => {
    const [query, { data, loading, error }] =
        useLazyQuery(GET_TOURS_BY_SECTION);
    return {
        data,
        loading,
        error,
        query,
    };
};

export const deleteTourMutation = () => {
    const [deleteTour, { data, loading, error }] = useMutation(DELETE_TOUR, {
        refetchQueries: [GET_TOURS_BY_SECTION],
    });
    return {
        deleteTour,
        data,
        loading,
        error,
    };
};

export const getTourById = () => {
    const [query, { data, loading, error }] = useLazyQuery(GET_TOUR_BY_ID);
    return {
        data,
        loading,
        error,
        query,
    };
};
