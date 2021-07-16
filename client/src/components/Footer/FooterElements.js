import styled from "styled-components";

export const FooterContainer = styled.div`
  height: 120px;
  width: 100%;
  background-color: #1f1f1f;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  dispaly: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterStatement = styled.span`
  font-family: "Yomogi", cursive;
  color: #fff;
`;
