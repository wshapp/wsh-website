import { NextPage } from "next";
import React from "react";
import { useQuery } from '@apollo/react-hooks';

import { SafeContainer, SafeContent, SafeContentBackground } from "@components/layout/Safe";
import SafeProvider from "@components/SafeProvider";
import Sidebar from "@components/Sidebar";
import SideNavbar from "@components/SideNavbar";
import Title from "@components/Title";
import { FETCH_POSTS_QUERY } from "src/queries";
import PostsFeed from "@components/PostsFeed";

const House: NextPage = () => {

    const {
        loading,
        data
    }: { loading: any; data?: any } = useQuery(FETCH_POSTS_QUERY);

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