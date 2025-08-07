import axios from 'axios';

const API_URL = 'http://localhost:8080/api/rentalrecords';

const RentalRecordService = {
    getAllRentalRecords: async () => {
        try {
             const token = localStorage.getItem('token');
            const response = await axios.get(API_URL,{ 
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            } 
        });
            console.log('✅ Fetched rental records:', response.data); // ✅ Logging the response
            return response;
        } catch (error) {
            console.error('❌ Error fetching rental records:', error); // ❌ Logging the error
            throw error;
        }
    },

    getRentalRecordById: async (id) => {
        return axios.get(`${API_URL}/${id}`);
    },

    createRentalRecord: async (record) => {
        const token = localStorage.getItem('token');
        console.log('JWT Token:',token,record);
    console.log('User ID from record:', record.user?.userId); // Optional chaining for safety
        
        return await axios.post(API_URL, record, { 
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            } 
        });
    },

    updateRentalRecord: async (id, record) => {
        return axios.put(`${API_URL}/${id}`, record, { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } 
        });
    },

    deleteRentalRecord: async (id) => {
        return axios.delete(`${API_URL}/${id}`, { 
            headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } 
        });
    }
};

export default RentalRecordService;
