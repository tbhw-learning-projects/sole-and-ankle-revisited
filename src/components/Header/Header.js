import React from "react";
import styled from "styled-components/macro";

import { COLORS, QUERIES, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>
        <NonDesktopActions>
          <UnstyledButton>
            <VisuallyHidden> cart</VisuallyHidden>
            <Icon id="shopping-bag" />
          </UnstyledButton>
          <UnstyledButton>
            <VisuallyHidden> Search</VisuallyHidden>
            <Icon id="search" />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu((v) => !v)}>
            <VisuallyHidden> Menu</VisuallyHidden>

            <Icon id="menu" />
          </UnstyledButton>
        </NonDesktopActions>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: 48px;
  margin: 0px 48px;

  @media (${QUERIES.tabletAndDown}) {
    display: none;
  }
`;

const Side = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndDown}) {
    &:last-of-type {
      flex: 0;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const NonDesktopActions = styled.div`
  display: none;

  @media (${QUERIES.tabletAndDown}) {
    display: flex;
    flex-direction: row;
    gap: 32px;
  }

  @media (${QUERIES.phoneAndDown}) {
    gap: 24px;
  }
`;

export default Header;
