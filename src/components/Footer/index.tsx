import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { SvgIcon } from "../../common/SvgIcon";
import Container from "../../common/Container";

import i18n from "i18next";
import {
  FooterSection,
  Title,
  NavLink,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
} from "./styles";

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: { t: TFunction }) => {
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width="38px" height="38px" />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container >
          <Row justify="space-between">
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Contact")}</Language>
              <Para>
                {t(`Do you have any question? Feel free to reach out.`)}
              </Para>
              <a href="mailto:avinitagautam@gmail.com">
                <Chat>{t(`Let's Chat`)}</Chat>
              </a>
            </Col>
            <Col lg={10} md={10} sm={12} xs={12}>
              <Language>{t("Address")}</Language>
              <Para>Panchwati Apartment, Balaji Colony</Para>
              <Para>Samne Ghat, Varanasi, Uttar Pradesh 221005</Para>
              <Para>India</Para>
            </Col>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container >
          <Row
            justify="space-between"
            align="middle"
            style={{ paddingTop: "0rem" }}
          >
            <FooterContainer>
            <SocialLink
                href="https://www.linkedin.com/in/dr-avinita-gautam-83b427120/"
                src="linkedin.svg"
              />

              <SocialLink
                href="https://orcid.org/0000-0003-3920-8434"
                src="orcid.svg"
              />
              <SocialLink
                href="https://www.webofscience.com/wos/author/record/JZE-0168-2024"
                src="web-of-science.svg"
              />
              <SocialLink
                href= "https://scholar.google.com/citations?user=yYA5eC8AAAAJ&hl=en"
                src="google-scholar.svg"
              />
               <SocialLink
                href="https://bhu-in.academia.edu/AVINITAGAUTAM"
                src="academia.svg"
              />
               <SocialLink
                href="https://www.researchgate.net/profile/Avinita-Gautam "
                src="researchgate.svg"
              />
               <SocialLink
                href="https://www.growkudos.com/profile/avinita_gautam"
                src="KUDOS.png"
              />
            </FooterContainer>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
