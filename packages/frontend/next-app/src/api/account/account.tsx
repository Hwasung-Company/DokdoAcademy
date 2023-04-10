import { gql, useMutation } from '@apollo/client';

const CREATE_ACCOUNT = gql`
    mutation createAccount($input: CreateAccountInput!) {
        createAccount(input: $input) {
            ok
            error
        }
    }
`;

export const createAccountMutation = () => {
    const [createAccount, { data }] = useMutation(CREATE_ACCOUNT);
    return { createAccount, data };
};
