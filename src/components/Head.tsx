import React from 'react';
import NextHead from 'next/head';
import { APPNAME } from '@constants/main';

const Head = () => {

    return (
        <NextHead>
            <title>{APPNAME}</title>
        </NextHead>
    )
}


export default Head