import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const NavItem = ({ to, children, className = "" }) => (
  <Link
    to={to}
    className={`text-[15px] md:text-[17px] font-medium text-slate-800 hover:text-blue-600 transition-colors ${className}`}
  >
    {children}
  </Link>
);

const OutlineBtn = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 md:px-5 md:py-2.5 rounded-md border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors text-[14px] md:text-[16px] font-medium"
  >
    {children}
  </Link>
);

const SolidBtn = ({ to, children }) => (
  <Link
    to={to}
    className="px-4 py-2 md:px-5 md:py-2.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors text-[14px] md:text-[16px] font-medium"
  >
    {children}
  </Link>
);

const Navbar = ({ offsetTop = "0px" }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onDocClick = (e) => {
      if (!isMenuOpen) return;
      if (!e.target.closest?.("#navbar")) setIsMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [isMenuOpen]);

  return (
    <header
      className="sticky w-full z-50"
      style={{ top: offsetTop }}
    >
      <nav
        id="navbar"
        className="w-full bg-white/90 backdrop-blur-md border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          {/* Height: mobile h-14, desktop h-20 */}
          <div className="h-14 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/#top" className="shrink-0 flex items-center gap-2">
              <img
                src="/Logo.png"
                alt="company logo"
                className="h-8 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-8">
              <NavItem to="/#top">Home</NavItem>
              <NavItem to="/#pricing">Pricing</NavItem>
              <NavItem to="/services">Find Services</NavItem>
              <NavItem to="/joinservices">Join Services</NavItem>
              <NavItem to="/#aboutUs">About us</NavItem>
              <NavItem to="/#contactUs">Contact us</NavItem>

              <div className="ml-4 h-6 w-px bg-slate-200" />

              <OutlineBtn to="/patientDashboard">Patient Dashboard</OutlineBtn>
              <SolidBtn to="/serviceProviderDashboard">Service Dashboard</SolidBtn>
            </div>

            {/* Mobile toggle */}
            <button
              className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-slate-100"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile sheet */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3">
              <NavItem to="/#top">Home</NavItem>
              <NavItem to="/#pricing">Pricing &amp; Plans</NavItem>
              <NavItem to="/services">Find Services</NavItem>
              <NavItem to="/#aboutUs">About us</NavItem>
              <NavItem to="/#contactUs">Contact us</NavItem>

              <div className="h-0.5 bg-slate-100 my-1" />

              <OutlineBtn to="/patientDashboard">Patient Dashboard</OutlineBtn>
              <SolidBtn to="/serviceProviderDashboard">Service Dashboard</SolidBtn>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
