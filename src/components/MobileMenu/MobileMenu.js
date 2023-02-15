/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import { COLORS, QUERIES } from "../../constants";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { keyframes } from "styled-components";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Background />
      <Content aria-label="main menu">
        <ContentWrapper>
          <Spacer>
            <CloseButton onClick={onDismiss}>
              <Icon id="close" />
              <VisuallyHidden>Dismiss menu</VisuallyHidden>
            </CloseButton>
          </Spacer>
          <Nav>
            <ul>
              <li>
                <a href="/sale">Sale</a>
              </li>
              <li>
                <a href="/new">New&nbsp;Releases</a>
              </li>
              <li>
                <a href="/men">Men</a>
              </li>
              <li>
                <a href="/women">Women</a>
              </li>
              <li>
                <a href="/kids">Kids</a>
              </li>
              <li>
                <a href="/collections">Collections</a>
              </li>
            </ul>
          </Nav>

          <Footer>
            <ul>
              <li>
                <a href="/terms">Terms and Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </Footer>
        </ContentWrapper>
      </Content>
    </Overlay>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0%);
  }
`;

const Overlay = styled(DialogOverlay)`
  background-color: transparent;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: flex-end;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: hsla(220, 5%, 40%, 0.8);

  animation: ${fadeIn} 300ms both;
`;

const Content = styled(DialogContent)`
  position: relative;
  background: white;
  width: 300px;
  height: 100%;
  padding: 32px;

  animation: ${slideIn} 500ms both;
  animation-delay: 200ms;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  animation: ${fadeIn} 500ms both;
  animation-delay: 400ms;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-start;
  margin-left: auto;

  @media (${QUERIES.phoneAndDown}) {
    margin-right: -16px;
    margin-top: -8px;
  }
`;

const Nav = styled.nav`
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;
  text-transform: uppercase;
  color: ${COLORS.gray[900]};
  gap: 22px;

  li {
    list-style: none;
  }
  li:first-of-type {
    color: ${COLORS.secondary};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Footer = styled.footer`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: ${COLORS.gray[700]};
  display: flex;
  flex-direction: column;
  justify-content: end;
  gap: 22px;
  flex: 1;

  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Spacer = styled.div`
  flex: 1;
  display: flex;
`;

export default MobileMenu;
