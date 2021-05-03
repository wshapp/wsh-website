import React from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../context/Auth";
import * as ROUTES from "../constants/routes";
import Loading from "./Loading";

interface WildProviderProps { noRedirect?: boolean; }

const WildProvider: React.FC<WildProviderProps> = ({ children, noRedirect = false }) => {
    const { user } = React.useContext(AuthContext);
    const history = useHistory();

    React.useEffect(() => {
        if (user && !noRedirect) history.push(ROUTES.HOUSE);
    }, []);

    return user ? <Loading /> : <>{children}</>;
}

export default WildProvider;