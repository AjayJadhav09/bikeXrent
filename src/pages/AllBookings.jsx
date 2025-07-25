import React, { useState, useEffect } from 'react';
import RentalRecordService from '../services/RentalRecordService';
import video2 from '../assets/video2.mp4';

const BookingsPage = () => {
  const [rentalRecords, setRentalRecords] = useState([]);

  useEffect(() => {
    fetchRentalRecords();
  }, []);

  const fetchRentalRecords = async () => {
    try {
      const response = await RentalRecordService.getAllRentalRecords();
      setRentalRecords(response.data);
    } catch (error) {
      console.error('Error fetching rental records:', error);
    }
  };

  const deleteRentalRecord = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this booking?');
    if (confirmed) {
      try {
        await RentalRecordService.deleteRentalRecord(id);
        setRentalRecords(prev => prev.filter(record => record.rentalRecordId !== id));
        window.alert('Booking deleted successfully.');
      } catch (error) {
        console.error('Error deleting rental record:', error);
        window.alert('Failed to delete the booking.');
      }
    }
  };

  const calculateTotalCost = (startDate, endDate, perDayRental) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.floor((end - start) / (1000 * 60 * 60 * 24)) + 1;
    return days * perDayRental;
  };

  return (
    <div style={styles.page}>
      {/* Background Video */}
      <video autoPlay muted loop style={styles.video}>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Main Content */}
      <div style={styles.content}>
        <h1 style={styles.heading}>All Rental Records</h1>
        <div style={{ overflowX: 'auto' }}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>User Name</th>
                <th style={styles.th}>Bike Name</th>
                <th style={styles.th}>Bike Number</th>
                <th style={styles.th}>Start Date</th>
                <th style={styles.th}>End Date</th>
                <th style={styles.th}>Total Cost</th>
                <th style={styles.th}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {rentalRecords.length === 0 ? (
                <tr>
                  <td colSpan="7" style={styles.noRecords}>
                    No rental records found.
                  </td>
                </tr>
              ) : (
                rentalRecords.map((record) => (
                  <tr key={record.rentalRecordId}>
                    <td style={styles.td}>{record.user.userFullName}</td>
                    <td style={styles.td}>{record.bike.bikeName}</td>
                    <td style={styles.td}>{record.bike.bikeNumber}</td>
                    <td style={styles.td}>{new Date(record.rentalStartDate).toLocaleDateString()}</td>
                    <td style={styles.td}>{new Date(record.rentalEndDate).toLocaleDateString()}</td>
                    <td style={styles.td}>
                      ₹{calculateTotalCost(record.rentalStartDate, record.rentalEndDate, record.bike.perDayRental).toFixed(2)}
                    </td>
                    <td style={styles.td}>
                      <button style={styles.deleteButton} onClick={() => deleteRentalRecord(record.rentalRecordId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    position: 'relative',
    minHeight: '100vh',
    width: '100%',
    paddingTop: '75px', // adjust based on navbar height
    fontFamily: 'Segoe UI, sans-serif',
    overflow: 'hidden',
  },
  video: {
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    filter: 'brightness(45%)',
  },
  content: {
    maxWidth: '1200px',
    margin: '0 auto',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    color: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    color: '#ffcc00',
    fontSize: '2.5rem',
    borderBottom: '2px solid #ffcc00',
    display: 'inline-block',
    paddingBottom: '10px',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    color: '#fff',
  },
  th: {
    backgroundColor: '#333',
    color: '#ffcc00',
    padding: '10px',
    textAlign: 'left',
    borderBottom: '1px solid #777',
  },
  td: {
    padding: '10px',
    borderBottom: '1px solid #555',
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  noRecords: {
    textAlign: 'center',
    padding: '20px',
    color: '#ccc',
    fontSize: '18px',
  },
};

export default BookingsPage;
