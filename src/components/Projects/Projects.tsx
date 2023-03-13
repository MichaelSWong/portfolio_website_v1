import {
  Section,
  SectionDivider,
  SectionTitle,
} from '@/styles/GlobalComponents';
import React from 'react';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
} from './ProjectsStyles';
import { projects } from '@/constants/constants';

const Projects = () => (
  <Section id='projects'>
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>
    <GridContainer>
      {projects.map((project, i) => (
        <BlogCard key={i}>
          <Img src={project.image} />
          <TitleContent>
            <HeaderThree text>{project.title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo className='card-info'>{project.description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {project.tags.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>;
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Code</ExternalLinks>
            <ExternalLinks href={project.source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);
export default Projects;
