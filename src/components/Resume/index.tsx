import { Fade } from "react-awesome-reveal";
import { withTranslation } from "react-i18next";
import { ContentBlockWithImageProps } from "./types";
import { Button } from "../../common/Button";
import resumePdfUrl from 'pdf/cv.pdf';
import conferencePdfUrl from 'pdf/Conferences.pdf';
import * as styles from "./styles";

const ContentBlock = ({
  t,
  id,
  name,
  direction,
}: ContentBlockWithImageProps) => {
  const pdfUrl = name === 'Resume' ? resumePdfUrl : conferencePdfUrl
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };

  const openPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, "_blank");
    }
  };


  return (
    <styles.ContentSection>
      <Fade direction={direction} triggerOnce>
        <h6>{name}</h6>
        {pdfUrl && (
          <Button onClick={openPdf} color="orange">{t("Open PDF")}</Button>
        )}
        <styles.StyledRow
          justify="space-between"
          align="middle"
          id={id}
          direction={"left"}
        >
        </styles.StyledRow>
      </Fade>
    </styles.ContentSection>
  );
};

export default withTranslation()(ContentBlock);
