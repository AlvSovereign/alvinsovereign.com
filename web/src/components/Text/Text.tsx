import { FC, ReactNode } from 'react';
import clsx from 'clsx';

export type TextVariant = 'body' | 'h1' | 'h2' | 'h3' | 'hero';

type TextProps = {
  children: ReactNode;
  className?: string;
  color?: 'accent' | 'primary' | 'secondary';
  component?: string;
  variant?: TextVariant;
};

const Text: FC<TextProps> = ({
  children,
  className,
  color = 'primary',
  component: Component = 'p' as any,
  variant,
}) => {
  return (
    <Component
      className={clsx([
        className,
        color === 'accent' && 'text-slate-blue-normal dark:slate-blue-light',
        color === 'primary' && 'text-grey-normal dark:text-white',
        color === 'secondary' && 'text-grey-light dark:text-grey-light',
        variant === 'hero' && `leading-10 text-6xl md:text-7xl`,
        variant === 'h1' && `text-3xl md:text-4xl`,
        variant === 'h2' && `text-2xl md:text-3xl`,
        variant === 'h3' && `text-xl md:text-2xl`,
        variant === 'body' && `text-lg md:text-xl`,
      ])}>
      {children}
    </Component>
  );
};

export default Text;
