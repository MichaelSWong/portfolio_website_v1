import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { Container, Div1, Div2, Div4, NavLink } from './HeaderStyles';
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
        {navSections.map((section) => (
          <Link key={section.id} href={section.href} passHref legacyBehavior>
            <NavLink>
              <SpanText>{section.id}. </SpanText>
              {section.title}
            </NavLink>
          </Link>
        ))}
      </Div2>
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
