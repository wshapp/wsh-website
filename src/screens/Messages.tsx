import SideNavbar from "@components/SideNavbar";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Title from "@components/Title";
import Inbox from "@components/Inbox";
import ChannelEmpty from "@components/ChanneEmpty";
import { SafeContentBackground, SafeContainer, SafeContent } from "@components/layout/Safe";
import Channel from "@components/Channel";
import SafeProvider from "@components/SafeProvider";

const Messages: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;

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