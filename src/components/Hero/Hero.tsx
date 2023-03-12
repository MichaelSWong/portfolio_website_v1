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
    <SpanText marginB large>
      Hi, I&apos;m
    </SpanText>
    <SectionTitle main>
      Michael Wong. <br />I build and code things.
    </SectionTitle>
    <SectionText upper>Software Engineer, Full Stack Developer</SectionText>
    {/* <SectionText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia
      provident odit aliquid minus repellat blanditiis. Minima dignissimos sed
      libero, ipsam eum magni optio accusamus asperiores ut molestiae a ea.
    </SectionText> */}
    <Button
      onClick={() =>
        (window.location.href = 'mailto:wong.michael.shane@gmail.com')
      }
    >
      Get in touch
    </Button>
  </Section>
);

export default Hero;
