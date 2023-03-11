import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => (
  <Container>
    <Div1>
      <Link
        href='/'
        style={{
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          marginBottom: '20px',
        }}
      >
        <DiCssdeck size='3rem' />
        <Span>Portfolio</Span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects' passHref legacyBehavior>
          <NavLink>
            <span style={{ color: '#64ffda' }}>01.</span>Projects
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about' passHref legacyBehavior>
          <NavLink>
            <span style={{ color: '#64ffda' }}>02.</span>About
          </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#contatct' passHref legacyBehavior>
          <NavLink>
            <span style={{ color: '#64ffda' }}>03.</span>Contact
          </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/MichaelSWong'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/michael-shane-wong'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
