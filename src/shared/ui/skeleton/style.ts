import styled from "@emotion/styled";

//background: linear-gradient(90deg, #5c5c5cff 30%, #222222 50%, #444444ff 70%);

export const SkeletonLoader = styled.div<{ br: string }>`
  width: 100%;
  min-height: 100%;
  background: ${({ theme }) =>
    theme.mode === "light"
      ? `linear-gradient(90deg, #ededed 30%, #dcdcdc 50%, #ededed 70%)`
      : `linear-gradient(90deg, #5c5c5cff 30%, #222222 50%, #444444ff 70%)`};
  background-size: 400%;
  animation: shimmer 1.5s infinite linear;
  border-radius: ${({ br }) => br};

  @keyframes shimmer {
    0% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0 0;
    }
  }
`;
