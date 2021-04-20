import { NextPage } from "next";
import Title from "@components/Title";
import { SafeContentBackground, SafeContainer, SafeContent } from "@components/layout/Safe";
import SideNavbar from "@components/SideNavbar";
import ManageAccount from "@components/ManageAccount";
import Sidebar from "@components/Sidebar";
import SettingsNavbar from "@components/SettingsNavbar";
import SafeProvider from "@components/SafeProvider";

const Settings: NextPage = () => (
    <SafeProvider>
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
    </SafeProvider>
)


export default Settings;