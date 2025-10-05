import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 100%;
  height: 328px;
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.bg.base};

  border: 1px solid ${({ theme }) => theme.colors.stroke.cardBorder};

  transition: 0.4s;

  :hover {
    cursor: pointer;

    -webkit-box-shadow: 0px 10px 25px -16px rgba(34, 60, 80, 0.6);
    -moz-box-shadow: 0px 10px 25px -16px rgba(34, 60, 80, 0.6);
    box-shadow: 0px 10px 25px -16px rgba(34, 60, 80, 0.6);
  }
`;

export const CardTopWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;

  flex: 2;
`;

export const CardImageWrapper = styled.div`
  width: 100%;

  flex: 1;

  background-color: ${({ theme }) => theme.colors.stroke.cardBorder};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CardTopButtonWrapper = styled.div`
  position: absolute;
  width: fit-content;
  height: fit-content;
  top: 10px;
  right: 10px;
`;

export const CardBodyWrapper = styled.div`
  width: 100%;

  padding: 16px 8px;

  flex: 1;
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 8px;
`;
