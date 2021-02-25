import { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type TextVariant =
  | 'body'
  | 'body2'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'hero'
  | 'subheading';

type TextProps = {
  children: ReactNode;
  className?: string;
  color?: 'accent' | 'primary' | 'secondary';
  component?: string;
  href?: string;
  style?: 'italic';
  target?: string;
  variant?: TextVariant;
};

const Text: FC<TextProps> = ({
  children,
  className,
  color = 'primary',
  component: Component = 'p' as any,
  href,
  style,
  target,
  variant,
}) => {
  return (
    <Component
      className={clsx([
        className,
        color === 'accent' && 'text-slate-blue-normal dark:slate-blue-light',
        color === 'primary' && 'text-grey-normal dark:text-white',
        color === 'secondary' && 'text-grey-light dark:text-grey-light',
        Component === 'a' &&
          'text-slate-blue-normal dark:slate-blue-light underline',
        style === 'italic' && 'italic',
        variant === 'hero' && `leading-10 text-6xl md:text-7xl`,
        variant === 'h1' && `text-3xl md:text-4xl font-medium`,
        variant === 'h2' && `text-2xl md:text-3xl font-medium`,
        variant === 'h3' && `text-xl md:text-2xl font-medium`,
        variant === 'subheading' && `text-base md:text-lg`,
        variant === 'body' && `text-sm md:text-base`,
        variant === 'body2' && `text-xs md:text-sm`,
      ])}
      href={href}
      target={target}>
      {children}
    </Component>
  );
};

export default Text;
