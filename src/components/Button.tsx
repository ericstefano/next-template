import clsx from 'clsx';
import { ComponentPropsWithoutRef } from 'react';

export const Button = ({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'button'>) => {
  return (
    <button className={clsx('p-2 bg-red-500', className)} {...props}>
      {children}
    </button>
  );
};
