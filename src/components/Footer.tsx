import styled from "styled-components";

import Link from "./Link";
import * as ROUTES from "../constants/routes";

const Footer: React.FC = () => (
    <Container>
        <Nav>
            <NavItem><Link href={ROUTES.DOWNLOAD}>Download</Link></NavItem>
            <NavItem><Link href={ROUTES.TERMS}>Terms</Link></NavItem>
            <NavItem><Link href={ROUTES.SUPPORT}>Support</Link></NavItem>
            <NavItem><Link href={ROUTES.FAQ}>FAQ</Link></NavItem>
        </Nav>
        <Copyright>© onRuntime</Copyright>
    </Container>
);

const Container = styled.div`
    margin-top: 30px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    user-select: none;
    color: ${props => props.theme.colors.text.light};
`;

const Nav = styled.ul`
    display: flex;
`;

const NavItem = styled.li`
    margin: 0 15px;

    &:first-child {
        margin-left: 0;
    }

    &:last-child {
        margin-right: 0;
    }
`;

const Copyright = styled.p`
    margin-top: 15px;
`;


export default Footer;