export interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  width?: number | string;
  position?: "left" | "right";
  closeOnOverlayClick?: boolean;
}
