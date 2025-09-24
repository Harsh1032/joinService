import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import JoinServices from "./components/JoinServices";
import MarqueeBanner from "./components/MarqueeBanner";

import PatientDashboard from "./components/PatientDashboard/PatientDashboard";
import PatientNavbar from "./components/PatientDashboard/PatientNavbar";
import PersonalizeHealthPlan from "./components/PatientDashboard/PersonalizeHealthPlan";
import ServiceProviderDashboard from "./components/ServiceProviderDashboard/ServiceProviderDashboard";

import AdminDshboard from "./components/AdminDashboard/AdminDshboard";
import AdminNavbar from "./components/AdminDashboard/AdminNavbar";
import RejectApplications from "./components/AdminDashboard/RejectApplications";

import ScrollToHash from "./components/ScrollToHash";

// ✅ import your new Plans page
import Plans from "./components/Plans";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isPatientDashboard = location.pathname.startsWith("/patientDashboard");
  const isPersonalizePLan = location.pathname.startsWith("/personalizePlan");
  const isServiceProviderDashboard = location.pathname.startsWith(
    "/serviceProviderDashboard"
  );
  const isAdminDashboard = location.pathname.startsWith("/adminDashboard");
  const isAdminRejectApplication =
    location.pathname.startsWith("/adminRejectApplication");

  const isPublic =
    !isAdminDashboard &&
    !isAdminRejectApplication &&
    !isPatientDashboard &&
    !isPersonalizePLan &&
    !isServiceProviderDashboard;

  return (
    <div className="w-full font-bagoss min-h-screen bg-[#D9D9D94F]">
      {/* Show marquee only on public pages */}
      {isPublic && (
        <MarqueeBanner
          sticky
          height="44px"
          bg="#E8F1FF"
          color="#1E56D9"
          text="StrokeSMART is an AI-powered collaboration platform turning stroke rehab into measurable, affordable, and connected care for a better quality of life."
        />
      )}

      {isAdminDashboard || isAdminRejectApplication ? (
        <AdminNavbar />
      ) : isPatientDashboard || isPersonalizePLan || isServiceProviderDashboard ? (
        <PatientNavbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      ) : (
        <Navbar />
      )}

      {/* enables /#hash smooth scrolling across routes */}
      <ScrollToHash />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/joinServices" element={<JoinServices />} />
        
        {/* ✅ New Plans route */}
        <Route path="/plans" element={<Plans />} />

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
        <Route path="/adminRejectApplication" element={<RejectApplications />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
