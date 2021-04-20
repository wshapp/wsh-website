import { SafeContainer, SafeContent, SafeContentBackground } from "@components/layout/Safe";
import SafeProvider from "@components/SafeProvider";
import Sidebar from "@components/Sidebar";
import SideNavbar from "@components/SideNavbar";
import Title from "@components/Title";
import { NextPage } from "next";

const House: NextPage = () => {

    return (
        <SafeProvider>
            <Title title="House" />
            <SafeContainer>
                <SideNavbar />
                <SafeContentBackground>
                    <SafeContent>
                        House
                    </SafeContent>
                </SafeContentBackground>
                <Sidebar>
                </Sidebar>
            </SafeContainer>
        </SafeProvider>
    )
}

export default House;