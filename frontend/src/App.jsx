import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Services from "./components/Services";
import JoinServices from "./components/JoinServices";
import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import PatientNavbar from "./components/PatientDashboard/PatientNavbar";
import PersonalizeHealthPlan from "./components/PatientDashboard/PersonalizeHealthPlan";
import ServiceProviderDashboard from "./components/ServiceProviderDashboard/ServiceProviderDashboard";
import AdminDshboard from "./components/AdminDashboard/AdminDshboard";
import AdminNavbar from "./components/AdminDashboard/AdminNavbar";
import RejectApplications from "./components/AdminDashboard/RejectApplications";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();

  // Check if the current route is for the patient dashboard
  const isPatientDashboard = location.pathname.startsWith("/patientDashboard");
  const isPersonalizePLan = location.pathname.startsWith("/personalizePlan");
  const isServiceProviderDashboard = location.pathname.startsWith(
    "/serviceProviderDashboard"
  );
  const isAdminDashboard = location.pathname.startsWith("/adminDashboard");
  const isAdminRejectApplication = location.pathname.startsWith("/adminRejectApplication");
  

  return (
    <div className="w-full font-bagoss min-h-screen bg-[#D9D9D94F]">
      {isAdminDashboard || isAdminRejectApplication ? (
        <AdminNavbar />
      ) : isPatientDashboard ||
        isPersonalizePLan ||
        isServiceProviderDashboard ? (
        <PatientNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/joinServices" element={<JoinServices />} />
        <Route
          path="/patientDashboard"
          element={<PatientDashboard isMenuOpen={isMenuOpen} />}
        />
        <Route
          path="/personalizePlan"
          element={<PersonalizeHealthPlan isMenuOpen={isMenuOpen} />}
        />
        <Route
          path="/serviceProviderDashboard"
          element={<ServiceProviderDashboard isMenuOpen={isMenuOpen} />}
        />
        <Route path="/adminDashboard" element={<AdminDshboard />} />
        <Route path="/adminRejectApplication" element={<RejectApplications/>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
