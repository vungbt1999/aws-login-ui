import clsx from 'clsx';
import { FieldInputProps, FormikProps } from 'formik';
import { Ref, forwardRef } from 'react';

type InputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'size'
> & {
  field?: FieldInputProps<never>;
  form?: FormikProps<any>;
  label?: string;
  isLoading?: boolean;
  isRequired?: boolean;

  error?: string;
};

export const InputForm = forwardRef(function Input(props: InputProps, ref: Ref<HTMLInputElement>) {
  const { className, field, form, isLoading, isRequired, disabled, label, onChange, ...reset } =
    props;
  const name = field?.name;
  const isHaveError = !form || !name ? false : form.errors[name] && form.touched[name];

  return (
    <div className="input-wrap">
      <label htmlFor={name} className="block pl-[2px] pb-[2px] font-bold">
        {label}
      </label>

      <input
        ref={ref}
        name={name}
        id={name}
        value={field?.value}
        onChange={(e) => {
          if (disabled) return;
          if (onChange) {
            onChange(e);
          }
          field?.onChange(e);
        }}
        onBlur={field?.onBlur}
        disabled={disabled}
        className={clsx('input-custom', {
          'input-custom__danger': isHaveError,
          'input-custom__disable': disabled
        })}
        {...reset}
      />
    </div>
  );
});
