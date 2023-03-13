import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { Container, Div1, Div2, Div3, Div4, NavLink } from './HeaderStyles';
import { SpanText } from '@/styles/GlobalComponents';
import { navSections } from '@/constants/constants';
import Logo from '@/styles/GlobalComponents/Logo';

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
          <Logo alt='MW_Logo' src='MW_Logo.svg' height={40} width={40} />
        </Link>
      </Div1>
      <Div2>
        <Link href='#about' passHref legacyBehavior>
          <NavLink>
            <SpanText>00. </SpanText>
            About
          </NavLink>
        </Link>
        <Link href='#experience' passHref legacyBehavior>
          <NavLink>
            <SpanText>01. </SpanText>
            Experience
          </NavLink>
        </Link>
        <Link href='#Projects' passHref legacyBehavior>
          <NavLink>
            <SpanText>02. </SpanText>
            Projects
          </NavLink>
        </Link>
        <Link href='#contact' passHref legacyBehavior>
          <NavLink>
            <SpanText>03. </SpanText>
            Contact
          </NavLink>
        </Link>

        <NavLink href='/resume.pdf'>
          <SpanText border padding>
            Resume
          </SpanText>
        </NavLink>
      </Div2>
      <Div3>
        {toggle ? (
          <>
            <AiOutlineClose
              size={40}
              onClick={() => setToggle((prev) => !prev)}
              color='#4dcbf1'
            />
            <Div4>
              <Link href='#about' passHref legacyBehavior>
                <NavLink>About</NavLink>
              </Link>
              <Link href='#experience' passHref legacyBehavior>
                <NavLink>Experience</NavLink>
              </Link>
              <Link href='#Projects' passHref legacyBehavior>
                <NavLink>Projects</NavLink>
              </Link>
              <Link href='#contact' passHref legacyBehavior>
                <NavLink>Contact</NavLink>
              </Link>

              <NavLink href='/resume.pdf'>
                <SpanText border padding>
                  Resume
                </SpanText>
              </NavLink>
            </Div4>
          </>
        ) : (
          <BiMenuAltRight
            size={40}
            onClick={() => setToggle((prev) => !prev)}
            color='#4dcbf1'
          />
        )}
      </Div3>
    </Container>
  );
};

export default Header;
