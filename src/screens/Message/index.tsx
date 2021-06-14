import SideNavbar from "../../components/SideNavbar";

import Head from "../../components/Head";
import Inbox from "../../components/Inbox";
import ChannelEmpty from "../../components/ChanneEmpty";
import {
  SafeContentBackground,
  SafeContainer,
  SafeContent,
} from "../../components/layout/Safe";
import Channel from "../../components/Channel";
import SafeProvider from "../../components/SafeProvider";
import { useRouter } from "next/router";

const Message: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <SafeProvider>
      <Head title="Messages" />
      <SafeContainer>
        <SideNavbar />
        <SafeContentBackground>
          <SafeContent>
            <Inbox />
            {id ? <Channel id={id} /> : <ChannelEmpty />}
          </SafeContent>
        </SafeContentBackground>
      </SafeContainer>
    </SafeProvider>
  );
};

export default Message;
