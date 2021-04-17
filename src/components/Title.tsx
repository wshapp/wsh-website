import Head from 'next/head';

import { APPNAME } from '@constants/main';

const Title = ({ title, subtitle }: { title: string; subtitle?: string }) => (
    <Head>
        <title>{`${subtitle ? subtitle + ' - ' : ''}${title} | ${APPNAME}`}</title>
    </Head>
);

export default Title;