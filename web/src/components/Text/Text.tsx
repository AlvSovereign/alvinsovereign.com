import { FC, ReactNode } from 'react';

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
      className={[
        color === 'accent' &&
          `text-slate-blue-normal dark:text-slate-yellow-normal`,
        color === 'primary' && `text-grey-normal dark:text-grey-lighter`,
        color === 'secondary' && `text-grey-light dark:text-grey-light`,
        style === 'italic' && `italic`,
        variant === 'hero' && `leading-10 text-6xl md:text-7xl`,
        variant === 'h1' && `text-3xl md:text-4xl font-medium`,
        variant === 'h2' && `text-2xl md:text-3xl font-medium`,
        variant === 'h3' && `text-xl md:text-2xl font-medium`,
        variant === 'link' && `text-slate-blue-normal underline`,
        variant === 'subheading' && `text-base md:text-lg`,
        variant === 'body' && `text-sm md:text-base`,
        variant === 'body2' && `text-xs md:text-sm`,
        className,
      ].join(' ')}
      href={href}
      rel={rel}
      target={target}>
      {children}
    </Component>
  );
};

export default Text;
