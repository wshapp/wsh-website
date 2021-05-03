import React from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../context/Auth";
import * as ROUTES from "../constants/routes";
import Loading from "../components/Loading";

const SafeProvider: React.FC<{ noRedirect?: boolean }> = ({ children, noRedirect = false }) => {
    const { user } = React.useContext(AuthContext);
    const history = useHistory();

    React.useEffect(() => {
        if (!user && !noRedirect) history.push(ROUTES.LANDING)
    }, []);

    return user ? <>{children}</> : <Loading />;
}

export default SafeProvider;