import styled from "styled-components";
import { useQuery } from "@apollo/react-hooks";

import FeedCard from "./FeedCard";
import PostForm from "./FeedForm";
import { GET_POSTS } from "../queries/posts";

const Feed: React.FC = () => {
  const { loading, data }: { loading: any; data?: any } = useQuery(GET_POSTS);

  return (
    <Container>
      <PostForm />
      {!loading &&
        data?.getPosts &&
        data.getPosts.map((post) => <FeedCard post={post} key={post.id} />)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1 65%;
  padding: 15px;
  flex-direction: column;
  overflow: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export default Feed;
