const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center gap-2 bg-orange-100 text-primary text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Summer Workshop 2026
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              AI & Robotics
              <br />
              <span className="text-primary">Summer Workshop</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Ignite your child's curiosity with hands-on AI and robotics projects. 
              Build real robots, train AI models, and learn future-ready skills from industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-orange-200"
              >
                Enroll Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#details"
                className="inline-flex items-center justify-center gap-2 text-gray-700 font-semibold px-8 py-4 rounded-full border-2 border-gray-200 hover:border-primary hover:text-primary transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="flex items-center gap-6 mt-10 justify-center md:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Limited Seats
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Certificate Included
              </div>
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-primary to-orange-300 rounded-3xl rotate-6 shadow-2xl flex items-center justify-center">
                <div className="-rotate-6 text-center text-white">
                  <div className="text-7xl mb-4">🤖</div>
                  <div className="text-2xl font-bold">AI & Robotics</div>
                  <div className="text-lg opacity-90">Summer 2026</div>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-2xl">👧</div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900">Ages 8-14</div>
                    <div className="text-xs text-gray-500">Perfect for kids</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
