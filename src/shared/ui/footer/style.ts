import styled from "@emotion/styled";

export const FooterWrapper = styled.div`
  padding: 64px 10vw;

  display: flex;

  flex-direction: column;

  gap: 16px;

  background-color: #111111;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    padding: 16px 8px;
  }
`;

export const FooterInfoWrapper = styled.div`
  display: grid;

  //padding: 16px 10vw;

  grid-template-columns: repeat(3, minmax(218px, 1fr));
  grid-column-gap: 30px;
  grid-row-gap: 20px;

  & > * {
    align-self: center;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;

    padding: 16px 8px;

    & > * {
      width: 100% !important;
    }
  }
`;
