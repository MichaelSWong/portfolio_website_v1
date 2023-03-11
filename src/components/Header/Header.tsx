import Link from 'next/link';
import React, { useState } from 'react';
import { DiCssdeck } from 'react-icons/di';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineClose,
} from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import {
  Container,
  Div1,
  Div2,
  Div3,
  Div4,
  NavLink,
  SocialIcons,
  Span,
} from './HeaderStyles';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
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
          <DiCssdeck size={40} />
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
      {/* <Div3>
      <SocialIcons href='https://github.com/MichaelSWong'>
        <AiFillGithub size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/michael-shane-wong'>
        <AiFillLinkedin size='3rem' />
      </SocialIcons>
    </Div3> */}
      <Div4>
        {toggle ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <AiOutlineClose
              size={40}
              onClick={() => setToggle((prev) => !prev)}
            />
            <div>
              <li>Projects</li>
              <li>About</li>
              <li>Contact</li>
            </div>
          </div>
        ) : (
          <BiMenuAltRight
            size={40}
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
      </Div4>
    </Container>
  );
};

export default Header;
