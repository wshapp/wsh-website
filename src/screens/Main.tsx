import React from "react";
import { AuthContext } from "@context/Auth";

import Landing from "./Landing";
import House from "./House";
import Loading from "./Loading";

const Main = () => {

    const [render, setRender] = React.useState(<Loading />)
    const { user } = React.useContext(AuthContext);

    React.useEffect(() => {
        if (user) setRender(<House />)
        else setRender(<Landing />)
    }, []);

    return render;
}

export default Main;