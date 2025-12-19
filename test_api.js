import axios from 'axios';

const testServices = async () => {
    try {
        const res = await axios.get('http://localhost:5000/api/services');
        console.log("Status:", res.status);
        console.log("Services Found:", res.data.length);
        console.log("Sample Service:", res.data[0]);
    } catch (error) {
        console.error("Error fetching services:", error.message);
    }
};

testServices();
