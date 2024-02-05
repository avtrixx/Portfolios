import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockProps } from "./types";
import { Button } from "../../common/Button";
import { SvgIcon } from "../../common/SvgIcon";
import {
  ContentSection,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  StyledRow,
  ButtonWrapper,
} from "./styles";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <h6>{t(title)}</h6>
        <ContentWrapper>
          <Content>{t(content)}</Content>
          {direction === "right" ? (
            <ButtonWrapper>
              {typeof button === "object" &&
                button.map(
                  (
                    item: {
                      color?: string;
                      title: string;
                      id?: string;
                    },
                    id: number
                  ) => (
                    <Button
                      key={id}
                      color={item.color}
                      onClick={() => scrollTo(item?.id ? item.id : "")}
                    >
                      {t(item.title)}
                    </Button>
                  )
                )}
            </ButtonWrapper>
          ) : (
            <ServiceWrapper>
              <Row justify="space-between">
                {typeof section === "object" &&
                  section.map(
                    (
                      item: {
                        title: string;
                        content: string;
                        icon: string;
                      },
                      id: number
                    ) => (
                      <Col key={id} span={10}>
                        <SvgIcon src={item.icon} width="60px" height="60px" />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    )
                  )}
              </Row>
            </ServiceWrapper>
          )}
        </ContentWrapper>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
