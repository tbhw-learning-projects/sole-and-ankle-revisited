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
          <DesktopNavLinkWrapper label="Sale">
            <NavLink href="/sale">Sale</NavLink>
          </DesktopNavLinkWrapper>
          <DesktopNavLinkWrapper label="New Releases">
            <NavLink href="/new">New&nbsp;Releases</NavLink>
          </DesktopNavLinkWrapper>
          <DesktopNavLinkWrapper label="Men">
            <NavLink href="/men">Men</NavLink>
          </DesktopNavLinkWrapper>
          <DesktopNavLinkWrapper label="Women">
            <NavLink href="/women">Women</NavLink>
          </DesktopNavLinkWrapper>
          <DesktopNavLinkWrapper label="Kids">
            <NavLink href="/kids">Kids</NavLink>
          </DesktopNavLinkWrapper>
          <DesktopNavLinkWrapper label="Collections">
            <NavLink href="/collections">Collections</NavLink>
          </DesktopNavLinkWrapper>
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
  min-height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;

  @media (${QUERIES.phoneAndDown}) {
    padding: 18px 16px;
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 5.6vw - 2.25rem, 3rem);
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
  display: inline-block;
  position: relative;
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${WEIGHTS.medium};
  color: currentColor;
`;

const DesktopNavLinkWrapper = styled.span`
  display: block;
  color: ${COLORS.gray[900]};
  perspective: 1000px;
  transform-style: preserve-3d;

  &:first-of-type {
    color: ${COLORS.secondary};
  }
  @media (hover: hover) and (prefers-reduced-motion: no-preference) {
    & > ${NavLink} {
      transform-origin: top center;
      transform-style: preserve-3d;
      transition: transform 300ms, background-color 300ms ease-in;
    }

    &:hover > ${NavLink} {
      transform: rotateX(90deg);
    }

    & > ${NavLink}:after {
      display: inline-block;
      content: "${({ label }) => label}";
      position: absolute;
      top: 0.75em;
      left: 0;
      width: 100%;
      height: 100%;
      font-weight: ${WEIGHTS.bold};
      transform: rotateX(-90deg) translateY(1em);
      background-color: ${COLORS.gray[300]};
    }

    &:hover > ${NavLink}:after {
      transform: rotateX(-91deg) translateY(50%);
      background-color: white;
    }
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
