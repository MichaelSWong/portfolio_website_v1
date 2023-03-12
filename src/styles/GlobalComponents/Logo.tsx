import Image from 'next/image';

interface ILogoProps {
  alt: string;
  src: string;
  height: number;
  width: number;
}

const Logo = (props: ILogoProps) => (
  <Image
    priority
    alt={props.alt}
    src={props.src}
    height={props.height}
    width={props.width}
  />
);

export default Logo;
