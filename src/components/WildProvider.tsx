import React from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";
import Loading from "@components/Loading";

const WildProvider: React.FC<{ noRedirect?: boolean }> = ({ children, noRedirect = false }) => {
    const { user } = React.useContext(AuthContext);
    const router = useRouter();

    React.useEffect(() => {
        if (user && !noRedirect) router.push(ROUTES.HOUSE)
    }, []);

    return user ? <Loading /> : <>{children}</>;
}

export default WildProvider;