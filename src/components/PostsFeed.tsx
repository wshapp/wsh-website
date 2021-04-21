import styled from "styled-components";
import PostCard from "./PostCard";

interface PostsFeedProps {
    posts: any
}

const PostsFeed: React.FC<PostsFeedProps> = ({ posts }) => (
    <Container>
        <Content>
            {posts &&
                posts.map((post) => (
                    <PostCard post={post} key={post.id} />
                ))
            }
        </Content>
    </Container>
)

const Container = styled.div`
    display: flex;
    flex-direction: column;
    overflow: auto;
    flex: 1;
    align-items: center;
    overflow: auto;
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -10px;
    margin-left: -10px;
    padding: 10px;
`;

export default PostsFeed;