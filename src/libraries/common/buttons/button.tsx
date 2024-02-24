'use client';
import clsx from 'clsx';
import React, { Ref, forwardRef } from 'react';

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  label?: string;
  buttonType?: 'default' | 'outline';
  minWidth?: 'full' | 'fit';
};

export const Button = forwardRef(function ButtonBase(
  props: ButtonProps,
  ref: Ref<HTMLButtonElement>
) {
  const {
    className,
    label,
    buttonType = 'default',
    minWidth = 'fit',
    disabled,
    type = 'button',
    ...reset
  } = props;
  const isDisabled = disabled;

  return (
    <button
      disabled={isDisabled}
      className={clsx(
        'button-custom',
        {
          'button-custom__default': buttonType === 'default',
          'button-custom__outline': buttonType === 'outline',
          'button-custom__disable': isDisabled,

          'button-custom__full': minWidth === 'full',
          'button-custom__fit': minWidth === 'fit'
        },
        className
      )}
      type={type}
      {...reset}
      ref={ref}
    >
      {label}
    </button>
  );
});
