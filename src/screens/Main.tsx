import React from "react";
import { AuthContext } from "@context/Auth";
import { NextPage } from "next";

import Landing from "@components/Landing";
import House from "@components/House";

const Main: NextPage = () => {

    const { user } = React.useContext(AuthContext);

    return user ? <House /> : <Landing />;
}

export default Main;