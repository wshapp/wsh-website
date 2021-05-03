import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ApolloProvider } from '@apollo/react-hooks';

import themes from "./services/themes";
import MainLayout from "./components/layout/MainLayout";
import GlobalStyle from "./components/layout/GlobalStyle";
import { MainTrackProvider } from "./context/MainTrack";
import { AuthProvider } from "./context/Auth";
import { apollo } from "./services/apollo/withApollo";
import * as ROUTES from "./constants/routes";

import Landing from "./screens/Landing";
import Post from "./screens/Post";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import Recovery from "./screens/Recovery";
import RecoveryChange from "./screens/RecoveryChange";
import House from "./screens/House";
import Settings from "./screens/Settings";
import Messages from "./screens/Messages";

import "remixicon/fonts/remixicon.css";
import "./styles/app.scss";

const App: React.FC = () => {

  let storedTheme;
  const [theme, setTheme] = React.useState(storedTheme ?? themes.black);

  React.useEffect(() => {
    storedTheme = localStorage.getItem('theme');
    console.log(storedTheme);
  }, []);

  return (
    // @ts-ignore
    <ApolloProvider client={apollo}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <MainTrackProvider>
            <GlobalStyle />
            <MainLayout>
              <Router>
                <Switch>
                  <Route exact path={ROUTES.MESSAGES + "/:id"} component={Messages} />
                  <Route path={ROUTES.MESSAGES} component={Messages} />

                  <Route exact path={"/p/:id"} component={Post} />

                  <Route path={ROUTES.SETTINGS} component={Settings} />

                  <Route path={ROUTES.RECOVERY_CHANGE} component={RecoveryChange} />
                  <Route path={ROUTES.RECOVERY} component={Recovery} />
                  <Route path={ROUTES.SIGN_UP} component={SignUp} />
                  <Route path={ROUTES.SIGN_IN} component={SignIn} />

                  <Route path={ROUTES.HOUSE} component={House} />
                  <Route exact path={ROUTES.LANDING} component={Landing} />
                  <Route path="*" component={Error} />
                </Switch>
              </Router>
            </MainLayout>
          </MainTrackProvider>
        </ThemeProvider >
      </AuthProvider>
    </ApolloProvider>
  )
}

export default App;