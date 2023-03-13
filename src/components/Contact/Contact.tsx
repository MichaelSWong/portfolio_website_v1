import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '@/styles/GlobalComponents';
import Button from '@/styles/GlobalComponents/Button';
import React from 'react';

const Contact = () => (
  <Section id='contact'>
    <SectionDivider />
    <SectionTitle main>Touch Base</SectionTitle>
    <SectionText>
      I&apos;m always looking for opportunites to grow my network, feel free to
      contact me.
    </SectionText>
    <Button
      onClick={() =>
        (window.location.href = 'mailto:wong.michael.shane@gmail.com')
      }
    >
      Reach out
    </Button>
  </Section>
);

export default Contact;
