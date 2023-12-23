import React, { Fragment } from 'react';
import Header from '../components/header';
import { useParams } from 'react-router-dom';

import BigDragonComponent from '../components/dragons/big-dragon-component';

const OneDragonPage = () => {
    const  {dragonId}  = useParams();

    return (
        <Fragment>
            <Header />
            {
                dragonId 
                ? <BigDragonComponent dragonId={dragonId} />
                : <>Error</>
            }
        </Fragment>
    );
};

export default OneDragonPage;