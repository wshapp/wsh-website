import React from "react";
import { AuthContext } from "@context/Auth";

import Landing from "./Landing";
import House from "./House";

const Main = () => {

    const [render, setRender] = React.useState(<Landing />)
    const { user } = React.useContext(AuthContext);

    React.useEffect(() => {
        if (user) setRender(<House />)
    }, []);

    return render;
}

export default Main;