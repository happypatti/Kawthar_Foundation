import ContactUs from "@/components/shared/contact-us";

export default async function DigitalMarketing() {
  const people = [
    {
      name: 'Ali Shalash',
      role: 'Owner - Developer - Engineer',
      imageUrl:
        '/ali1.png',
      bio: 'Ali was born and raised in Lexington, KY. He attended Tates Creek High School and went on to graduate from the University of Kentucky with a Bachelor of Science in Computer Engineering. He has experience developing in a wide range of languages and frameworks. He is a fullstack developer and has a passion for building beautiful websites. He is also a firmware engineer and has experience working with microcontrollers and embedded systems. He is a self taught web developer using his experience as a computer engineer and the knowledge gained during his education.',
      twitterUrl: '#',
      linkedinUrl: '#',
    },
    // More people...
  ]

return (
  <div className="z-10 flex flex-col items-center justify-center">

  <div className="z-10 flex flex-col items-center justify-center">
  <div className="bg-white">
    <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
        <div className="space-y-5 sm:space-y-4">
          <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">About Us</h2>
          <p className="text-xl text-gray-900">
            Pixel Perfect Digital Solutions is obsessed with helping businesses grow. We offer a wide range of services to help you grow your business. We are a fullstack digital agency that can help you with all of your digital needs. We offer web design, web development, SEO, and digital marketing services. We are commited to getting you the results you deserve.
          </p>
        </div>
        <div className="lg:col-span-2">
          <ul
            role="list"
            className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0"
          >
            {people.map((person) => (
              <li key={person.name} className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-3 sm:aspect-w-3 sm:aspect-h-4">
                    <img className="object-cover shadow-lg rounded-md" src={person.imageUrl} alt="" />
                  </div>
                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-blue-400">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-900">{person.bio}</p>
                      </div>
                    
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    <ContactUs />
  </div>
  </div>
  </div>
)
}