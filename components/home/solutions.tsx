import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import LogosScroll from "./logos-scroll";
import WebVitals from "./web-vitals";

export default function Solutions() {
  return (
    <div className="relative isolate w-full bg-blue-400 font-virgil text-3xl text-black md:overflow-hidden lg:h-[80vh]">
      <div className="container mx-auto h-full space-y-3 px-4 lg:grid lg:grid-cols-5 lg:space-y-0">
        <div className="py-4 text-center text-orange-300">Solutions</div>
        <div className="group lg:contents">
          <Link
            href="/websites"
            className="isolate z-10 flex items-center justify-center bg-amber-200 py-8 text-center hover:text-2xl md:after:translate-y-full md:hover:after:transform-none lg:-skew-x-[20deg] lg:after:absolute lg:after:inset-0 lg:after:-z-10 lg:after:bg-amber-400 lg:after:transition-all lg:after:duration-300"
          >
            Landing Pages / Applications
          </Link>
          <Image
            src="/nextlevel.JPG"
            alt="Full stack development"
            height={700}
            width={600}
            className="absolute bottom-[30%] left-5 hidden rounded-xl object-contain object-center opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100 lg:block lg:scale-0 lg:group-hover:transform-none"
          />
          <div className="absolute -bottom-[20%] right-28 z-20 hidden transition-all duration-300 group-hover:transform-none lg:block lg:translate-y-full">
            <div className="mockup-phone">
              <div className="camera"></div>
              <div className="display">
                <div className="artboard artboard-demo phone-1">
                  <Image
                    src="/jhj.PNG"
                    alt="Screen shot of dashboard on iphone"
                    height={692}
                    width={320}
                    className="translate-y-14 object-contain object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        

        <div className="group lg:contents">
          <Link
            href="/seo"
            className="isolate z-10 flex items-center justify-center bg-green-200 py-8 text-center hover:text-2xl md:after:translate-y-full md:hover:after:transform-none lg:-skew-x-[20deg] lg:after:absolute lg:after:inset-0 lg:after:-z-10 lg:after:bg-green-400 lg:after:transition-all lg:after:duration-300"
          >
            SEO
          </Link>
          <Image
            src="/search-rankings.png"
            alt="Full stack development"
            height={300}
            width={400}
            className="absolute -right-10 bottom-[15%] hidden translate-x-full object-contain object-center transition-all duration-300 group-hover:transform-none lg:block"
          />
          <div className="absolute bottom-[57%] hidden h-48 w-48 overflow-hidden rounded-xl  border border-gray-200 bg-white px-5 opacity-0 shadow-md duration-300 group-hover:opacity-100 group-hover:transition-all lg:block lg:scale-0 lg:group-hover:transform-none">
            <WebVitals title="Accessiblity" />
          </div>
          <div className="absolute bottom-[37%] left-[10%] hidden h-48 w-48 overflow-hidden rounded-xl  border border-gray-200 bg-white px-5 opacity-0 shadow-md duration-300 group-hover:opacity-100 group-hover:transition-all lg:block lg:scale-0 lg:group-hover:transform-none">
            <WebVitals title="Performance" />
          </div>
          <div className="absolute bottom-[17%] hidden h-48 w-48 overflow-hidden rounded-xl border border-gray-200 bg-white px-5 opacity-0 shadow-md duration-300 group-hover:opacity-100 group-hover:transition-all lg:block lg:scale-0 lg:group-hover:transform-none">
            <WebVitals title="Best Practice" />
          </div>
        </div>
        <div className="group lg:contents">
          <Link
            href="/digital-marketing"
            className="isolate z-10 flex items-center justify-center bg-red-200 py-8 text-center hover:text-2xl md:after:translate-y-full md:hover:after:transform-none lg:-skew-x-[20deg] lg:after:absolute lg:after:inset-0 lg:after:-z-10 lg:after:bg-red-400 lg:after:transition-all lg:after:duration-300"
          >
            Digital Marketing
          </Link>
          <div className="absolute bottom-32 right-0 hidden opacity-0 transition-opacity duration-300 group-hover:transform-none group-hover:opacity-100 lg:block lg:scale-0 lg:group-hover:h-auto">
            <LogosScroll direction="left" speed="fast" />
          </div>
          <div className="absolute right-0 top-1/2 z-[9] hidden opacity-0 transition-opacity duration-300 group-hover:transform-none group-hover:opacity-100 lg:block lg:scale-0 lg:group-hover:h-auto">
            <LogosScroll direction="right" speed="fast" />
          </div>
          <Image
            src="/dsd.png"
            alt="Full stack development"
            height={600}
            width={300}
            className="absolute bottom-2 left-28 z-[9] hidden origin-bottom-right rotate-45 object-contain object-center opacity-0 duration-300 group-hover:h-auto group-hover:transform-none group-hover:opacity-100 group-hover:transition-transform lg:block lg:h-0"
          />
        </div>

        <div className="flex items-end">
          <Link href="about-us" className="flex items-end py-4 text-red-500 hover:text-red-600 hover:underline">
            About Us
            <ArrowRightIcon className="ml-2 h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}
