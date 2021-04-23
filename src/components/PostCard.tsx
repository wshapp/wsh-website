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
                    <Date>{moment(createdAt).fromNow(true)}</Date>
                </HeaderContent>
            </Header>
            <Content>
                {body}
            </Content>
            <Footer>
                <Reaction>
                    <ReactionIcon className="ri-message-3-line" /> {commentCount}
                </Reaction>
                <Reaction>
                    <ReactionIcon className="ri-heart-3-line" /> {likeCount}
                </Reaction>
            </Footer>
        </Container>
    )
}

const Container = styled.div`
    width: calc(100% - 15px * 2);
	margin: 0 2px 15px;
	padding: 15px;
	transition: opacity .4s ease-in-out;
    display: inline-block;
    column-break-inside: avoid;
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
    flex: 1;
    justify-content: space-between;
    padding-top: 10px;
    padding-left: 10px;
    line-height: 1.2;
`;

const Username = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

const Date = styled.p`
    display: flex;
    font-size: 13px;
    color: ${props => props.theme.colors.text.light};
`;

const Content = styled.div`
    margin-top: 15px;
    line-height: 1.2;
`;

const Footer = styled.div`
    margin-top: 15px;
    display: flex;
    justify-content: flex-end;
`;

const Reaction = styled.div`
    margin: 0 10px;
    display: flex;
    align-items: center;
    font-size: 11px;
    cursor: pointer;
    
    &:first-child {
        margin-left: 0
    }

    &:last-child {
        margin-right: 0;
    }
`;

const ReactionIcon = styled.i`
    margin-right: 5px;
    font-size: 15px
`;

export default PostCard;