import styled from "styled-components";
import moment from 'moment';

interface PostCardPost {
    post: any;
}

const PostCard: React.FC<PostCardPost> = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) => {

    return (
        <Container>
            <Header>
                <IconContainer>
                    <Icon src={`https://picsum.photos/200/200`} loading="lazy" />
                </IconContainer>
                <HeaderContent>
                    <Username>{username}</Username>
                    <Description>{moment(createdAt).fromNow(true)}</Description>
                </HeaderContent>
            </Header>
            <Content>
                {body}
            </Content>
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 15px * 2);
    background-color: ${props => props.theme.colors.layout.darker};
	margin: 0 2px 15px;
	padding: 15px;
	transition: opacity .4s ease-in-out;
    display: inline-block;
    column-break-inside: avoid;
    border-radius: 10px;
`;

const Header = styled.div`
    display: flex;
`;

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 50px;
`;

const Icon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    object-fit: center;
    user-select: none;
    pointer-events: none;
`;

const HeaderContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px;
    line-height: 1.2;
`;

const Username = styled.p`
    font-size: 16px;
`;

const Description = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.light};
`;

const Content = styled.div`
    margin-top: 15px;
`;


export default PostCard;