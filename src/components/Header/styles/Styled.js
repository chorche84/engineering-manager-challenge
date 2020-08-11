import styled from "styled-components";
import Burger from "../../Burger/Burger";
import List from "../../List/List";
import StickyBanner from "../../StickyBanner";
import { media } from "../../../styles/media";

export const HeaderStyled = styled.header`
  z-index: ${props => props.theme.zIndex.higher};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.medium}
    ${props => props.theme.spacing.medium};
  nav {
    display: flex;
    align-items: center;
  }
  /* Media queries */
  ${media.xlarge`
  padding: ${props => props.theme.spacing.medium}
    ${props => props.theme.spacing.xlarge};
  `}
`;

export const BurgerStyled = styled(Burger)`
  position: relative;
  z-index: ${props => props.theme.zIndex.higher};
`;

export const ListStyled = styled(List)`
  display: none;
  margin-right: ${props => props.theme.spacing.medium};
  a {
    color: ${props => props.theme.color.white};
  }
  /* Media queries */
  ${media.xlarge`
    display: block;
  `}
`;

export const EmptyDropdownStyled = styled.div`
  width: 80px;
  height: 36px;
`;

export const StickyBannerStyled = styled(StickyBanner)`
  border-top: 0;
  > div {
    flex-direction: column;
  }
`;
