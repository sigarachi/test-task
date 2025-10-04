import styled from "@emotion/styled";

export const ButtonWrapper = styled.button`
  margin: 0;
  padding: 15px 54px;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  background-color: ${(props) => props.theme.colors.control.base};

  :hover {
    background-color: ${(props) => props.theme.colors.control.hover};
  }
`;
