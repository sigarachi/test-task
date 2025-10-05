import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  width: 227px;
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
  display: flex;
  position: relative;

  flex: 2;
`;

export const CardImageWrapper = styled.div`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.stroke.cardBorder};

  border-radius: 16px 16px 0px 0;

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
  padding: 16px 8px;

  flex: 1;
`;

export const CardFooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 16px 8px;
`;
