import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: ['w-full rounded-full py-4 text-base font-medium outline-none'],

  variants: {
    variant: {
      primary: 'bg-black text-white hover:opacity-95',
      outline: 'bg-white text-black hover:bg-[#F0F0F0] border',
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
})

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    maxWidth?: string
  }

export function Button({
  variant,
  className,
  maxWidth,
  ...props
}: ButtonProps) {
  const maxWidthStyle = maxWidth ? { maxWidth } : undefined

  return (
    <button
      {...props}
      className={button({ variant, className })}
      style={maxWidthStyle}
    />
  )
}
