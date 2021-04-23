import { useMutation } from "@apollo/react-hooks";
import React from "react";
import styled from "styled-components";
import { POST_LIKE } from "@queries/posts";

interface PostLikeButtonProps {
    user: any;
    post: any;
}

const PostReactionLike: React.FC<PostLikeButtonProps> = ({ user, post: { id, likeCount, likes } }) => {
    const [liked, setLiked] = React.useState(false);

    React.useEffect(() => {
        if (user && likes.find((like) => like.username === user.username)) {
            setLiked(true);
        } else setLiked(false);
    }, [user, likes]);

    const [likePost] = useMutation(POST_LIKE, {
        variables: { postId: id }
    });

    return (
        <Container onClick={likePost}>
            <Icon className={liked ? "ri-heart-3-fill" : "ri-heart-3-line"} /> {likeCount}
        </Container>
    )

}

const Container = styled.div`
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

const Icon = styled.i`
    margin-right: 5px;
    font-size: 15px
`;

export default PostReactionLike;