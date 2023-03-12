import React, { PropsWithChildren } from 'react';

import { ButtonBack, ButtonFront } from './index';

type ButtonProps = {
  alt?: boolean;
  form?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>
    {props.children}
    <ButtonFront
      alt={props.alt}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </ButtonFront>
  </ButtonBack>
);

export default Button;
