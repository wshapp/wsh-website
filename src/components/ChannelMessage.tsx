import styled from "styled-components";

const ChannelMessage: React.FC = () => (
    <Container>
        <PictureContainer>
            <SenderPicture src={`https://picsum.photos/200/200`} />
        </PictureContainer>
        <Content>
            <Sender>Yohann</Sender>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eveniet fuga corporis voluptates tempore voluptatibus aperiam culpa repudiandae hic amet, perferendis facere, quis explicabo necessitatibus alias, dolore impedit iusto consequatur.
        </Content>
    </Container>
)

const Container = styled.div`
    margin-top: 10px;
    display: flex;
    line-height: 1.2;
`;

const PictureContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    pointer-events: none;
`;

const SenderPicture = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    object-fit: center;
`;

const Sender = styled.div`
    font-weight: 700;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 5px;
`;

export default ChannelMessage;