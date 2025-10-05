import styled from "@emotion/styled";

export const SkeletonLoader = styled.div`
  position: relative;
  height: 100%;
  :after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background-repeat: no-repeat;
    background-image:
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.8) 50%,
        rgba(255, 255, 255, 0) 100%
      ),
      linear-gradient(#aaaaaa 200px, transparent 0),
      linear-gradient(#ffffff 100%, transparent 0);
    background-size:
      264px 100%,
      213px 200px,
      100% 100%;
    background-position:
      0 0,
      151px 50px,
      0 0;
    animation: skeleton-animation 2000ms infinite;
  }

  @keyframes skeleton-animation {
    to {
      background-position:
        100% 0,
        151px 50px,
        0 0;
    }
  }
`;
