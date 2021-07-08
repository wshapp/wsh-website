import {
  AppContainer,
  AppContent,
  AppContentBackground,
} from "@components/App/Layout/App";
import Navbar from "@components/App/Navbar";
import Sidebar from "@components/App/Sidebar";
import PrivateProvider from "@components/App/Provider";
import Head from "@components/Main/Head";

const Setting: React.FC = () => (
  <PrivateProvider>
    <Head title="Settings" />
    <AppContainer>
      <Navbar />
      <AppContentBackground>
        <AppContent></AppContent>
      </AppContentBackground>
      <Sidebar>content</Sidebar>
    </AppContainer>
  </PrivateProvider>
);

export default Setting;
