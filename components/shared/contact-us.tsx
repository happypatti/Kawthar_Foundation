'use client';

import { MailIcon, PhoneIcon } from "lucide-react";
import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useRouter } from 'next/router';

export default function ContactUs() {
  const [state, handleSubmit] = useForm("moqoyzqj");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
      if (state.succeeded) {
          setShowSuccessMessage(true);
          const timer = setTimeout(() => {
              setShowSuccessMessage(false);
          }, 2000); // Change this to the desired delay in milliseconds
  
          return () => clearTimeout(timer);
      }
  }, [state.succeeded]);

  if (showSuccessMessage) {
      return <p className="text-4xl text-blue-400 font-bold">Thanks for contacting us!</p>; // Change '4xl' to the desired font size
  }


  return (
    <div className="container mx-auto px-4">
      <div className="relative w-full bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
        </div>
        <div className="relative mx-auto max-w-7xl lg:grid lg:grid-cols-5">
          <div className="bg-gray-50 px-4 py-16 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
            <div className="mx-auto max-w-lg">
              <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
              <p className="mt-3 text-lg leading-6 text-gray-500"></p>
              <dl className="mt-6 text-base text-gray-500">
                <div className="mt-6">
                  <dt className="sr-only">Phone number</dt>
                  <dd className="flex">
                    <PhoneIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">+1 (859) 608-3337</span>
                  </dd>
                </div>
                <div className="mt-3">
                  <dt className="sr-only">Email</dt>
                  <dd className="flex">
                    <MailIcon className="h-6 w-6 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <span className="ml-3">contact@pixelperfectky.com</span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <div className="bg-white px-4 py-16 sm:px-6 lg:col-span-3 lg:px-8 lg:py-24 xl:pl-12">
            <div className="mx-auto max-w-lg lg:max-w-none">
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6">
                <div>
                  <label htmlFor="full-name" className="sr-only">
                    Full name
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Full name"
                    required
                  />
                <ValidationError 
                prefix="full_name" 
                field="full_name"
                errors={state.errors}
                />

                </div>
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Email"
                    required
                  />
                  <ValidationError 
                prefix="email" 
                field="email"
                errors={state.errors}
                />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    className="block w-full rounded-md border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Phone"
                    required
                  />
                  <ValidationError 
                prefix="phone" 
                field="phone"
                errors={state.errors}
                />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border border-gray-300 px-4 py-3 placeholder-gray-500 shadow-sm focus:border-blue-400 focus:ring-blue-400"
                    placeholder="Message"
                    defaultValue={""}
                    required
                  />
                  <ValidationError 
                prefix="message" 
                field="message"
                errors={state.errors}
                />
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-blue-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
