import styled from "styled-components";

import Link from "@components/Link";
import Button from "./layout/Button";
import { INDEX, SIGN_IN } from "@constants/routes";

const Navbar = () => (
    <NavbarContainer>
        <Nav>
            <NavItem><Link href={INDEX}>wshLogo</Link></NavItem>
            <NavItem><Link href={SIGN_IN}><Button>Log In</Button></Link></NavItem>
        </Nav>
    </NavbarContainer>
)

const NavbarContainer = styled.nav`
    height: 60px;
    z-index: 2;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1280px;
    width: calc(100% - 15px * 2);
    margin: 0 auto;
    padding: 0 15px;
`;

const Nav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const NavItem = styled.li``;

export default Navbar;