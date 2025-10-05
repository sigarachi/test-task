import { NavWrapper } from "./style";

export const NavigationWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  return <NavWrapper>{children}</NavWrapper>;
};
