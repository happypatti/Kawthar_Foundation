import { ActivityIcon, CreditCardIcon, DollarSignIcon, PenLine, SearchIcon, ShieldCheckIcon } from "lucide-react";

export default function Features() {
  const features = [
    {
      name: "Personalized for your needs",
      description: "We will work with you to create a custom solution that fits your needs.",
      icon: PenLine,
    },
    {
      name: "100% Your Property",
      description:
        "We will never claim ownership of your property. You own it 100% of the time. When we're done, we'll hand over the keys.",
      icon: ShieldCheckIcon,
    },
    {
      name: "Payment Processing Solutions",
      description:
        "Start accepting payments on your website today. We offer a wide range of payment processing solutions.",
      icon: CreditCardIcon,
    },
    {
      name: "Perfect SEO",
      description:
        "We will optimize your website to be found by search engines. Your website will be at the top of the search results.",
      icon: SearchIcon,
    },
    {
      name: "Fast Performance",
      description:
        "We will optimize your website to be as fast as possible. Your website will load in the blink of an eye.",
      icon: ActivityIcon,
    },
    {
      name: "Lowest Price Guarantee",
      description: "We will beat any price. You won't find a better deal anywhere else.",
      icon: DollarSignIcon,
    },
  ];

  return (
    <div className="relative py-16">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-base font-semibold uppercase tracking-wider text-blue-600">Grow faster</h2>
        <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          Everything you need to establish a digital presence
        </p>
        <p className="mx-auto mt-5 max-w-prose text-xl text-gray-500">
          At Pixel Perfect Digital Solutions, we offer a unmatched quality at a price that can&apos;t be beat. We offer a wide range
          of full stack solutions to help you grow your business.
        </p>
        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root rounded-lg bg-gray-50 px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center rounded-md bg-blue-500 p-3 shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
