import React from 'react'

const About = () => {
  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-4xl font-bold text-green-500 mb-8 text-center">About ServiceRide</h2>

      <div className="space-y-8 text-lg text-gray-300 leading-relaxed text-justify">
        <p>
          At <strong>ServiceRide</strong>, we are dedicated to revolutionizing the way you care for your vehicle.
          Established with a mission to provide transparent, reliable, and high-quality automotive services,
          we bridge the gap between vehicle owners and top-rated mechanics.
        </p>

        <div className="grid md:grid-cols-3 gap-6 my-10">
          <div className="p-6 border border-green-500/30 rounded bg-gray-900/50 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-3">Our Mission</h3>
            <p className="text-sm">To deliver hassle-free car maintenance solutions with absolute integrity and professionalism.</p>
          </div>
          <div className="p-6 border border-green-500/30 rounded bg-gray-900/50 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-3">Reliability</h3>
            <p className="text-sm">We vet every service center to ensure your car is in safe and expert hands.</p>
          </div>
          <div className="p-6 border border-green-500/30 rounded bg-gray-900/50 text-center">
            <h3 className="text-xl font-bold text-green-400 mb-3">Quality</h3>
            <p className="text-sm">From genuine parts to skilled labor, we never compromise on the quality of service.</p>
          </div>
        </div>

        <p>
          Whether it's a routine oil change, a complex engine repair, or a complete makeover, ServiceRide
          stands by its commitment to excellence. We understand that your vehicle is more than just a machine;
          it's a part of your daily life. That's why we strive to get you back on the road safely and quickly.
        </p>
      </div>
    </div>
  )
}

export default About