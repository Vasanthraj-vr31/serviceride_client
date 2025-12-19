import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Service = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  // Config for authorized requests
  const authConfig = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', city: '', state: '',
    carBrand: '', carModel: '', carYear: '', vehicleNumber: '',
    engineNumber: '', appointmentDate: '', deliveryDate: '', requirements: '',
    serviceId: ''
  });

  const carBrands = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW", "Audi", "Mercedes", "Hyundai", "Tata", "Mahindra"];

  useEffect(() => {
    // Fetch services on load
    const fetchServices = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/services');
        setServices(res.data);
      } catch (err) {
        console.error("Error fetching services", err);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Create Vehicle
      const vehicleData = {
        make: formData.carBrand,
        model: formData.carModel,
        year: formData.carYear,
        licensePlate: formData.vehicleNumber
      };

      const vehicleRes = await axios.post('http://localhost:5000/api/vehicles', vehicleData, authConfig);
      const newVehicleId = vehicleRes.data.vehicle._id;

      // 2. Create Booking
      const bookingData = {
        vehicleId: newVehicleId,
        serviceId: formData.serviceId,
        date: formData.appointmentDate,
        deliveryDate: formData.deliveryDate,
        requirements: formData.requirements,
        contactDetails: {
          name: formData.name,
          phone: formData.phone,
          address: formData.address,
          city: formData.city,
          state: formData.state
        }
      };

      await axios.post('http://localhost:5000/api/booking', bookingData, authConfig);

      alert("Service Booked Successfully!");
      navigate('/'); // Redirect to home on success

    } catch (error) {
      console.error("Booking Error:", error.response?.data?.message || error.message);
      alert("Booking Failed: " + (error.response?.data?.message || "Unknown Error"));
    }
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

          {/* NEW: Service Selection Dropdown */}
          <div className="md:col-span-2">
            <label className="block text-sm text-green-400 mb-1">Select Service Type</label>
            <select name="serviceId" onChange={handleChange} required className="w-full p-3 bg-gray-900 border border-green-500/50 rounded text-white focus:outline-none focus:border-green-500">
              <option value="">-- Choose a Service --</option>
              {services.map(service => (
                <option key={service._id} value={service._id}>
                  {service.name} - ${service.price} ({service.duration})
                </option>
              ))}
            </select>
          </div>

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