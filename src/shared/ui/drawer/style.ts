import styled from "@emotion/styled";

export const DrawerOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 10000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    visibility: visible;
  `}
`;

export const DrawerContent = styled.div<{
  isOpen: boolean;
  width: number | string;
  position: "left" | "right";
}>`
  position: fixed;
  top: 0;
  ${({ position }) => (position === "right" ? "right: 0;" : "left: 0;")}
  height: 100vh;
  width: ${({ width }) => (typeof width === "number" ? `${width}px` : width)};
  background: ${({ theme }) => theme.colors.bg.base};
  box-shadow: -2px 0 16px rgba(0, 0, 0, 0.1);
  z-index: 10001;
  transform: ${({ position }) =>
    position === "right" ? "translateX(100%)" : "translateX(-100%)"};
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  ${({ isOpen, position }) =>
    isOpen &&
    `
    transform: ${position === "right" ? "translateX(0)" : "translateX(0)"};
  `}
`;

export const DrawerHeader = styled.div`
  height: 30%;

  padding: 16px 8px;

  position: relative;

  background-color: ${({ theme }) => theme.colors.stroke.cardBorder};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const DrawerBody = styled.div`
  padding: 24px;
  height: calc(100vh - 80px);
  overflow-y: auto;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 5%;
  right: 5%;
`;
