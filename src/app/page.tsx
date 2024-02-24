'use client';
import { Button, InputForm } from '@/libraries/common';
import { FastField, Form, Formik } from 'formik';
import Link from 'next/link';
import * as Yup from 'yup';

export default function Home() {
  const validationSchema = Yup.object({
    account: Yup.string()
      .email('Enter your email or mobile phone number')
      .required('Enter your email or mobile phone number')
  });

  const initialValues = {
    account: ''
  };

  const handleSubmit = (values: any) => {
    console.log('value====>', values);
  };

  return (
    <div className="py-3.5 px-4.5 mb-4">
      {/** header */}
      <div className="flex items-center justify-center mb-4.5">
        <Link href="/">
          <i className="a-icon a-icon-logo" role="img" aria-label="Amazon"></i>
        </Link>
      </div>

      {/** main content */}
      <div className="w-[350px] md:w-[700px] mx-auto">
        <div className="w-[350px] mx-auto">
          <div className="rounded-lg block border border-solid border-gray-200 bg-white py-5 px-[26px]">
            {/** title */}
            <h1 className="mb-[10px] font-normal text-[28px] leading-[1.2]">Sign in</h1>

            {/** form content */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {() => {
                return (
                  <Form>
                    <FastField
                      label="Email or mobile phone number"
                      name="account"
                      component={InputForm}
                    />

                    <Button className="mt-3.5" type="submit" label="Continue" />
                  </Form>
                );
              }}
            </Formik>

            {/** legal text */}
            <div className="text-xs leading-normal mt-4.5 w-full">
              {"By continuing, you agree to Amazon's"}{' '}
              <Link
                className="box-border text-link no-underline transition-all ease-linear hover:text-link-hover hover:underline"
                href="/">
                Conditions of Use
              </Link>{' '}
              and{' '}
              <Link
                href="/"
                className="box-border text-link no-underline transition-all ease-linear hover:text-link-hover hover:underline">
                Privacy Notice
              </Link>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
