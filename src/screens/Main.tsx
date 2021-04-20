import React from "react";
import { AuthContext } from "@context/Auth";
import { NextPage } from "next";

import Landing from "@components/Landing";
import House from "@components/House";
import Loading from "@components/Loading";

const Main: NextPage = () => {

    const [render, setRender] = React.useState(<Loading />)
    const { user } = React.useContext(AuthContext);

    React.useEffect(() => {
        if (user) setRender(<House />)
        else setRender(<Landing />)
    }, []);

    return render;
}

export default Main;