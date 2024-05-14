// components/LandingPage.js
export default function Hero() {
  return (
      <div className="flex flex-col items-center min-h-screen xl:w-full lg:w-full py-2">
          <div className="bg-cover bg-center h-screen w-full sm:h-screen rounded-xl" style={{ backgroundImage: "url('/test.jpg')" }}>
              <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
                  <h1 className="text-4xl font-bold text-white md:text-6xl">The Kawthar Foundation</h1>
                  <p className="mt-3 text-lg text-gray-300 md:text-xl">
                      Committed to making a difference. 
                  </p>
                  <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                      Learn More
                  </button>
              </div>
          </div>
    
          <div className="container bg-white mx-auto px-4 rounded-xl mb-20">
              <section className="text-gray-600 body-font">
                  <div className="container px-5 py-24 mx-auto">
                      <div className="flex flex-wrap w-full mb-20">
                          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Our Mission</h1>
                              <div className="h-1 w-20 bg-blue-500 rounded"></div>
                          </div>
                          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 text-lg">
                              The Kawthar Foundation aims to give charity to those in need.
                          </p>
                      </div>
                  </div>
              </section>
          </div>
      </div>
  );
}
