import styled from "styled-components";
import PostCard from "./PostCard";
import PostForm from "./PostForm";

interface PostsFeedProps {
    posts: any
}

const PostsFeed: React.FC<PostsFeedProps> = ({ posts }) => (
    <Container>
        <Wrapper>
            <Content>
                <PostForm />
                {posts &&
                    posts.map((post) => (
                        <PostCard post={post} key={post.id} />
                    ))
                }
            </Content>
        </Wrapper>
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

const Wrapper = styled.div`
    width: calc(100% - 75px * 2);
`;

const Content = styled.div`
    column-width: 500px;
	column-gap: 15px;
 	width: 90%;
	max-width: 1100px;
	margin: 50px auto;
`;

export default PostsFeed;