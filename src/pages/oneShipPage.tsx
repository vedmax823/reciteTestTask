
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/header';
import BigShipComponent from '../components/ships/big-ship-component';

const OneShipPage = () => {
    const  {shipId}  = useParams();
    return (
        <Fragment>
            <Header />
            {
                shipId 
                ? <BigShipComponent shipId={shipId} />
                : <>Error</>
            }
        </Fragment>
    );
};

export default OneShipPage;