import React, { useState } from 'react';
import './Bloodbank.css';
import { Link } from 'react-router-dom'
import call from './call.jpg';

const DEFAULT_DONORS = [
  { id: 1, name: 'John Smith', bloodType: 'A+' ,},
  { id: 2, name: 'Jane Doe', bloodType: 'B+' },
  { id: 3, name: 'Bob Johnson', bloodType: 'O+' },
  { id: 4, name: 'Alice Smith', bloodType: 'AB+' },
];

function Bloodbank() {
  const [bloodType, setBloodType] = useState('');
  const [donors, setDonors] = useState([]);

  function handleSearch() {
    // Filter the list of default donors by blood type
    const filteredDonors = DEFAULT_DONORS.filter(
      (donor) => donor.bloodType === bloodType
    );
    setDonors(filteredDonors);
  }

  return (
    <div className='box'>
        <nav className='justify-content-between'>
            <h4>Mansahaai</h4>
            
        <Link to="/Login" className="btn btn-light " >
                Login
              </Link>
        </nav>
        
      <h1>Welcome to the Blood Bank</h1>
      
      <p>
        Please select a blood type from the list below to see available donors:
      </p>
      <ul>
        <li
          className={bloodType === 'A+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('A+');
            handleSearch();
          }}
        >
          A+
        </li>
        <li
          className={bloodType === 'B+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('B+');
            handleSearch();
          }}
        >
          B+
        </li>
        <li
          className={bloodType === 'O+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('O+');
            handleSearch();
          }}
        >
          O+
        </li>
        <li
          className={bloodType === 'AB+' ? 'selected' : ''}
          onClick={() => {
            setBloodType('AB+');
            handleSearch();
          }}
        >
          AB+
        </li>
      </ul>
      {bloodType && (
        <div className='box1'>
          <h2>Available Donors with Blood Type {bloodType}:</h2>
          {donors.length > 0 ? (
            <ul>
              {donors.map((donor) => (
                <div className='box-shadow d-flex p-5 align-items-center'>
                <li className="p-3" key={donor.id}>{donor.name}</li>
                <img src={call} className="w-25 h-25 " />
                </div>
              ))}
            </ul>
          ) : (
            <p>No donors found with blood type {bloodType}.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Bloodbank;
