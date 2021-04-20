import React from "react";
import { useRouter } from "next/router";

import { AuthContext } from "@context/Auth";
import * as ROUTES from "@constants/routes";

const SafeProvider: React.FC = ({ children }) => {
    const { user } = React.useContext(AuthContext);
    const router = useRouter();

    React.useEffect(() => {
        if (!user) router.push(ROUTES.INDEX)
    }, []);

    return user ? <>{children}</> : <>Loading Comp</>;
}

export default SafeProvider;