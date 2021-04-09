import styled from "styled-components";

import Link from "@components/Link";
import Button from "./Button";

const Navbar = () => (
    <NavbarContainer>
        <Nav>
            <NavItem><Link href="/">wshLogo</Link></NavItem>
            <NavItem><Link href="/auth"><Button style={{ padding: '8px 30px', }}>Launch</Button></Link></NavItem>
        </Nav>
    </NavbarContainer>
)

const NavbarContainer = styled.nav`
    height: 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Nav = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1280px;
    width: calc(100% - 15px * 2);
    margin: 0 auto;
    padding: 0 15px;
`;

const NavItem = styled.li``;

export default Navbar;