'use client';
import { Button, InputForm } from '@/libraries/common';
import clsx from 'clsx';
import { FastField, Form, Formik } from 'formik';
import Link from 'next/link';
import { useState } from 'react';
import * as Yup from 'yup';

const expanderOptions = [
  { label: 'Forgot your password?', href: '/' },
  { label: 'Other issues with Sign-In', href: '/' }
];

const footerMenus = [
  { label: 'Conditions of Use', href: '/' },
  { label: 'Privacy Notice', href: '/' },
  { label: 'Help', href: '/' }
];

export default function Home() {
  const [showExpander, setShowExpander] = useState<boolean>(false);

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
          {/** main session */}
          <div className="rounded-lg block border border-solid border-gray-200 bg-white py-5 mb-5.5 px-[26px]">
            {/** title */}
            <h1 className="mb-[10px] font-normal text-[28px] leading-[1.2]">Sign in</h1>

            {/** form content */}
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
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
                href="/"
              >
                Conditions of Use
              </Link>{' '}
              and{' '}
              <Link
                href="/"
                className="box-border text-link no-underline transition-all ease-linear hover:text-link-hover hover:underline"
              >
                Privacy Notice
              </Link>
              .
            </div>

            {/** need help */}
            <div className="mt-5.5">
              <div className="relative">
                <div
                  className="expander-view relative inline-block pl-[11px] text-link transition-all ease-linear cursor-pointer"
                  onClick={() => setShowExpander(!showExpander)}
                >
                  <i
                    className={clsx('expander-icon a-icon a-icon-collapse', {
                      'a-icon-collapse-open': showExpander
                    })}
                  ></i>
                  <span className="text-need-help">Need help?</span>
                </div>

                {/** list expander */}
                <ul className={clsx('block transition-all ease-linear', { hidden: !showExpander })}>
                  {expanderOptions.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="block mt-1 pl-[11px] overflow-hidden text-link transition-all ease-linear hover:text-link-hover hover:underline"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/** divider */}
            <div className="bg-transparent block h-[1px] border-[0] border-t border-solid border-gray leading-[19px] mt-5.5"></div>

            <span className="mb-1 mt-3.5 font-bold inline-block">Buying for work?</span>
            <Link
              href="/"
              className="no-underline text-link block box-border transition-all ease-linear hover:text-link-hover hover:underline"
            >
              Shop on Amazon Business
            </Link>
          </div>

          {/** divider session */}
          <div className="divider-session text-center relative -top-[2px] pt-[1px] mb-[7px]">
            <h5 className="leading-[1] text-xs text-gray-600 font-normal z-[2] relative inline-block bg-white pr-2 pl-[7px]">
              New to Amazon?
            </h5>
          </div>

          <Button type="button" buttonType="outline" label="Create your Amazon account" />
        </div>
      </div>

      {/** footer */}
      <div className="mb-0 mt-[26px]">
        <div className="footer-divider">
          <div className="footer-divider-inner"></div>
        </div>

        {/** footer menu */}
        <div className="text-11 leading-[1.456] text-center mb-[10px] flex gap-[26px] justify-center items-center">
          {footerMenus.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="no-underline text-link block box-border transition-all ease-linear hover:text-link-hover hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/** copyright */}
        <div className="text-center">
          <span className="text-11 leading-[1.456] text-gray-700">
            © 1996-2024, Amazon.com, Inc. or its affiliates
          </span>
        </div>
      </div>
    </div>
  );
}
