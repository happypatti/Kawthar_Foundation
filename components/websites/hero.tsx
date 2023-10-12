import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative md:mt-16">
      <div className="absolute inset-x-0 top-0 hidden h-1/2 bg-gray-50 lg:block" aria-hidden="true" />
      <div className="mx-auto max-w-7xl bg-blue-600 lg:bg-transparent lg:px-8">
        <div className="lg:grid lg:grid-cols-12">
          <div className="relative z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
            <div className="absolute inset-x-0 h-1/2 bg-gray-50 lg:hidden" aria-hidden="true" />
            <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
              <div className="aspect-h-10 aspect-w-10 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-w-1">
              
              </div>
            </div>
          </div>

          <div className="relative bg-blue-600 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
            <div className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block" aria-hidden="true">
              <svg
                className="absolute bottom-full left-full -translate-x-2/3 translate-y-1/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
              <svg
                className="absolute top-full -translate-x-1/3 -translate-y-1/3 transform xl:-translate-y-1/2"
                width={404}
                height={384}
                fill="none"
                viewBox="0 0 404 384"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-blue-500" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={384} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
              </svg>
            </div>
            <div className="relative mx-auto -mt-4 max-w-md space-y-6 px-4 pb-12 sm:max-w-3xl sm:px-6 sm:py-16 md:-mt-0 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
              <h2 className="text-3xl font-extrabold text-white" id="join-heading">
                Fullstack Solutions. Pixel Perfect Design.
              </h2>
              <p className="text-lg text-white">
                Get a digital presence that will help you grow your business. We offer a wide range of services to help
                you get started. Starting at $500.
              </p>
              <a
                className="block w-full rounded-md border border-transparent bg-white px-5 py-3 text-center text-base font-medium text-blue-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                href="#portfolio"
              >
                Explore our portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
