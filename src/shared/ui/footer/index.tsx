import { useTheme } from "@emotion/react";
import { FlexLayout } from "../flex";
import { LogoIcon } from "../icons/logo-icon";
import { FooterInfoWrapper, FooterWrapper } from "./style";
import { TextBlock } from "../text";
import { WhatsAppIcon } from "../icons/whatsapp-icon";
import { CallIcon } from "../icons/call-icon";
import { Divider } from "../divider";

export const Footer = () => {
  const theme = useTheme();

  return (
    <FooterWrapper>
      <FooterInfoWrapper>
        <FlexLayout direction="column" gap="16px" height="100%">
          <LogoIcon color={theme.colors.text.inverted} />
          <TextBlock color="inverted" variant="h5">
            Контакты
          </TextBlock>
          <FlexLayout direction="row" align="center" gap="8px">
            <WhatsAppIcon
              width={24}
              height={24}
              color={theme.colors.text.inverted}
            />
            <FlexLayout color="inverted" direction="column">
              <TextBlock color="inverted" variant="body1">
                Whats App
              </TextBlock>
              <TextBlock color="inverted" variant="body1">
                +7 945-918-2135
              </TextBlock>
            </FlexLayout>
          </FlexLayout>
          <FlexLayout direction="row" align="center" gap="8px">
            <CallIcon
              width={24}
              height={24}
              color={theme.colors.text.inverted}
            />
            <FlexLayout color="inverted" direction="column">
              <TextBlock color="inverted" variant="body1">
                Позвоните нам
              </TextBlock>
              <TextBlock color="inverted" variant="body1">
                +7 945-918-2132
              </TextBlock>
            </FlexLayout>
          </FlexLayout>
        </FlexLayout>
        <FlexLayout direction="column" gap="8px" height="100%">
          <TextBlock color="inverted" variant="h5">
            Категории
          </TextBlock>
          <Divider />
          <TextBlock color="inverted" variant="body1">
            <ul>
              <li>Автотовары</li>
              <li>Аксессуары</li>
              <li>Дом и сад</li>
              <li>Обувь</li>
              <li>Одежда</li>
              <li>Техника</li>
              <li>Туризм</li>
            </ul>
          </TextBlock>
        </FlexLayout>
        <FlexLayout direction="column" height="100%" gap="8px">
          <TextBlock color="inverted" variant="h5">
            Полезно
          </TextBlock>
          <Divider />
          <TextBlock color="inverted" variant="body1">
            <ul>
              <li>О компании</li>
              <li>Документы</li>
              <li>Частые вопросы</li>
            </ul>
          </TextBlock>
        </FlexLayout>
      </FooterInfoWrapper>
      <Divider />
      <FlexLayout align="center" justify="center">
        <TextBlock variant="body1" color="inverted">
          © 2025 Все права защищены
        </TextBlock>
      </FlexLayout>
    </FooterWrapper>
  );
};
