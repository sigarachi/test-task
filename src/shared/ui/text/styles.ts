import styled from "@emotion/styled";
import type { TextColors, TextProps } from "./interfaces";

export const TextWrapper = styled("div")<
  TextProps & {
    textColor: keyof typeof TextColors;
  }
>`
  width: fit-content;

  color: ${({ textColor, theme }) => {
    switch (textColor) {
      case "link":
        return theme.colors.accent.base;
      case "inverted":
        return theme.colors.text.inverted;
      case "description":
        return theme.colors.text.secondary;
      default:
        return theme.colors.text.primary;
    }
  }};

  text-align: ${(props) => props.textAlign};

  display: flex;
  flex-wrap: wrap;

  & > h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  & > h1 {
    font-size: clamp(2.5rem, 1.875rem + 2vw, 3rem);
    font-weight: 600;
  }

  & > h2 {
    font-size: clamp(2.0625rem, 1.5156rem + 1.75vw, 2.5rem);
    font-weight: 600;
  }

  & > h3 {
    font-size: clamp(1.75rem, 1.3594rem + 1.25vw, 2.0625rem);
    font-weight: 600;
  }

  & > h4 {
    font-size: clamp(1.4375rem, 1.0469rem + 1.25vw, 1.75rem);
    font-weight: 600;
  }

  & > h5 {
    font-size: clamp(1.1875rem, 0.875rem + 1vw, 1.4375rem);
    font-weight: 600;
  }

  & > h6 {
    font-size: clamp(1rem, 0.7656rem + 0.75vw, 1.1875rem);
    font-weight: 600;
  }

  & > p {
    ${(props) => {
      if (props.variant === "body1") {
        return `
					font-size: clamp(0.8125rem, 0.5781rem + 0.75vw, 1rem);
                    font-weight: ${props.bold ? "600" : "300"}};
                `;
      }

      if (props.variant === "body2") {
        return `
					font-size: clamp(0.625rem, 0.3906rem + 0.75vw, 0.8125rem);
                    font-weight: ${props.bold ? "600" : "300"}};
                `;
      }
    }}
  }
`;
