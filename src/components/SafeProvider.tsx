import React from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "@screens/Loading";

const SafeProvider: React.FC = ({ children }) => {
    const { user } = React.useContext(AuthContext);
    const router = useRouter();

    React.useEffect(() => {
        if (!user) router.push(ROUTES.INDEX)
    }, []);

    return user ? <>{children}</> : <Loading />;
}

export default SafeProvider;