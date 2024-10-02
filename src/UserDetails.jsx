import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
  const location = useLocation();
  const { user } = location.state || {}; 

  if (!user) {
    return <div>No user details available</div>; 
  }

  return (
    <div className="  d-flex justify-content-center align-items-center" style={{ backgroundColor: 'skyblue', height:"100vh", padding: '20px' }}>
      <div style={{width: "500px"}} className=' bg-light  p-5 shadow rounded'>
          <h2 className='fw-bolder fs-1  text-center'>DETAILS</h2>
          <p className='text-primary '><strong  className='text-dark  '>Full Name:</strong><sapn className=""> {user.firstname} {user.lastname}</sapn></p>
          <p className='text-primary'><strong className='text-dark'>Address:</strong> {user.address}</p>
          <p className='text-primary'><strong className='text-dark'>Pincode:</strong> {user.pincode}</p>
          <p className='text-primary'><strong className='text-dark'>Phone:</strong> {user.phone}</p>
          <p className='text-primary'><strong className='text-dark'>Email:</strong> {user.email}</p>
          <p className='text-primary'><strong className='text-dark'>Gender:</strong> {user.gender}</p>
          <p className='text-primary'><strong className='text-dark'>Date of Birth:</strong> {user.date}</p>
          <p className='text-primary'><strong className='text-dark'>Course:</strong> {user.course}</p>
      </div>
    </div>
  );
};

export default UserDetails;
