import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './AboutStyles';

const About = () => (
  <Section id='about'>
    <SectionDivider />
    <SectionTitle main>About Me</SectionTitle>
    <SectionText>
      Hey, my name is Michael Wong and I&apos;m a Software Engineer who loves
      building creative and innovate dynamic user experiences.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size={`3rem`} />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React - Next - JS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size={`3rem`} />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node - SQL - Mongo
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend size={`3rem`} />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default About;
