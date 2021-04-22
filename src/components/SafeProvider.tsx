import React from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "@components/Loading";

const SafeProvider: React.FC<{ noRedirect?: boolean }> = ({ children, noRedirect = false }) => {
    const { user } = React.useContext(AuthContext);
    const router = useRouter();

    React.useEffect(() => {
        if (!user && !noRedirect) router.push(ROUTES.INDEX)
    }, []);

    return user ? <>{children}</> : <Loading />;
}

export default SafeProvider;