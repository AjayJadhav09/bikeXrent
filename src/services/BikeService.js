import axios from 'axios';

const API_URL = 'http://localhost:8080/api/bikes';

const BikeService = {
    getAllBikes: async () => {
        const token = localStorage.getItem('token');
        return axios.get(API_URL, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },

    getBikeById: async (id) => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Bike Data:', id);

        return axios.get(`${API_URL}/${id}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
    },

    createBike: async (bikeFormData) => {
        const token = localStorage.getItem('token');
        console.log('Token:', token);
        console.log('Bike Form Data:', bikeFormData);

        return axios.post(API_URL, bikeFormData, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    updateBike: async (id, bike) => {
        return axios.put(`${API_URL}/${id}`, bike, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    },

    deleteBike: async (id) => {
        return axios.delete(`${API_URL}/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
    }
};

export default BikeService;
