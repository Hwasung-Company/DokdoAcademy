import GridMain from 'next-app/../../libs/frontend/components/dist/Layouts/GridMain';
import Header from './Header';
import LeftSearch from './LeftSearch';
import { Contents } from './Contents';
import { ReactNode } from 'react';

export default function AdminTemplate({ children }: { children: ReactNode }) {
    return (
        <GridMain>
            <Header />
            <LeftSearch />
            <Contents>{children}</Contents>
        </GridMain>
    );
}
