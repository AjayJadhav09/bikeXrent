import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BikeService from '../services/BikeService';

const BikeDetailPage = () => {
    const { id } = useParams();
    const [bike, setBike] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBike = async () => {
            try {
                const response = await BikeService.getBikeById(id);
                setBike(response.data);
            } catch (error) {
                console.error('Failed to fetch bike:', error);
            }
        };

        fetchBike();
    }, [id]);

    const handleDelete = async () => {
        const confirm = window.confirm('Are you sure you want to delete this bike?');
        if (!confirm) return;

        try {
            await BikeService.deleteBike(id);
            navigate('/bikes');
        } catch (error) {
            console.error('Failed to delete bike:', error);
        }
    };

    return (
        <div style={{ padding: '30px', maxWidth: '600px', margin: 'auto' }}>
            {bike ? (
                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px' }}>
                    <h2>{bike.bikeName}</h2>
                    <p><strong>Bike Number:</strong> {bike.bikeNumber}</p>
                    <p><strong>Description:</strong> {bike.bikeDescription}</p>
                    <p><strong>Per Day Rental:</strong> ₹{bike.perDayRental}</p>
                    <img
                        src={bike.bikePhoto || 'https://via.placeholder.com/300x200?text=No+Image'}
                        alt={bike.bikeName}
                        style={{ width: '100%', margin: '20px 0', borderRadius: '8px' }}
                    />
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <button onClick={() => navigate(`/bikes/edit/${id}`)} style={{ padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px' }}>
                            Edit
                        </button>
                        <button onClick={handleDelete} style={{ padding: '10px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '4px' }}>
                            Delete
                        </button>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default BikeDetailPage;
