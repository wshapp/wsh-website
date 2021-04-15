import SideNavbar from "@components/SideNavbar";
import { NextPage } from "next";
import { Router } from "next/router";

import Title from "@components/Title";
import InboxMessages from "@components/InboxMessages";
import ChannelEmpty from "@components/ChanneEmpty";
import { SafeBackground, SafeContainer, SafeContent } from "@components/layout/Safe";
import Channel from "@components/Channel";

interface MessagesProps {
    router: Router;
}

const Messages: NextPage<MessagesProps> = ({ router }) => {
    const { id } = router.query;

    return (
        <>
            <Title title="Messages" />
            <SafeContainer>
                <SideNavbar />
                <SafeBackground>
                    <SafeContent>
                        <InboxMessages router={router} />
                        {id ?
                            <Channel id={id} /> :
                            <ChannelEmpty />
                        }
                    </SafeContent>
                </SafeBackground>
            </SafeContainer>
        </>
    );
}

export default Messages;