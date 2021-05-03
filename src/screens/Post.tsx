import styled from "styled-components";
import { useParams } from "react-router";

import Title from "../components/Title";
import { useQuery } from "@apollo/client";
import { GET_POST } from "../queries/posts";
import SafeProvider from "../components/SafeProvider";
import { SafeContainer, SafeContent, SafeContentBackground } from "../components/layout/Safe";
import SideNavbar from "../components/SideNavbar";
import Sidebar from "../components/Sidebar";
import { Button } from "../components/layout/Buttons";
import PostCard from "../components/PostCard";

const SinglePost: React.FC = () => {
    const { id } = useParams();

    const {
        loading,
        data
    } = useQuery(GET_POST, {
        variables: {
            id
        }
    });

    return (
        <SafeProvider>
            <Title title={`Post`} />
            <SafeContainer>
                <SideNavbar />
                <SafeContentBackground>
                    <SafeContent>
                        <Container>
                            <Content>
                                <Button onClick={() => { history.back() }}>Back</Button>
                                {loading ? (
                                    <h1>Loading post..</h1>
                                ) : (data?.getPost && <PostCard post={data.getPost} />)}
                            </Content>
                        </Container>
                    </SafeContent>
                </SafeContentBackground>
                <Sidebar>
                    Comments
                </Sidebar>
            </SafeContainer>
        </SafeProvider>
    )
}

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