import { Row, Col } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, StyledRow } from "./styles";
import { Link } from 'react-router-dom';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface MiddleBlockProps {
  title: string;
  content: {
    text: string;
    link?: string;
  }[];
  button?: string;
  icon: string;
  id?: string;
  t: TFunction;
}

const MiddleBlock = ({ title, content, button, icon, id, t }: MiddleBlockProps) => {
  const scrollTo = (targetId: string) => {
    const element = document.getElementById(targetId) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <MiddleBlockSection>
      <Slide direction="up" triggerOnce>
        <StyledRow
          justify="space-between"
          // align="middle"
          id={id}
          direction={"left"}
        >
          <Col lg={24} md={24} sm={24} xs={24}>
            <h6>{t(title)}</h6>
            <Content>
              <ul>
                {content.map((item, index) => (
                  <li key={index}>
                    {item.link ? (
                        // External link
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {t(item.text)} <FaExternalLinkAlt />
                        </a>
                      ) : (
                      // No link
                      t(item.text)
                    )}
                  </li>
                ))}
              </ul>
            </Content>
          </Col>
        </StyledRow>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
