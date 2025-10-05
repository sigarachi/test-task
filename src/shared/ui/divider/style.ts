import styled from "@emotion/styled";

export const DividerLine = styled.div<{ width?: string }>`
  width: ${({ width }) => width ?? "100%"};
  min-height: 1px;
  border-top: 1px solid ${({ theme }) => theme.colors.stroke.cardBorder};
`;
