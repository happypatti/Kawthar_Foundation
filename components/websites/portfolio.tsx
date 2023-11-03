import Image from "next/image";

const projects = [
  {
    title: "Abdullah Ahmad Law Office",
    href: "https://aalawky.xom",
    category: { name: "Landing Page", href: "https://aalawky.com" },
    description:
      "AA Law needed a landing page and more importantly, they were looking for the perfect SEO. We also helped them get started with GoogleAds to help them get even more clients.",
    date: "August 2023",
    datetime: "2023-08-16",
    imageUrl:
      "/aalaw.png",
    author: {
      name: "Ali Shalash",
      href: "#",
      imageUrl:
        "/ali.jpg",
    },
  },
  {
    title: "NEXTLEVEL Sports of Lexington",
    href: "https://nextlevellex.com",
    category: { name: "FullStack Application", href: "https://nextlevellex.com" },
    description:
      "We created a custom website for NEXTLEVEL Sports of Lexington. The website is built using Next.js and Tailwind CSS. This site features a backend capable of handling reservations and payments.",
    date: "September 2023",
    datetime: "2023-09-12",
    imageUrl: "/nextl3v3l.png",
    author: {
      name: "Ali Shalash",
      href: "#",
      imageUrl:
        "/ali.jpg",
    },
  },
  {
    title: "Lextro",
    href: "https://www.lextro.com",
    category: { name: "FullStack Application", href: "https://www.lextro.com" },
    description:
      "We worked with Lextro to update their outdated website and built them a custom catalogue that runs off a python backend(deployed using heraku).",
    date: "October 2023",
    datetime: "2020-07-01",
    imageUrl: "/lextro.PNG",
    author: {
      name: "Ali Shalash",
      href: "#",
      imageUrl:
        "/ali.jpg",
    },
  },
  {
    title: "Shunar Construction",
    href: "https://shunar-repo.vercel.app",
    category: { name: "Landing Page", href: "https://shunar-repo.vercel.app" },
    description:
      "We worked with Shunar Construction to create a landing page for their business. They specialize in a great deal of construction services and we wanted to make sure that their website reflected that.",
    date: "August 2023",
    datetime: "2023-08-16",
    imageUrl:
      "/sooo.png",
    author: {
      name: "Ali Shalash",
      href: "#",
      imageUrl:
        "/ali.jpg",
    },
  },
  {
    title: "Used Tires & Auto Repair",
    href: "https://www.usedtireautolexington.com",
    category: { name: "Landing Page", href: "https://www.usedtireautolexington.com" },
    description:
      "We worked with Used Tires & Auto Repair to create a landing page, and to also optimize their SEO. They are currently enjoying new clients and a higher ranking on Google.",
    date: "August 2023",
    datetime: "2023-08-16",
    imageUrl:
      "/usedtire.png",
    author: {
      name: "Ali Shalash",
      href: "#",
      imageUrl:
        "/ali.jpg",
    },
  },
  {
    title: "Raff's Tire",
    href: "https://www.raffstire.com",
    category: { name: "Landing Page", href: "https://www.raffstire.com" },
    description:
      "All your used tire and auto repair needs in one place. We worked with Raff's Tires to build a beautiful landing page that showcases their services and allows customers to contact them.",
    date: "August 2023",
    datetime: "2023-08-16",
    imageUrl:
      "/raffs.png",
    author: {
      name: "Ali Shalash",
      href: "#",
      imageUrl:
        "/ali.jpg",
    },
  },
];

export default function Portfolio() {
  return (
    <div className="relative mb-8 bg-gray-50 px-4 pb-20 pt-16 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24" id="portfolio">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Recent Projects</h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            We have worked with a variety of clients to help them achieve their goals. Here are some of our recent Pixel Perfect projects.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image
                  className="h-full w-full object-cover"
                  src={project.imageUrl}
                  alt="image for content"
                  height={720}
                  width={1280}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={project.category.href} className="hover:underline">
                      {project.category.name}
                    </a>
                  </p>
                  <a href={project.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <a href={project.author.href}>
                        <span className="sr-only">{project.author.name}</span>
                        <Image
                          className="h-10 w-10 rounded-full"
                          src={project.author.imageUrl}
                          alt="image for content"
                          height={192}
                          width={192}
                        />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={project.author.href} className="hover:underline">
                          {project.author.name}
                        </a>
                      </p>
                      <div className="flex w-full justify-between">
                        <div className="flex space-x-1 text-sm text-gray-500">
                          <time dateTime={project.datetime}>{project.date}</time>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a href={project.href} className="hover:underline">
                    Visit Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
