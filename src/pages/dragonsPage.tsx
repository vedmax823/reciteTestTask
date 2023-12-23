import { Fragment } from 'react';
import Header from '../components/header';
import DragonsList from '../components/dragons/dragons-list';

const DragonsPage = () => {
    return (
        <Fragment>
            <Header />
            <DragonsList />
        </Fragment>
    );
};

export default DragonsPage;