import React, { useState } from 'react';
import { VscDebugBreakpointLog } from 'react-icons/vsc';
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '@/styles/GlobalComponents';
import {
  GridContainer,
  Outlet,
  ResumeDiv,
  TabText,
  UlNav,
} from './ExperienceStyles';
import TabNavItem from '../Tabs/TabNavItem';
import TabContent from '../Tabs/TabContent';

const Experience = () => {
  const [activeTab, setActiveTab] = useState('fnb');
  return (
    <Section id='experience'>
      <SectionDivider />
      <SectionTitle main>Places I&apos;ve Worked</SectionTitle>
      <GridContainer>
        <UlNav>
          <TabNavItem
            title='F.N.B. Corp'
            id='fnb'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <TabNavItem
            title='Interac'
            id='interac'
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </UlNav>
        <Outlet>
          <TabContent id='fnb' activeTab={activeTab}>
            <TabText large colorAlt>
              Application Developer II
            </TabText>
            <TabText>March 2018 - Present</TabText>
            <ResumeDiv>
              <VscDebugBreakpointLog size={29.95} color='#4dcbf1' />
              <TabText>
                Write modern and maintainable code for a variety of internal
                projects
              </TabText>
            </ResumeDiv>
            <ResumeDiv>
              <VscDebugBreakpointLog size={68} color='#4dcbf1' />
              <TabText>
                Engineer modern applications with a variety of different
                languages and frameworks such as JavaScript, TypeScript, React,
                Python, Rust, C#, SQL, MongoDB and Redis
              </TabText>
            </ResumeDiv>
            <ResumeDiv>
              <VscDebugBreakpointLog size={36.75} color='#4dcbf1' />
              <TabText>
                Build reusable components in our UI library to save 100+ hours
                of development per month
              </TabText>
            </ResumeDiv>
            <ResumeDiv>
              <VscDebugBreakpointLog size={42.25} color='#4dcbf1' />
              <TabText>
                Document all supported systems and applications to effectively
                train new and existing team members
              </TabText>
            </ResumeDiv>
          </TabContent>
          <TabContent id='interac' activeTab={activeTab}>
            <TabText large colorAlt>
              Assistant Language Teacher
            </TabText>
            <TabText>August 2004 - March 2018</TabText>
            <ResumeDiv>
              <VscDebugBreakpointLog size={72.25} color='#4dcbf1' />
              <TabText>
                Strengthened planning and organizational skills by teaching
                English to 15,000+ students with 200 different teachers at 25
                schools, over the course of thirteen and a half years
              </TabText>
            </ResumeDiv>
            <ResumeDiv>
              <VscDebugBreakpointLog size={38.72} color='#4dcbf1' />
              <TabText>
                Led the English Speaking Club, acting as a cultural ambassador
                to junior high school students.
              </TabText>
            </ResumeDiv>
            <ResumeDiv>
              <VscDebugBreakpointLog size={31.12} color='#4dcbf1' />
              <TabText>
                Modeled lessons to new teachers and utilized classroom
                management skills
              </TabText>
            </ResumeDiv>
          </TabContent>
        </Outlet>
      </GridContainer>
    </Section>
  );
};

export default Experience;
