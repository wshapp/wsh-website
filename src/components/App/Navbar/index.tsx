import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "@components/Main/Link";
import * as ROUTES from "@constants/routes";
import { WshLogo } from "@components/Main/Layout/Icons";

const Navbar: React.FC = () => {
  const { pathname } = useRouter();

  return (
    <Container>
      <Link href={ROUTES.HOUSE}>
        <BrandImage />
      </Link>
      <Nav>
        <NavItem>
          <NavLink href={ROUTES.HOUSE}>
            <NavIcon
              className={
                pathname === ROUTES.HOUSE
                  ? "ri-home-fill active"
                  : "ri-home-line"
              }
            />
          </NavLink>
        </NavItem>
        {/* <NavItem>
          <NavLink href={ROUTES.MESSAGES}>
            <NavIcon
              className={
                pathname.includes(ROUTES.MESSAGES)
                  ? "ri-chat-1-fill active"
                  : "ri-chat-1-line"
              }
            />
          </NavLink>
        </NavItem> */}
        <NavItem>
          <NavLink href={ROUTES.SETTINGS}>
            <NavIcon
              className={
                pathname.includes(ROUTES.SETTINGS)
                  ? "ri-settings-fill active"
                  : "ri-settings-line"
              }
            />
          </NavLink>
        </NavItem>
      </Nav>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80px;
  height: calc(100% - 60px);
  padding: 30px 0;
  overflow: auto;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    height: 40px;
    width: 100%;
    flex-direction: row;
    padding: 10px 0;
  }
`;

const BrandImage = styled(WshLogo)`
  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    display: none;
  }
`;

const Nav = styled.ul`
  display: flex;
  flex-direction: column;
  margin: auto 0;
  align-items: center;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    flex-direction: row;
    justify-content: space-evenly;
    margin: 0;
  }
`;

const NavLink = styled(Link)``;

const NavItem = styled.li`
  padding: 15px 0;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobile}) {
    margin: 0 15px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
  }
`;

const NavIcon = styled.i`
  &.active {
    color: ${({ theme }) => theme.colors.text.lightest};
  }
`;

export default Navbar;
