import styled from "styled-components";
import Link from "./Link";

import * as ROUTES from "../constants/routes";

const SettingsNavbar: React.FC = () => (
    <Container>
        <Title>Settings</Title>
        <Nav>
            <NavItem>
                <NavLink href={ROUTES.SETTINGS}><NavIcon className="ri-user-3-line" /> Manage account</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={ROUTES.SETTINGS}><NavIcon className="ri-notification-line" /> Manage notifications</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={ROUTES.SETTINGS}><NavIcon className="ri-lock-2-line" /> Security & Privacy</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href={ROUTES.SETTINGS}><NavIcon className="ri-question-line" /> Help</NavLink>
            </NavItem>
        </Nav>
    </Container>
);
const Container = styled.nav`
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
    user-select: none;
`;

const Nav = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 30px;
`;

const NavLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const NavItem = styled.li`
    margin: 15px 0;
    font-size: 16px;

    &:first-child {
        margin-top: 0;
    }

    &:last-child {
        margin-bottom: 0;
    }
`;

const NavIcon = styled.i`
    margin-right: 10px;
`;

export default SettingsNavbar;