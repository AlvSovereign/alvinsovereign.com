import { cn } from '@/lib/utils'

type Tags = 'h1' | 'h2' | 'h3' | 'p'

export const H1 = ({
  as,
  children,
  className,
}: {
  as?: Tags
  children: React.ReactNode
  className?: string
}) => {
  const Tag = as || 'h1'

  return (
    <Tag className={cn('text-foreground scroll-m-20 text-4xl font-medium lg:text-5xl', className)}>
      {children}
    </Tag>
  )
}

export const DisplayH2 = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h2
      className={cn(
        'text-foreground scroll-m-20 text-3xl font-semibold tracking-tight md:text-5xl',
        className,
      )}
    >
      {children}
    </h2>
  )
}

export const H2 = ({
  as,
  children,
  className,
}: {
  as?: Tags
  children: React.ReactNode
  className?: string
}) => {
  const Tag = as || 'h2'

  return (
    <Tag
      className={cn(
        'text-foreground tracking scroll-m-20 text-3xl font-medium transition-colors first:mt-0',
        className,
      )}
    >
      {children}
    </Tag>
  )
}

export const DisplayH3 = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h3
      className={cn(
        'text-foreground scroll-m-20 text-2xl font-semibold tracking-tight md:text-5xl',
        className,
      )}
    >
      {children}
    </h3>
  )
}

export const H3 = ({
  as,
  children,
  className,
}: {
  as?: Tags
  children: React.ReactNode
  className?: string
}) => {
  const Tag = as || 'h3'

  return (
    <Tag
      className={cn('text-foreground scroll-m-20 text-2xl font-semibold tracking-tight', className)}
    >
      {children}
    </Tag>
  )
}

export const Lead = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <p className={cn('text-foreground text-xl', className)}>{children}</p>
}

export const P = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <p className={cn('text-foreground leading-7 [&:not(:last-child)]:mb-6', className)}>
      {children}
    </p>
  )
}

export const Span = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return <span className={cn('text-foreground leading-7', className)}>{children}</span>
}
