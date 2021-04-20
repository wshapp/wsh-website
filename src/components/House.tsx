import React from "react";
import { useQuery } from '@apollo/react-hooks';

import { SafeContainer, SafeContent, SafeContentBackground } from "@components/layout/Safe";
import SafeProvider from "@components/SafeProvider";
import Sidebar from "@components/Sidebar";
import SideNavbar from "@components/SideNavbar";
import Title from "@components/Title";
import { GET_POSTS } from "@queries/posts";
import PostsFeed from "@components/PostsFeed";

const House: React.FC = () => {

    const {
        loading,
        data
    }: { loading: any; data?: any } = useQuery(GET_POSTS);

    return (
        <SafeProvider>
            <Title title="House" />
            <SafeContainer>
                <SideNavbar />
                <SafeContentBackground>
                    <SafeContent>
                        {loading ? (
                            <h1>Loading posts..</h1>
                        ) : (data?.getPosts && <PostsFeed posts={data?.getPosts} />)}
                    </SafeContent>
                </SafeContentBackground>
                <Sidebar>
                </Sidebar>
            </SafeContainer>
        </SafeProvider>
    )
}

export default House;