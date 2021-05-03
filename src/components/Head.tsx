import React from 'react';
import { Helmet } from "react-helmet";

import { APPNAME } from '../constants/main';

const Head: React.FC = () => {

    return (
        <Helmet>
            <title>{APPNAME}</title>
        </Helmet>
    )
}


export default Head;