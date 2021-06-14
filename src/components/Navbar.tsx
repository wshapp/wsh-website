import styled from "styled-components";

import Link from "./Link";
import { Button } from "./layout/Buttons";
import * as ROUTES from "../constants/routes";
import { WshLogo } from "./layout/Icons";

const Navbar: React.FC = () => (
  <NavbarContainer>
    <Nav>
      <NavItem>
        <Link href={ROUTES.LANDING}>
          <WshLogo />
        </Link>
      </NavItem>
      <NavItem>
        <Button href={ROUTES.SIGN_IN} as={Link}>
          Log In
        </Button>
      </NavItem>
    </Nav>
  </NavbarContainer>
);

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
