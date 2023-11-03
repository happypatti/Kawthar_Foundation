
import { LucideDollarSign, Baby, LayoutDashboard, Link, GraduationCap, Keyboard, Flower2 , Wrench} from 'lucide-react';

export default async function SEO() {


const features = [
  {
    name: 'Organic Results',
    description: 'Our web pages are all built with SEO in mind. Using NextJs and Tailwind CSS, we are able to create fast and responsive websites that rank high on Google, naturally.',
    icon: Baby,
    },
  {
    name: 'Paid Results',
    description: 'We offer GoogleAds and FacebookAds services. We will create and manage your ads to ensure you are getting the most out of your money. This is useful if a new business wants to get their name out there quickly!',
    icon: LucideDollarSign, 
  },
  {
    name: 'Content',
    description: 'SEO starts with your content. If the content on a website is no good, then the website will not rank well. We will work with you to create content that is both informative and SEO friendly.',
    icon: LayoutDashboard,
  },
  {
    name: 'Backlinks',
    description: 'Backlinks are a vital part of SEO. We will work with you to create a backlink strategy that will help everything else fall into place.',
    icon: Link,
  },
  {
    name: 'White Hat SEO',
    description: 'We only use white hat SEO techniques. This means that we will not use any shady tactics to get your website to rank. We will work with you to create a long term SEO strategy that will help your website rank for years to come.',
    icon: GraduationCap,
  },
  {
    name: 'Keyword Research',
    description: 'We will work with you to find the best keywords for your business. We will then create a strategy to rank for those keywords. This is extremely important to SEO success.',
    icon: Keyboard,
  },
  {
    name: 'Evolving Strategy',
    description: 'At Pixel Perfect Digital Solutions, we are constantly evolving our SEO strategy. We will work with you to create a long term SEO strategy that will help your website rank for years to come. We are always up to date with the latest SEO trends and will work with you to create a strategy that will help your website be a top result on Google.',
    icon: Flower2,
  },
  {
    name: 'Maintenance',
    description: 'We will always offer maintence for your website. We will make sure that your website is always up to date and that your SEO strategy is working. If any problems arise, we will be there to fix them.',
    icon: Wrench,
  },
]

return (
  <div className="z-10 flex flex-col items-center justify-center">
    <div className="bg-white/20 backdrop-blur-xl">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center items-center tracking-tight">Search Engine Optimization</h2>
        <p className="mt-4 text-xl items center text-center text-gray-900">
          SEO is a vital part to a websites success. Let us handle it for you.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          {features.map((feature) => (
            <div key={feature.name}>
              <div>
                <span className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 bg-opacity-10">
                  <feature.icon className="h-6 w-6 text-gray-900" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-medium text-blue-600">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-900">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>



    </div>
  );
}
