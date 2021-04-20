import styled from "styled-components";

interface PostCardPost {
    post: any;
}

const PostCard: React.FC<PostCardPost> = ({ post: { body, createdAt, id, username, likeCount, commentCount, likes } }) => {

    return (
        <Container>
            {body}
        </Container>
    )
}

const Container = styled.div`
    background-color: ${props => props.theme.colors.layout.light};
    width: calc(50% - 10px);
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 8px;
    overflow: hidden;
    height: 250px;
    cursor: pointer;
`;

export default PostCard;