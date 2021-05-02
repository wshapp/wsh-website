import React from "react";
import { NextPage } from "next";
import styled from "styled-components";

import Title from "@components/Title";
import { useRouter } from "next/router";
import { AuthContext } from "@context/Auth";
import { useQuery } from "@apollo/client";
import { GET_POST } from "@queries/posts";
import SafeProvider from "@components/SafeProvider";
import { SafeContainer, SafeContent, SafeContentBackground } from "@components/layout/Safe";
import SideNavbar from "@components/SideNavbar";
import Sidebar from "@components/Sidebar";
import { Button } from "@components/layout/Buttons";
import PostCard from "@components/PostCard";

const SinglePost: NextPage = () => {
    const router = useRouter();
    const { id } = router.query;
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
                                <Button onClick={() => { router.back() }}>Back</Button>
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