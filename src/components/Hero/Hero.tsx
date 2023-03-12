import React from 'react';

import {
  ButtonBack,
  ButtonFront,
  Section,
  SectionText,
  SectionTitle,
  SpanText,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';

const Hero = () => (
  <Section minheight>
    <SpanText marginB>Hi, I&apos;m</SpanText>
    <SectionTitle>
      Michael Wong. <br />I build and code things.
    </SectionTitle>
    <SectionText upper>Software Engineer, Full Stack Developer</SectionText>
    <Button onClick={() => (window.location.href = 'https://google.com')}>
      Get in touch
    </Button>
  </Section>
);

export default Hero;
