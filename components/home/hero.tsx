'use client';

import Image from "next/image";
import React, {useEffect, useState} from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Hero() {
  const [state, handleSubmit] = useForm("moqobwve");
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
      return <p className="mt-6 text-4xl text-blue-400 font-bold mb-12 ">We will be in touch soon!</p>; // Change '4xl' to the desired font size
  }

  return (
    <div className="max-w-8xl container mx-auto my-8 px-4 lg:my-16">
      <div className="flex-row-reverse justify-around lg:flex">
        <div className="relative mx-auto sm:max-w-lg md:mt-6 lg:col-span-6 lg:ml-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <div className="p-4">
            <div className="relative mx-auto max-w-md">
           
            </div>
          </div>
        </div>
        <div className="text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:mt-8 lg:items-center lg:text-left">
          <h1>
            <span className="mt-1 block text-4xl font-extrabold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">Digital solutions for</span>
              <span className="block text-blue-400">your business</span>
            </span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            With the best prices in the industry, we offer a wide range of fullstack solutions to help you grow your
            business.
          </p>
          <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
            <p className="text-base font-medium text-gray-900">Enter email for a free consultation!</p>
            <form onSubmit={handleSubmit} className="mt-3 sm:flex">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
                placeholder="Enter your email"
                required
              />
              <ValidationError 
                prefix="Email" 
                field="email"
                errors={state.errors}
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Help me!
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
