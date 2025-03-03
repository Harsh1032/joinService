import React from 'react';
import LandingPage from './LandingPage';

const PatientDashboard = ({isMenuOpen}) => {
  return (
    <div className='w-full min-h-screen'>
      <LandingPage isMenuOpen={isMenuOpen}/>
    </div>
  )
}

export default PatientDashboard