import { gql, useLazyQuery, useMutation } from '@apollo/client';

const CREATE_RECEIPT = gql`
    mutation CreateReceipt($input: CreateReceiptInput!) {
        createReceipt(input: $input)
    }
`;

const GET_RECEIPTS = gql`
    query GetReceipts {
        receipts {
            _id
            name
            item
            price
            count
            total
            date
            image
        }
    }
`;

const GET_ONE_RECEIPT = gql`
    query GetOneReceipt($input: GetReceiptInput!) {
        getOneReceipt(input: $input) {
            _id
            name
            item
            price
            count
            total
            date
            image
        }
    }
`;

export const createReceiptMutation = () => {
    const [createReceipt, { data, loading, error }] =
        useMutation(CREATE_RECEIPT);
    return { createReceipt, data, loading, error };
};

export const getReceiptsQuery = () => {
    const [getReceipts, { data, loading, error }] = useLazyQuery(GET_RECEIPTS);
    return { getReceipts, data, loading, error };
};

export const getOneReceiptQuery = () => {
    const [getOneReceipt, { data, loading, error }] =
        useLazyQuery(GET_ONE_RECEIPT);
    return { getOneReceipt, data, loading, error };
};
