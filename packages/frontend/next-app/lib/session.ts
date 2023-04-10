import { IronSessionOptions } from 'iron-session';

export const sessionOptions: IronSessionOptions = {
    cookieName: 'hs-academy-session',
    password: process.env.SESSION_PASSWORD
        ? process.env.SESSION_PASSWORD
        : 'complex_password_at_least_32_characters_long',
    cookieOptions: {
        secure: process.env.NODE_ENV === 'production',
    },
};
