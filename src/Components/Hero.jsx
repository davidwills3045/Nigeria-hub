import React from 'react'

const Hero = () => {
  return (
    <section 
    id='home'
      className="relative pt-20 md:pt-24 h-screen flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1541336032412-2048a678540d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="container mx-auto px-4 relative text-secondary">
        <div className="max-w-2xl">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Building Nigeria's Future Together
          </h2>
          <p className="text-xl mb-8">
            Discover exciting career opportunities and join our mission to drive innovation and growth across Nigeria.
          </p>
          <a 
            href="#opportunities" 
            className="inline-block bg-primary text-secondary px-8 py-4 rounded-lg font-semibold hover:bg-[#006e42] transform hover:-translate-y-1 transition-all duration-300 shadow-lg"
          >
            Explore Opportunities
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero