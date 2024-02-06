import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import Publications from "../../content/Publications.json";
import Award from "../../content/Award.json";
import Research from "../../content/Research.json";
import Teaching from "../../content/Teaching.json";
import Education from "../../content/Education.json";
import InvitedTalk from "../../content/InvitedTalk.json";
import ContentBlockWithImage from "../../components/Resume";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const ContentBlockWithoutImage = lazy(() => import("../../components/ContentBlockWithoutImage"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />


      {/* Tabs */}
      <ContentBlockWithoutImage
        direction="left"
        title={Education.title}
        content={Education.text}
        section={Education.section}
        icon=""
        id="education"
      />

      <ContentBlockWithoutImage
        direction="left"
        title={Research.title}
        content={Research.text}
        section={Research.section}
        icon="graphs.svg"
        id="research"
      />
      <ContentBlock
        direction="left"
        title={Teaching.title}
        content={Teaching.text}
        section={Teaching.section}
        icon="graphs.svg"
        id="teaching"
      />
      <MiddleBlock
        title={Publications.title}
        content={Publications.content}
        icon="developer.svg"
        id="publications"
      />
      <MiddleBlock
        title={Award.title}
        content={Award.content}
        icon="developer.svg"
        id="award"
      />
      <MiddleBlock
        title={InvitedTalk.title}
        content={InvitedTalk.content}
        icon="developer.svg"
        id="invitedTalk"
      />
      <ContentBlockWithImage
        direction="left"
        id="resume"
      />
      {/* <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      /> */}
    </Container>
  );
};

export default Home;
