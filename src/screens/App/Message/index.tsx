import Navbar from "@components/App/Navbar";

import Inbox from "@components/App/Message/Inbox";
import ChannelEmpty from "@components/App/Message/Channel/Empty";
import {
  AppContainer,
  AppContent,
  AppContentBackground,
} from "@components/App/Layout/App";
import Channel from "@components/App/Message/Channel";
import PrivateProvider from "@components/App/Provider";
import { useRouter } from "next/router";
import Head from "@components/Main/Head";

const Message: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <PrivateProvider>
      <Head title="Messages" />
      <AppContainer>
        <Navbar />
        <AppContentBackground>
          <AppContent>
            <Inbox />
            {id ? <Channel id={id} /> : <ChannelEmpty />}
          </AppContent>
        </AppContentBackground>
      </AppContainer>
    </PrivateProvider>
  );
};

export default Message;
