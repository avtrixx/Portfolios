import { Row, Col, Space } from "antd";
import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";

import { ContentBlockWithoutImageProps } from "./types";
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
import Tooltip from "antd/es/tooltip";

const ContentBlock = ({
  icon,
  title,
  content,
  section,
  button,
  t,
  id,
  direction,
}: ContentBlockWithoutImageProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <ContentSection>
      <Fade direction={direction} triggerOnce>
        <StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={direction}
        ></StyledRow>
        <h6>{t(title)}</h6>
        <ServiceWrapper>
              <Row justify="space-between">
                {typeof section === "object" &&
                section.map(
                  (
                    item: {
                      title: string;
                      content: string;
                      duration?: string;
                      lab?: string;
                      icon: string;

                    },
                    id: number
                  ) => (
                    <Row key={id} >
                    {/* Column for Icon */}
                    <Col span={6}>
                      <SvgIcon src={item.icon} width="60px" height="60px" />
                    </Col>
              
                    {/* Column for Title, Duration, and Content */}
                    <Col >
                    <ContentWrapper>
                      <Content>
                      <MinTitle>{t(item.title)}</MinTitle>
                      <MinPara>{t(item?.duration ? item.duration : "")}</MinPara>
                      <MinPara>{t(item?.lab ? item.lab : "")}</MinPara>
                      <MinPara>{t(item.content)}</MinPara>
                      </Content>
                    
                    </ContentWrapper>
                     
                    </Col>
                  </Row>
                  )
                )}
              </Row>
            </ServiceWrapper>
      </Fade>
    </ContentSection>
  );
};

export default withTranslation()(ContentBlock);
