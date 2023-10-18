import Image from "next/image";

export default function Hero() {
  return (
    <div className="max-w-8xl container mx-auto my-8 px-4 lg:my-16">
      <div className="flex-row-reverse justify-around lg:flex">
        <div className="relative mx-auto sm:max-w-lg md:mt-6 lg:col-span-6 lg:ml-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <div className="p-4">
            <div className="relative mx-auto max-w-md">
              <Image
                className="mx-auto w-2/3 md:w-full"
                src="/pixelated.png"
                alt="PP logo"
                height={600}
                width={550}
              />
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
            <form action="https://formspree.io/f/moqoyzqj" method="POST" className="mt-3 sm:flex">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="block w-full rounded-md border-gray-300 py-3 text-base placeholder-gray-500 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:flex-1"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:inline-flex sm:w-auto sm:flex-shrink-0 sm:items-center"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
