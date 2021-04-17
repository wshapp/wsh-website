import React from "react";
import styled from "styled-components";
import Infobar from "./Infobar";

import Link from "./Link";

interface ChannelHeaderProps {
    receiverId: number;
}

const ChannelHeader: React.FC<ChannelHeaderProps> = ({ receiverId }) => (
    <Header>
        <ReceiverProfile>
            <PictureContainer>
                <ReceiverPicture src={`https://picsum.photos/200/200`} />
            </PictureContainer>
            <ReceiverContent>
                <Receiver href={"/alice"}>Alice {receiverId}</Receiver>
                <Description>Online</Description>
            </ReceiverContent>
        </ReceiverProfile>
            <Infobar />
    </Header>
);

const Header = styled.div`
    display: flex;
    height: 80px;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;

const ReceiverProfile = styled.div`
    display: flex;
    align-items: center;
    user-select: none;
`;

const PictureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 80px;
    pointer-events: none;
`;

const ReceiverPicture = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 10px;
    object-fit: center;
`;

const ReceiverContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    line-height: 1.2;
`;

const Receiver = styled(Link)`
    font-size: 24px;
    font-weight: 700;
    color: ${props => props.theme.colors.text.lightest};
`;

const Description = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.light};
`;

export default ChannelHeader;