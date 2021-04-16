import { NextPage } from "next";
import Title from "@components/Title";
import { SafeContentBackground, SafeContainer, SafeContent, SafeSidebar, SafeSidebarBackground } from "@components/layout/Safe";
import SideNavbar from "@components/SideNavbar";
import AccountSettings from "@components/AccountSettings";

const Settings: NextPage = () => (
    <>
        <Title title="Settings" />
        <SafeContainer>
            <SideNavbar />
            <SafeContentBackground>
                <SafeContent>

                </SafeContent>
            </SafeContentBackground>
            <SafeSidebarBackground>
                <SafeSidebar>
                    <AccountSettings />
                </SafeSidebar>
            </SafeSidebarBackground>
        </SafeContainer>
    </>
)


export default Settings;