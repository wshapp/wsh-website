import styled from "styled-components";
import FeedCard from "./FeedCard";
import PostForm from "./FeedForm";

interface FeedProps {
    posts: any
}

const Feed: React.FC<FeedProps> = ({ posts }) => (
    <Container>
        <Wrapper>
            <Content>
                <PostForm />
                {posts &&
                    posts.map((post) => (
                        <FeedCard post={post} key={post.id} />
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
`;

const Wrapper = styled.div`
    width: calc(100% - 75px * 2);
    @media (max-width: 768px) {
        width: 100%;
    }
`;

const Content = styled.div`
    column-width: 500px;
	column-gap: 15px;
 	width: 100%;
	max-width: 1100px;
	margin: 50px auto;
`;

export default Feed;