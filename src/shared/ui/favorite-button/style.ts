import styled from "@emotion/styled";

export const FavoriteButtonWrapper = styled.div`
  width: 32px;
  height: 32px;

  display: flex;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.bg.base};

  cursor: pointer;

  border-radius: 32px;

  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.06);

  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.06);

  box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.06);
`;
