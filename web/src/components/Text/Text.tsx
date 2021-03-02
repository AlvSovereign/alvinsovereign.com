import { FC, ReactNode } from 'react';
import tw from 'twin.macro';

export type TextVariant =
  | 'body'
  | 'body2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'hero'
  | 'link'
  | 'subheading';

type TextProps = {
  children: ReactNode;
  color?: 'accent' | 'primary' | 'secondary';
  component?: string;
  href?: string;
  style?: 'italic';
  rel?: 'noreferrer' | 'noopener';
  target?: string;
  variant?: TextVariant;
  className?: string;
};

const Text: FC<TextProps> = ({
  children,
  className,
  color = 'primary',
  component: Component = 'p' as any,
  href,
  rel,
  style,
  target,
  variant,
}) => {
  return (
    <Component
      className={className}
      css={[
        color === 'accent' &&
          tw`text-slate-blue-normal dark:text-slate-yellow-normal`,
        color === 'primary' && tw`text-grey-normal dark:text-grey-lighter`,
        color === 'secondary' && tw`text-grey-light dark:text-grey-light`,
        style === 'italic' && tw`italic`,
        variant === 'hero' && tw`leading-10 text-6xl md:text-7xl`,
        variant === 'h1' && tw`text-3xl md:text-4xl font-medium`,
        variant === 'h2' && tw`text-2xl md:text-3xl font-medium`,
        variant === 'h3' && tw`text-xl md:text-2xl font-medium`,
        variant === 'link' && tw`text-slate-blue-normal underline`,
        variant === 'subheading' && tw`text-base md:text-lg`,
        variant === 'body' && tw`text-sm md:text-base`,
        variant === 'body2' && tw`text-xs md:text-sm`,
      ]}
      href={href}
      rel={rel}
      target={target}>
      {children}
    </Component>
  );
};

export default Text;
