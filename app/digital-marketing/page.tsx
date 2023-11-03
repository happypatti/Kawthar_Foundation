import ContactUs from "@/components/shared/contact-us";
import Image from "next/image";
import { CheckIcon } from '@heroicons/react/outline'


export default async function DigitalMarketing() {
  const features = [
    {
      name: 'Website Marketing',
      description: 'Fast loading, mobile friendly, and optimized for search engines are a key to marketing your website.',
    },
    {
      name: 'Pay Per Click Advertising',
      description: 'Ad Campaigns on Google, Facebook, Instagram, and more.',
    },
    {
      name: 'Content Marketing',
      description: 'Visually appealing content that is optimized for search engines and naturally attracts customers.',
    },
    {
      name: 'Email Marketing',
      description: 'Email campaigns are one of the most effective ways to reach your customers. Let us help get you set-up.',
    },
    {
      name: 'Social Media Marketing',
      description: 'Social media is a great way to reach your customers. We will help you create a strategy that will help you reach your customers and grow your business.',
    },
    {
      name: 'Video Marketing',
      description: 'Video marketing is an excellent way to attract new customers using websites like Youtube and X.',
    },
    {
      name: 'Text Messaging',
      description: 'Are you really looking to grow? Text messaging potential clients can be a great way to get your name out there.',
    },
    {
      name: 'Affiliate Marketing',
      description: 'Working with influencers and other businesses to promote your product or service can be a great way to grow your business.',
    },
  ]
  
  return (
    <div className="z-10 flex flex-col items-center justify-center">
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Digital Marketing</h2>
          <p className="mt-4 text-lg text-blue-600">
            Lets get your business in front of the right people.
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <dt>
                <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                <p className="ml-9 text-lg leading-6 font-bold text-blue-600">{feature.name}</p>
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-900">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
  );
}
