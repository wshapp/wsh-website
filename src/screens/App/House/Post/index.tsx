import styled from "styled-components";

import { useQuery } from "@apollo/client";
import { GET_POST } from "queries/posts";
import SafeProvider from "components/SafeProvider";
import {
  SafeContainer,
  SafeContent,
  SafeContentBackground,
} from "components/layout/Safe";
import Navbar from "@components/App/Navbar";
import Sidebar from "@components/App/Sidebar";
import { Button } from "components/layout/Buttons";
import PostCard from "components/PostCard";
import PostComments from "components/PostComments";
import { useRouter } from "next/router";

const SinglePost: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, data } = useQuery(GET_POST, {
    variables: {
      id,
    },
  });

  return (
    <SafeProvider>
      <Head title={"Post"} />
      <SafeContainer>
        <Navbar />
        <SafeContentBackground>
          <SafeContent>
            <Container>
              <Content>
                <Button
                  onClick={() => {
                    history.back();
                  }}
                >
                  Back
                </Button>
                {loading ? (
                  <h1>Loading post..</h1>
                ) : (
                  data?.getPost && <PostCard post={data.getPost} />
                )}
              </Content>
            </Container>
          </SafeContent>
        </SafeContentBackground>
        <Sidebar>
          <PostComments />
        </Sidebar>
      </SafeContainer>
    </SafeProvider>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  flex: 1;
  align-items: center;
`;

const Content = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 50px auto;
`;

export default SinglePost;
