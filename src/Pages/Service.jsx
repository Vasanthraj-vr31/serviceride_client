import React, { useState } from 'react'

const Service = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '',
    carBrand: '', carModel: '', carYear: '', vehicleNumber: '',
    engineNumber: '', appointmentDate: '', deliveryDate: '', requirements: ''
  });

  const carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Audi", "Mercedes", "Hyundai", "Tata", "Mahindra"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking Details:", formData);
    alert("Service Booked Successfully!");
    // Reset or redirect logic here
  }

  return (
    <div className="min-h-screen py-10 px-4 flex justify-center">
      <div className="w-full max-w-4xl border border-green-500/30 rounded-lg bg-black p-8 shadow-[0_0_15px_rgba(16,185,129,0.1)]">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-500">Book Your Service</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Personal Information */}
          <div className="md:col-span-2 text-xl font-semibold text-green-400 border-b border-green-500/30 pb-2">Personal Details</div>
          <input name="name" placeholder="Full Name" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="email" type="email" placeholder="Email Address" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="address" placeholder="Address" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="city" placeholder="City" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="state" placeholder="State" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />

          {/* Vehicle Information */}
          <div className="md:col-span-2 text-xl font-semibold text-green-400 border-b border-green-500/30 pb-2 mt-4">Vehicle Details</div>
          <select name="carBrand" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500">
            <option value="">Select Car Brand</option>
            {carBrands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
          </select>
          <input name="carModel" placeholder="Car Model" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="carYear" type="number" placeholder="Model Year" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="vehicleNumber" placeholder="Vehicle Number" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          <input name="engineNumber" placeholder="Engine Number" onChange={handleChange} required className="p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />

          {/* Service Details */}
          <div className="md:col-span-2 text-xl font-semibold text-green-400 border-b border-green-500/30 pb-2 mt-4">Service Details</div>
          <div>
            <label className="block text-sm text-green-400 mb-1">Appointment Date</label>
            <input name="appointmentDate" type="date" onChange={handleChange} required className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          </div>
          <div>
            <label className="block text-sm text-green-400 mb-1">Preferred Delivery Date</label>
            <input name="deliveryDate" type="date" onChange={handleChange} required className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500" />
          </div>
          <textarea name="requirements" placeholder="Service Requirements / Issues" onChange={handleChange} rows="4" className="md:col-span-2 p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500"></textarea>

          <button type="submit" className="md:col-span-2 p-4 bg-green-600 text-black font-bold text-lg rounded hover:bg-green-500 transition-colors mt-4">
            Book Your Service
          </button>
        </form>
      </div>
    </div>
  )
}

export default Service