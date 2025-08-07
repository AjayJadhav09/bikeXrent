import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BikeService from '../services/BikeService';

const AddBikePage = () => {
  const [bike, setBike] = useState({
    bikeName: '',
    bikeNumber: '',
    bikeDescription: '',
    perDayRental: '',
    isAvailable: true,
  });

  const [bikePhoto, setBikePhoto] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBike({ ...bike, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in bike) {
      formData.append(key, bike[key]);
    }
    formData.append('bikePhoto', bikePhoto);

    try {
      await BikeService.createBike(formData);
      navigate('/bikes');
    } catch (error) {
      console.error('Failed to add bike:', error);
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Bike</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        {[
          { label: 'Bike Name', id: 'bikeName', type: 'text' },
          { label: 'Bike Number', id: 'bikeNumber', type: 'text' },
          { label: 'Description', id: 'bikeDescription', type: 'textarea' },
          { label: 'Per Day Rental', id: 'perDayRental', type: 'number' },
        ].map(({ label, id, type }) => (
          <div key={id} style={styles.inputGroup}>
            <label htmlFor={id} style={styles.label}>{label}:</label>
            {type === 'textarea' ? (
              <textarea
                id={id}
                name={id}
                value={bike[id]}
                onChange={handleChange}
                required
                style={styles.input}
              />
            ) : (
              <input
                type={type}
                id={id}
                name={id}
                value={bike[id]}
                onChange={handleChange}
                required
                style={styles.input}
              />
            )}
          </div>
        ))}

        <div style={styles.inputGroup}>
          <label htmlFor="bikePhoto" style={styles.label}>Bike Photo:</label>
          <input
            type="file"
            id="bikePhoto"
            accept="image/*"
            onChange={(e) => setBikePhoto(e.target.files[0])}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.checkboxGroup}>
          <label htmlFor="isAvailable" style={styles.label}>Available:</label>
          <input
            type="checkbox"
            id="isAvailable"
            name="isAvailable"
            checked={bike.isAvailable}
            onChange={handleChange}
            style={styles.checkbox}
          />
        </div>

        <button type="submit" style={styles.button}>Add Bike</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px 20px',
    maxWidth: '800px',
    margin: '80px auto',
    borderRadius: '12px',
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#222',
    fontWeight: 'bold',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  checkboxGroup: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  label: {
    marginBottom: '6px',
    color: '#333',
    fontWeight: '500',
  },
  input: {
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  checkbox: {
    transform: 'scale(1.2)',
    cursor: 'pointer',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: '0.3s',
  },
};

export default AddBikePage;
