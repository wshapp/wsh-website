import SideNavbar from "../components/SideNavbar";
import { useParams } from "react-router";

import Title from "../components/Title";
import Inbox from "../components/Inbox";
import ChannelEmpty from "../components/ChanneEmpty";
import { SafeContentBackground, SafeContainer, SafeContent } from "../components/layout/Safe";
import Channel from "../components/Channel";
import SafeProvider from "../components/SafeProvider";

const Messages: React.FC = () => {
    const { id } = useParams();

    return (
        <SafeProvider>
            <Title title="Messages" />
            <SafeContainer>
                <SideNavbar />
                <SafeContentBackground>
                    <SafeContent>
                        <Inbox />
                        {id ?
                            <Channel id={id} /> :
                            <ChannelEmpty />
                        }
                    </SafeContent>
                </SafeContentBackground>
            </SafeContainer>
        </SafeProvider>
    );
}

export default Messages;