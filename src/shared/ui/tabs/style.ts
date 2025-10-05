import styled from "@emotion/styled";

export const TabsWrapper = styled.div`
  display: flex;
  flex-direction: row;

  gap: 8px;
`;

export const TabWrapper = styled.div<{ isSelected?: boolean }>`
  ${(props) =>
    props.isSelected
      ? `border-bottom: 2px solid ${props.theme.colors.accent.base}; transition: ease-in 0.4ms;`
      : ""}

  padding: 8px;

  cursor: pointer;
`;
