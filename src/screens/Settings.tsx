import { NextPage } from "next";
import Title from "@components/Title";
import { SafeContentBackground, SafeContainer, SafeContent } from "@components/layout/Safe";
import SideNavbar from "@components/SideNavbar";
import ManageAccount from "@components/ManageAccount";
import Sidebar from "@components/Sidebar";
import SettingsNavbar from "@components/SettingsNavbar";

const Settings: NextPage = () => (
    <>
        <Title title="Settings" />
        <SafeContainer>
            <SideNavbar />
            <SafeContentBackground>
                <SafeContent>
                    <ManageAccount />
                </SafeContent>
            </SafeContentBackground>
            <Sidebar>
                <SettingsNavbar />
            </Sidebar>
        </SafeContainer>
    </>
)


export default Settings;