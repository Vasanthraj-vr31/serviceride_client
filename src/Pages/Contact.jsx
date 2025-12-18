import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full border border-green-500/30 bg-black p-10 rounded-lg text-center shadow-[0_0_20px_rgba(16,185,129,0.1)]">
        <h2 className="text-4xl font-bold text-green-500 mb-10">Contact Us</h2>

        <div className="space-y-8">
          <div className="group">
            <h3 className="text-xl font-semibold text-gray-400 mb-2 group-hover:text-green-400 transition-colors">Our Address</h3>
            <p className="text-2xl text-white font-light tracking-wide">
              1234, Peelamedu,<br />
              Coimbatore – 641004
            </p>
          </div>

          <div className="w-16 h-1 bg-green-500/30 mx-auto rounded"></div>

          <div className="group">
            <h3 className="text-xl font-semibold text-gray-400 mb-2 group-hover:text-green-400 transition-colors">Contact Number</h3>
            <p className="text-3xl text-green-500 font-bold tracking-wider">
              8844476498
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact