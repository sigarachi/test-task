import { useRef } from "react";
import { Portal } from "../portal";
import {
  CloseButton,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "./style";
import { TextBlock } from "../text";
import type { DrawerProps } from "./interfaces";
import { FavoriteButtonWrapper } from "../favorite-button/style";
import { CrossIcon } from "../icons/cross-icon";
import { useTheme } from "@emotion/react";

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  title,
  children,
  width = 400,
  position = "right",
  closeOnOverlayClick = true,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  const theme = useTheme();

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <Portal>
      <DrawerOverlay isOpen={isOpen} onClick={handleOverlayClick}>
        <DrawerContent
          ref={drawerRef}
          isOpen={isOpen}
          width={width}
          position={position}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "drawer-title" : undefined}
        >
          <DrawerHeader>
            {title && <TextBlock variant="h3">{title}</TextBlock>}
            <CloseButton>
              <FavoriteButtonWrapper
                onClick={onClose}
                aria-label="Закрыть drawer"
              >
                <CrossIcon
                  width={14}
                  height={14}
                  color={theme.colors.text.primary}
                />
              </FavoriteButtonWrapper>
            </CloseButton>
          </DrawerHeader>

          <DrawerBody>{children}</DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Portal>
  );
};
