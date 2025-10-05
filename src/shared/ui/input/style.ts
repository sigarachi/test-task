import styled from "@emotion/styled";

export const InputWrapper = styled.div<{ width?: string }>`
  width: ${({ width }) => width};
  display: flex;
  border-radius: 10px;
  padding: 15px;

  gap: 8px;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.control.base};

  :focus-within {
    background-color: ${({ theme }) => theme.colors.control.hover};
  }
`;

export const StyledInput = styled.input`
  outline: none !important;
  flex: 1;
  background-color: inherit;
  border: none;

  color: ${({ theme }) => theme.colors.text.primary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.text.primary};
  }

  :focus {
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.control.hover};
  }

  :focus {
    ::placeholder {
      color: ${({ theme }) => theme.colors.text.secondary};
    }
  }
`;
