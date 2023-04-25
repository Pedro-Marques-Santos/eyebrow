import styled from "styled-components";

export const ContentContainer = styled.header`
  min-height: 66px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  top: 0;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  z-index: 10;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1040px;
  width: 100%;
  padding-left: 8px;
  padding-right: 8px;

  i {
    display: none;
    font-size: 23px;
    color: gray;
    cursor: pointer;
    @media (max-width: 700px) {
      display: flex;
    }
  }
`;

export const PagesXl = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: -0.02em;
  color: gray;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface MenuSmallProps {
  stateProgressBar: boolean;
}

export const MenuSmall = styled.div<MenuSmallProps>`
  display: ${(props) => (props.stateProgressBar ? "flex" : "none")};
  flex-direction: column;
  @media (min-width: 700px) {
    display: none;
  }
`;

export const ItemMenu = styled.div`
  cursor: pointer;
  margin-right: 50px;
  :last-child {
    margin-right: 0px;
  }
`;

export const ItemMenuSm = styled.div`
  cursor: pointer;
  color: gray;
  margin-bottom: 14px;
`;
