import styled from "@emotion/styled";

export const ChipWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const ChipButton = styled.div<{ isOpened: boolean }>`
  padding: 9px 14px;
  background-color: ${({ theme, isOpened }) =>
    isOpened ? theme.colors.control.hover : theme.colors.control.base};
  border-radius: 18px;
  gap: 6px;

  cursor: pointer;

  display: flex;
  gap: 8px;

  & > :first-child {
    flex: 1;
  }

  :hover {
    background-color: ${({ theme }) => theme.colors.control.hover};
  }
`;

export const ChipDropdownContent = styled.div<{ isOpened: boolean }>`
  width: 100%;
  display: ${(props) => (props.isOpened ? "flex" : "none")};
  flex-direction: column;
  position: absolute;
  background-color: #fff;
  margin-top: 2px;
  border-radius: 11px;
  padding: 4px;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.06);
  z-index: 1;
`;

export const ChipDropdownOption = styled.div`
  width: 100%;
  display: flex;
  cursor: pointer;

  & > :first-child {
    width: 24px !important;
    height: 24px !important;
  }
`;
