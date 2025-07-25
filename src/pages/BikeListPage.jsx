import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BikeService from '../services/BikeService';
import BikeCard from '../components/BikeCard';
import video2 from '../assets/video2.mp4';

const BikeListPage = () => {
  const [bikes, setBikes] = useState([]);
  const [filteredBikes, setFilteredBikes] = useState([]);
  const [sortOrder, setSortOrder] = useState('a-z');
  const [filterName, setFilterName] = useState('');
  const [userRole, setUserRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBikes();
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) setUserRole(user.role);
  }, []);

  useEffect(() => {
    let updatedBikes = bikes.filter(bike =>
      bike.bikeName.toLowerCase().includes(filterName.toLowerCase())
    );

    if (sortOrder === 'a-z') {
      updatedBikes.sort((a, b) => a.bikeName.localeCompare(b.bikeName));
    } else if (sortOrder === 'z-a') {
      updatedBikes.sort((a, b) => b.bikeName.localeCompare(a.bikeName));
    } else if (sortOrder === 'price-low-high') {
      updatedBikes.sort((a, b) => a.perDayRental - b.perDayRental);
    } else if (sortOrder === 'price-high-low') {
      updatedBikes.sort((a, b) => b.perDayRental - a.perDayRental);
    }

    setFilteredBikes(updatedBikes);
  }, [bikes, sortOrder, filterName]);

  const fetchBikes = async () => {
    try {
      const response = await BikeService.getAllBikes();
      setBikes(response.data);
    } catch (error) {
      console.error('Failed to fetch bikes:', error);
    }
  };

  const handleAddBikeClick = () => {
    navigate('/bikes/addbike');
  };

  const deleteBike = async (id) => {
    try {
      await BikeService.deleteBike(id);
      fetchBikes();
    } catch (error) {
      console.error('Failed to delete bike:', error);
    }
  };

  const handleEdit = (bike) => {
    navigate(`/bikes/edit/${bike.bikeId}`);
  };

  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        paddingTop: '75px', // space for navbar
      }}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -1,
          filter: 'brightness(45%)',
        }}
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div
        style={{
          width: '100%',
          maxWidth: '1200px',
          margin: 'auto',
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          padding: '30px',
          borderRadius: '10px',
          color: '#fff',
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Bikes Management</h2>
        {userRole === 'ADMIN' && (
          <button
            onClick={handleAddBikeClick}
            style={{
              padding: '12px 24px',
              borderRadius: '5px',
              backgroundColor: '#1e90ff',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              fontSize: '18px',
              marginBottom: '20px',
            }}
          >
            Add Bike
          </button>
        )}

        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <input
            type="text"
            placeholder="Filter by name"
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #555',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              flex: 1,
            }}
          />
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            style={{
              padding: '12px',
              borderRadius: '5px',
              border: '1px solid #555',
              backgroundColor: '#1a1a1a',
              color: '#fff',
              flex: 1,
            }}
          >
            <option value="a-z">Sort by Name: A-Z</option>
            <option value="z-a">Sort by Name: Z-A</option>
            <option value="price-low-high">Price: Low to High</option>
            <option value="price-high-low">Price: High to Low</option>
          </select>
        </div>

        <h2 style={{ textAlign: 'center', margin: '30px 0 20px' }}>Available Bikes</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {filteredBikes.length === 0 ? (
            <p style={{ color: '#ccc', fontSize: '18px' }}>No bikes found.</p>
          ) : (
            filteredBikes.map((bike) => (
              <div
                key={bike.bikeId}
                style={{
                  margin: '10px',
                  flex: '1 1 calc(33.333% - 20px)',
                  backgroundColor: '#111',
                  color: '#fff',
                  padding: '10px',
                  borderRadius: '5px',
                  transition: 'transform 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
              >
                <BikeCard
                  bike={bike}
                  onDelete={() => deleteBike(bike.bikeId)}
                  onEdit={() => handleEdit(bike)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeListPage;
