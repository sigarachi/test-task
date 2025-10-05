import styled from "@emotion/styled";

export const CardListWrapper = styled.div`
  display: grid;

  padding: 16px 10vw;

  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;

  & > * {
    align-self: center;
    /* justify-self: center; */
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    grid-template-columns: 1fr;

    padding: 16px 8px;

    & > * {
      width: 100% !important;
    }
  }
`;
