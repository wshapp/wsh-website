import { Helmet } from "react-helmet";
import { APPNAME } from '../constants/main';

interface TitleProps {
    title: string;
    subtitle?: string
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => (
    <Helmet>
        <title>{`${subtitle ? subtitle + ' - ' : ''}${title} | ${APPNAME}`}</title>
    </Helmet>
);

export default Title;